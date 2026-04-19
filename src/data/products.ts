import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import colMenJalaba from "@/assets/col-men-jalaba.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  useCustomPrice?: boolean;
  customUnit?: string;
  image: string;
  category: string;
  collection: string;
  isNew?: boolean;
  sizes: string[];
  colors: string[];
  description: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Voile Zerjey Premium",
    price: 2000,
    image: product1,
    category: "Hijab",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Terracotta", "Beige", "Noir"],
    description: "Voile en soie premium, fluide et elegant pour le quotidien.",
  },
  {
    id: "2",
    name: "Robe Chemise Longue",
    price: 10000,
    useCustomPrice: true,
    image: product2,
    category: "Robe",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sauge", "Creme"],
    description: "Robe chemise longue, fluide et elegante pour toutes les occasions.",
  },
  {
    id: "3",
    name: "Blazer Structure Camel",
    price: 7000,
    image: product3,
    category: "Ensemble",
    collection: "femmes-modernes",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Noir"],
    description: "Blazer taille avec precision pour une silhouette raffinee.",
  },
  {
    id: "4",
    name: "Kimono+Robe interieur",
    price: 20000,
    useCustomPrice: true,
    customUnit: "frcs",
    image: product4,
    category: "Abaya robe",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Creme", "Beige"],
    description: "Ensemble kimono et robe interieure au rendu elegant.",
  },
  {
    id: "5",
    name: "Robe Chemise",
    price: 15000,
    image: product2,
    category: "Ensemble",
    collection: "femmes-modernes",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Creme", "Noir", "Sauge"],
    description: "Ensemble fluide en lin avec une coupe ample et elegante.",
  },
  {
    id: "6",
    name: "Jalab\u00e9 Noir",
    price: 30000,
    useCustomPrice: true,
    customUnit: "frcs",
    image: colMenJalaba,
    category: "Jalab\u00e9",
    collection: "hommes",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blanc", "Beige", "Bleu ciel"],
    description: "Jalabe noir confortable et soigne pour une allure elegante.",
  },
  {
    id: "7",
    name: "Voile Cashmere",
    price: 2000,
    image: product1,
    category: "Hijab",
    collection: "femmes-voilees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Noir", "Bleu nuit"],
    description: "Voile cashmere doux et leger pour un style raffine.",
  },
  {
    id: "8",
    name: "Costume africain nude",
    price: 30000,
    useCustomPrice: true,
    customUnit: "FRCS",
    image: product4,
    category: "Costume africain",
    collection: "hommes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Gris"],
    description: "Costume africain nude avec une allure sobre et chic.",
  },
];

export const collections: Collection[] = [
  {
    id: "femmes-voilees",
    price: 2000,
    unit: "FCFA",
    name: "Femmes Voilees",
    description: "Des tenues elegantes concues pour les femmes qui portent le voile avec fierte.",
  },
  {
    id: "femmes-modernes",
    price: 7000,
    unit: "FCFA",
    name: "Femmes Modernes",
    description: "Une mode pudique et contemporaine pour la femme active et raffinee.",
  },
  {
    id: "hommes",
    price: 15000,
    unit: "FCFA",
    name: "Hommes",
    description: "Des pieces intemporelles pour l'homme elegant et moderne.",
  },
];
