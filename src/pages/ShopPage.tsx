import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, type Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import colVeiledAbayaNoireImage from "@/assets/col-veiled-abaya-noire.jpg";
import colVeiledHeroImage from "@/assets/col-veiled-hero.jpg";
import colVeiledHeroNewImage from "@/assets/col-veiled-hero-new.jpg";
import hommeModerneImage from "@/assets/homme_moderne.jpg";
import voileBlancImage from "@/assets/voile_blanc.jpg";
import voileCashmereImage from "@/assets/Voile_Cashmere_2K.jpg";
import voileZerjeyImage from "@/assets/Voile_Zerjey_2K.jpg";
import pashminaPremiumImage from "@/assets/pashmina_premium_3K.png";
import robeChemiseLongueImage from "@/assets/Robe_chemise_longue_15K.jpg";
import robeLargeImage from "@/assets/Robe_large_20K.jpg";
import robeTailleImage from "@/assets/Robe_taille_20k.jpg";
import robeLongueImage from "@/assets/Robe_longue_20K.jpg";
import yereolofImage from "@/assets/yereolof.jpg";
import costumeAfricain40kImage from "@/assets/Costume_africain_40k.jpg";
import costeAfricain40kImage from "@/assets/Coste_africain_40k.jpg";
import abayaRobeInterieurImage from "@/assets/Abaya_robe intérieur_30k.jpg";
import ensembleFloretteJupeHautImage from "@/assets/Ensemble_florette_Jupe_&_haut_15K.jpg";
import ensembleJupeChemiseImage from "@/assets/Ensemble_jupe_&_Chemise_15K.jpg";
import whatsappImageEnsemble from "@/assets/WhatsApp Image 2026-04-05 at 01.30.04.jpeg";
import ensembleVariantImage from "@/assets/879a7b710d4a921ab271e56097483c9d.jpg";
import jalabeHommeChemiseImage from "@/assets/Jalabé_homme_Chemisé_25k.jpg";
import jalabeVariantOneImage from "@/assets/2c7a1bd17dfbe679c240cea2a4608f45.jpg";
import jalabeVariantTwoImage from "@/assets/7aae1f27d61349160e939115983aa4fd.jpg";
import jalabaImage from "@/assets/jalaba.jpg";
import { getProductCollectionPrice } from "@/lib/pricing";

const categories = ["Tout", "Hijab", "Robe", "Costume africain", "Abaya robe", "Jalébé", "Ensemble 2 pieces"];
const sortOptions = [
  { value: "default", label: "Trier par" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "name", label: "Nom A-Z" },
];

const shopProductImages: Record<string, string> = {
  "1": voileZerjeyImage,
  "2": robeChemiseLongueImage,
  "4": colVeiledAbayaNoireImage,
  "6": jalabeHommeChemiseImage,
  "7": voileCashmereImage,
  "8": hommeModerneImage,
};

