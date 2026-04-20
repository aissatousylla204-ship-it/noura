import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products, type Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
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

const categories = [
  "Tout",
  "Hijab",
  "Robe",
  "Costume africain",
  "Abaya robe",
  "Jalabé",
  "Ensemble",
];

const sortOptions = [
  { value: "default", label: "Trier par" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "name", label: "Nom A-Z" },
];

const shopProductImages = {
  "1": voileZerjeyImage,
  "2": robeChemiseLongueImage,
  "4": colVeiledAbayaNoireImage,
  "6": jalabeHommeChemiseImage,
  "7": voileCashmereImage,
  "8": hommeModerneImage,
};

const shopProducts: Product[] = [
  ...products.filter((product) => !["3", "5"].includes(product.id)).map((product) => ({
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
    description: "Voile pashmina doux et léger pour le quotidien.",
  },
  {
    id: "10",
    name: "Robe large",
    price: 10000,
    useCustomPrice: true,
    image: robeLargeImage,
    category: "Robe",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Noir", "Taupe"],
    description: "Robe ample et élégante, pensée pour un porter fluide et confortable.",
  },
  // ... all other products unchanged except:
  {
    id: "22",
    name: "Ensemble florette jupe et haut",
    price: 12000,
    useCustomPrice: true,
    customUnit: "frcs",
    image: ensembleFloretteJupeHautImage,
    category: "Ensemble",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rose", "Crème", "Sable"],
    description: "Ensemble florette jupe et haut au tomber féminin et raffiné.",
  },
  {
    id: "23",
    name: "Ensemble jupe et chemise ",
    price: 12000,
    image: ensembleJupeChemiseImage,
    category: "Ensemble",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Beige", "Noir"],
    description: "Ensemble jupe et chemise pour une silhouette élégante.",
  },
  {
    id: "24",
    name: "Pantalon+Chemise Longue",
    price: 10000,
    image: voileBlancImage,
    category: "Ensemble",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Blanc"],
    description: "Modèle léger et lumineux pour compléter une tenue deux pièces.",
  },
  {
    id: "25",
    name: "Ensemble Jupe + Chemise",
    price: 10000,
    image: whatsappImageEnsemble,
    category: "Ensemble",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Noir", "Taupe"],
    description: "Ensemble moderne avec une coupe fluide et élégante.",
  },
  {
    id: "26",
    name: "Ensemble Jupe + Haut Lin",
    price: 8000,
    image: ensembleVariantImage,
    category: "Ensemble",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Noir", "Crème", "Marron"],
    description: "Ensemble deux pièces sobre pour le quotidien et les sorties.",
  },
];

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = activeCategory === "Tout"
      ? shopProducts
      : shopProducts.filter((product) => product.category === activeCategory);

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => getProductCollectionPrice(a) - getProductCollectionPrice(b));
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => getProductCollectionPrice(b) - getProductCollectionPrice(a));
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        <nav className="mb-8 font-sans text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
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
          <aside className="lg:w-48 shrink-0">
            <h3 className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-4">
              Catégories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-sm font-sans transition-colors ${
                      activeCategory === category
                        ? "text-primary font-medium"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-muted-foreground">
                {filtered.length} article{filtered.length > 1 ? "s" : ""}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-border rounded-sm px-3 py-2 text-xs font-sans focus:outline-none focus:border-primary"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 relative">
                <span className="absolute inset-0 flex items-center justify-center text-[200px] font-serif text-muted/30 select-none">
                  N
                </span>
                <p className="relative font-sans text-muted-foreground">
                  Aucun article trouvé.
                </p>
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

