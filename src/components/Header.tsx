import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";
import { collections, products } from "@/data/products";
import { matchesCollection, matchesProduct } from "@/lib/search";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "A Propos" },
  { to: "/boutique", label: "Boutique" },
  { to: "/collections", label: "Collections" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") ?? "";
    if (location.pathname === "/recherche") {
      setSearchValue(query);
    }
  }, [location.pathname, location.search]);

  const trimmedQuery = searchValue.trim();

  const { suggestedProducts, suggestedCollections } = useMemo(() => {
    if (!trimmedQuery) {
      return { suggestedProducts: [], suggestedCollections: [] };
    }

    const suggestedProducts = products
      .filter((product) => matchesProduct(product, trimmedQuery))
      .slice(0, 4);

    const suggestedCollections = collections
      .filter((collection) => matchesCollection(collection.id, trimmedQuery))
      .slice(0, 3);

    return { suggestedProducts, suggestedCollections };
  }, [trimmedQuery]);

  const hasSuggestions = suggestedProducts.length > 0 || suggestedCollections.length > 0;

  const goToSearch = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    navigate(`/recherche?q=${encodeURIComponent(trimmed)}`);
    setDesktopSearchOpen(false);
    setMobileSearchOpen(false);
    setMobileOpen(false);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    goToSearch(searchValue);
  };

  const renderSuggestions = (mobile = false) => {
    if (!trimmedQuery) return null;

    return (
      <div
        className={`absolute left-0 right-0 top-[calc(100%+10px)] rounded-2xl border shadow-xl overflow-hidden ${
          mobile
            ? "border-white/20 bg-[#b98468] text-white"
            : "border-[rgba(224,217,209,0.7)] bg-[#faf8f5] text-foreground"
        }`}
      >
        <div className={`px-4 py-3 text-xs font-sans ${mobile ? "text-white/75" : "text-muted-foreground"}`}>
          Recherchez par produit, categorie ou collection. Exemples: hijab, abaya, jalabe, hommes.
        </div>

        {suggestedCollections.length > 0 && (
          <div className={`${mobile ? "border-t border-white/10" : "border-t border-border/60"}`}>
            <p className={`px-4 pt-3 pb-2 text-[11px] uppercase tracking-widest font-sans ${mobile ? "text-white/65" : "text-muted-foreground"}`}>
              Collections
            </p>
            {suggestedCollections.map((collection) => (
              <button
                key={collection.id}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => goToSearch(collection.name)}
                className={`w-full px-4 py-3 text-left transition-colors ${
                  mobile ? "hover:bg-white/10" : "hover:bg-black/[0.03]"
                }`}
              >
                <p className="font-sans text-sm font-medium">{collection.name}</p>
                <p className={`mt-1 text-xs ${mobile ? "text-white/70" : "text-muted-foreground"}`}>
                  Voir la collection
                </p>
              </button>
            ))}
          </div>
        )}

        {suggestedProducts.length > 0 && (
          <div className={`${mobile ? "border-t border-white/10" : "border-t border-border/60"}`}>
            <p className={`px-4 pt-3 pb-2 text-[11px] uppercase tracking-widest font-sans ${mobile ? "text-white/65" : "text-muted-foreground"}`}>
              Produits
            </p>
            {suggestedProducts.map((product) => (
              <button
                key={product.id}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => goToSearch(product.name)}
                className={`w-full px-4 py-3 text-left transition-colors ${
                  mobile ? "hover:bg-white/10" : "hover:bg-black/[0.03]"
                }`}
              >
                <p className="font-sans text-sm font-medium">{product.name}</p>
                <p className={`mt-1 text-xs ${mobile ? "text-white/70" : "text-muted-foreground"}`}>
                  {product.category} · {collections.find((collection) => collection.id === product.collection)?.name ?? ""}
                </p>
              </button>
            ))}
          </div>
        )}

        {!hasSuggestions && (
          <div className={`px-4 py-4 text-sm ${mobile ? "text-white/75" : "text-muted-foreground"}`}>
            Aucun resultat instantane. Appuyez sur Entree pour lancer une recherche complete.
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-[#cb997e] backdrop-blur-sm">
      <div className="relative flex items-center h-[81px] px-6 lg:px-16">
        <div className="flex items-center gap-3 min-w-0">
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[13px] tracking-[1.2px] uppercase font-sans font-bold transition-colors duration-200 hover:text-black/60 whitespace-nowrap ${
                location.pathname === link.to ? "text-black" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden md:flex items-center gap-5">
          <form
            className="relative"
            onSubmit={handleSearchSubmit}
            onFocus={() => setDesktopSearchOpen(true)}
            onBlur={() => setTimeout(() => setDesktopSearchOpen(false), 120)}
          >
            <input
              type="search"
              placeholder="Rechercher un article ou une collection..."
              aria-label="Rechercher"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="h-10 w-72 rounded-full border border-[rgba(224,217,209,0.60)] bg-[rgba(250,248,245,0.82)] pl-4 pr-10 text-sm font-dm text-foreground/80 placeholder:text-[rgba(26,26,26,0.50)] focus:outline-none focus:ring-1 focus:ring-white/40"
            />
            <button
              type="submit"
              aria-label="Rechercher"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/70"
            >
              <Search className="w-4 h-4" />
            </button>
            {desktopSearchOpen && renderSuggestions(false)}
          </form>

          <Link to="/panier" aria-label="Panier" className="relative">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-[9px] rounded-full flex items-center justify-center font-sans font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <Link to="/panier" aria-label="Panier" className="md:hidden ml-auto relative text-white p-2">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {totalItems > 0 && (
            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-foreground text-background text-[9px] rounded-full flex items-center justify-center font-sans font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/20 bg-[#cb997e]">
          <nav className="flex flex-col px-6 py-6 gap-5">
            <form
              className="relative"
              onSubmit={handleSearchSubmit}
              onFocus={() => setMobileSearchOpen(true)}
              onBlur={() => setTimeout(() => setMobileSearchOpen(false), 120)}
            >
              <input
                type="search"
                placeholder="Rechercher article, collection, categorie..."
                aria-label="Rechercher"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="h-10 w-full rounded-full border border-white/30 bg-white/20 pl-4 pr-10 text-sm font-dm text-white placeholder:text-white/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Rechercher"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search className="w-4 h-4 text-white" />
              </button>
              {mobileSearchOpen && renderSuggestions(true)}
            </form>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-widest uppercase font-sans font-bold py-1 transition-colors ${
                  location.pathname === link.to ? "text-black" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
