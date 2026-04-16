import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/boutique", label: "Boutique" },
  { to: "/collections", label: "Collections" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = searchValue.trim();
    if (!trimmed) return;
    navigate(`/recherche?q=${encodeURIComponent(trimmed)}`);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#cb997e] backdrop-blur-sm">
      <div className="relative flex items-center h-[81px] px-6 lg:px-16">
        {/* Left: Logo */}
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

        {/* Center: Main nav (desktop) */}
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

        {/* Right: Search + User + Cart (desktop) */}
        <div className="ml-auto hidden md:flex items-center gap-5">
          <form className="relative" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              placeholder="Rechercher..."
              aria-label="Rechercher"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="h-9 w-56 rounded-full border border-[rgba(224,217,209,0.60)] bg-[rgba(250,248,245,0.60)] pl-4 pr-10 text-sm font-dm text-foreground/80 placeholder:text-[rgba(26,26,26,0.50)] focus:outline-none focus:ring-1 focus:ring-white/40"
            />
            <button
              type="submit"
              aria-label="Rechercher"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/70"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          <Link
            to="/compte"
            aria-label="Mon compte"
            className="text-white hover:text-black/60 transition-colors"
          >
            <User className="w-5 h-5" strokeWidth={1.5} />
          </Link>

          <Link
            to="/panier"
            aria-label="Panier"
            className="relative text-white hover:text-black/60 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-[9px] rounded-full flex items-center justify-center font-sans font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile: cart only */}
        <Link
          to="/panier"
          aria-label="Panier"
          className="md:hidden ml-auto relative text-white p-2"
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {totalItems > 0 && (
            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-foreground text-background text-[9px] rounded-full flex items-center justify-center font-sans font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/20 bg-[#cb997e]">
          <nav className="flex flex-col px-6 py-6 gap-5">
            <form className="relative" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                placeholder="Rechercher..."
                aria-label="Rechercher"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="h-10 w-full rounded-full border border-white/30 bg-white/20 pl-4 pr-10 text-sm font-dm text-white placeholder:text-white/60 focus:outline-none"
              />
              <button type="submit" aria-label="Rechercher" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-white" />
              </button>
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
