import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, type Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import echarpeImage from "@/assets/echarpe.jpg";
import colVeiledHeroImage from "@/assets/col-veiled-hero.jpg";
import colVeiledAbayaNoireImage from "@/assets/col-veiled-abaya-noire.jpg";
import colModernBlazerCamelImage from "@/assets/col-modern-blazer-camel.jpg";
import hommeModerneImage from "@/assets/homme_moderne.jpg";
import voileBlancImage from "@/assets/voile_blanc.jpg";
import cinqColleImage from "@/assets/cinq_colle.jpg";

const categories = ["Tout", "Hijabs", "Robes", "Vestes", "Pantalons", "Accessoires", "Abayas", "Chemises", "Costumes"];
const sortOptions = [
  { value: "default", label: "Trier par" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "name", label: "Nom A-Z" },
];

const shopProductImages: Record<string, string> = {
  "1": echarpeImage,
  "2": colVeiledHeroImage,
  "4": colVeiledAbayaNoireImage,
  "5": colModernBlazerCamelImage,
  "6": hommeModerneImage,
  "8": voileBlancImage,
};

const shopProducts: Product[] = [
  ...products.map((product) => ({
    ...product,
    image: shopProductImages[product.id] ?? product.image,
  })),
  {
    id: "9",
    name: "Hijab Pashmina premium",
    price: 3000,
    image: cinqColleImage,
    category: "Hijabs",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Beige", "Sable", "Terracotta"],
    description: "Un hijab pashmina doux et léger, avec un tombé élégant pour le quotidien.",
  },
];

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = activeCategory === "Tout" ? shopProducts : shopProducts.filter((p) => p.category === activeCategory);
    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    else if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8 font-sans text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Boutique</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-10"
        >
          La <em className="italic">Boutique</em>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-48 shrink-0">
            <h3 className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-4">Catégories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm font-sans transition-colors ${
                      activeCategory === cat ? "text-primary font-medium" : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-muted-foreground">{filtered.length} article{filtered.length > 1 ? "s" : ""}</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-border rounded-sm px-3 py-2 text-xs font-sans focus:outline-none focus:border-primary"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 relative">
                <span className="absolute inset-0 flex items-center justify-center text-[200px] font-serif text-muted/30 select-none">N</span>
                <p className="relative font-sans text-muted-foreground">Aucun article trouvé.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