const shopProducts: Product[] = [
  ...products
    .filter((product) => !["3", "5"].includes(product.id))
    .map((product) => ({
    ...product,
    image: shopProductImages[product.id] ?? product.image,
  })),
  {
    id: "9",
    name: "Voile Pashmina premium",
    price: 3000,
    useCustomPrice: true,
    image: pashminaPremiumImage,
    category: "Hijab",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Beige", "Sable", "Terracotta"],
    description: "Un hijab pashmina doux et léger, avec un tombé élégant pour le quotidien.",
  },
  {
    id: "10",
    name: "Robe large 20K",
    price: 10000,
    useCustomPrice: true,
    image: robeLargeImage,
    category: "Robe",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Noir", "Taupe"],
    description: "Robe ample et elegante, pensee pour un porter fluide et confortable.",
  },
  {
    id: "11",
    name: "Robe taille",
    price: 20000,
    useCustomPrice: true,
    image: robeTailleImage,
    category: "Robe",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Noir", "Rose", "Sable"],
    description: "Robe ajustee a la taille avec une allure feminine et raffinee.",
  },
  {
    id: "12",
    name: "Robe longue",
    price: 15000,
    useCustomPrice: true,
    image: robeLongueImage,
    category: "Robe",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Creme", "Noir"],
    description: "Robe longue au tomber elegant, ideale pour une silhouette sobre et chic.",
  },
  {
    id: "13",
    name: "Yereolof",
    price: 40000,
    image: yereolofImage,
    category: "Costume africain",
    collection: "hommes",
    isNew: true,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Bleu", "Blanc", "Beige"],
    description: "Costume africain yereolof avec une allure traditionnelle et elegante.",
  },
  {
    id: "14",
    name: "Costume africain 40K",
    price: 40000,
    image: costumeAfricain40kImage,
    category: "Costume africain",
    collection: "hommes",
    isNew: true,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Noir", "Beige", "Blanc"],
    description: "Costume africain raffine, pense pour les grandes occasions et le quotidien chic.",
  },
  {
    id: "15",
    name: "Coste africain 40K",
    price: 40000,
    image: costeAfricain40kImage,
    category: "Costume africain",
    collection: "hommes",
    isNew: true,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Marine", "Gris", "Blanc"],
    description: "Modele africain structure avec une coupe sobre et un rendu elegant.",
  },
  {
    id: "16",
    name: "Col veiled hero",
    price: 30000,
    image: colVeiledHeroImage,
    category: "Abaya robe",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Noir", "Beige", "Taupe"],
    description: "Abaya robe fluide et elegante, ideale pour une allure sobre et moderne.",
  },
  {
    id: "17",
    name: "Col veiled hero new",
    price: 30000,
    image: colVeiledHeroNewImage,
    category: "Abaya robe",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Noir", "Sable", "Cafe"],
    description: "Version renouvelee de l'abaya robe avec un tomber leger et raffine.",
  },
  {
    id: "18",
    name: "Abaya robe interieur 30K",
    price: 30000,
    image: abayaRobeInterieurImage,
    category: "Abaya robe",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Noir", "Creme", "Marron"],
    description: "Abaya robe d'interieur confortable et elegante pour un usage quotidien chic.",
  },
  {
    id: "19",
    name: "Jalabe variante 1",
    price: 25000,
    image: jalabeVariantOneImage,
    category: "Jalébé",
    collection: "hommes",
    isNew: true,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Beige", "Blanc", "Taupe"],
    description: "Modele jalabe fluide et soigne pour un style sobre et traditionnel.",
  },
  {
    id: "20",
    name: "Jalabe variante 2",
    price: 25000,
    image: jalabeVariantTwoImage,
    category: "Jalébé",
    collection: "hommes",
    isNew: true,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Blanc", "Gris", "Bleu"],
    description: "Jalabe elegante avec une coupe confortable pour le quotidien et les occasions.",
  },
  {
    id: "21",
    name: "Jalaba",
    price: 25000,
    image: jalabaImage,
    category: "Jalébé",
    collection: "hommes",
    isNew: true,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Marron", "Beige", "Noir"],
    description: "Jalaba classique au rendu raffine, pensee pour une allure elegante.",
  },
  {
    id: "22",
    name: "Ensemble florette jupe et haut 15K",
    price: 15000,
    image: ensembleFloretteJupeHautImage,
    category: "Ensemble 2 pieces",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rose", "Creme", "Sable"],
    description: "Ensemble florette jupe et haut au tomber feminin et raffine.",
  },
  {
    id: "23",
    name: "Ensemble jupe et chemise 15K",
    price: 15000,
    image: ensembleJupeChemiseImage,
    category: "Ensemble 2 pieces",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Beige", "Noir"],
    description: "Ensemble jupe et chemise pour une silhouette elegante et facile a porter.",
  },
  {
    id: "24",
    name: "Voile blanc",
    price: 10000,
    image: voileBlancImage,
    category: "Ensemble 2 pieces",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Blanc"],
    description: "Modele leger et lumineux pour completer une tenue deux pieces.",
  },
  {
    id: "25",
    name: "WhatsApp Image 2026-04-05 at 01.30.04",
    price: 10000,
    image: whatsappImageEnsemble,
    category: "Ensemble 2 pieces",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Noir", "Taupe"],
    description: "Ensemble moderne avec une coupe fluide et une presence elegante.",
  },
  {
    id: "26",
    name: "Ensemble 879a7b710d4a921ab271e56097483c9d",
    price: 10000,
    image: ensembleVariantImage,
    category: "Ensemble 2 pieces",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Noir", "Creme", "Marron"],
    description: "Ensemble deux pieces au style sobre, pense pour le quotidien et les sorties.",
  },
];

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = activeCategory === "Tout" ? shopProducts : shopProducts.filter((p) => p.category === activeCategory);
    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => getProductCollectionPrice(a) - getProductCollectionPrice(b));
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => getProductCollectionPrice(b) - getProductCollectionPrice(a));
    }
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
