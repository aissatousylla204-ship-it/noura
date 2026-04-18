import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import colMenJalaba from "@/assets/col-men-jalaba.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
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
    category: "Robe",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Terracotta", "Beige", "Noir"],
    description: "Confectionné dans une soie premium, ce hijab allie fluidité et élégance au quotidien.",
  },
  {
    id: "2",
    name: "Robe Longue Sauge",
    price: 30000,
    image: product2,
    category: "Robes",
    collection: "femmes-modernes",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sauge", "Crème"],
    description: "Une robe fluide et élégante en lin premium, parfaite pour toutes les occasions.",
  },
  {
    id: "3",
    name: "Blazer Structuré Camel",
    price: 7000,
    image: product3,
    category: "Vestes",
    collection: "femmes-modernes",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Noir"],
    description: "Un blazer taillé avec précision pour une silhouette raffinée et moderne.",
  },
  {
    id: "4",
    name: "Abaya robe ",
    price: 30000,
    image: product4,
    category: "Accessoires",
    collection: "femmes-voilees",
    isNew: true,
    sizes: ["Unique"],
    colors: ["Crème", "Beige"],
    description: "Un accessoire luxueux en cachemire, douceur et chaleur au rendez-vous.",
  },
  {
    id: "5",
    name: "Robe Chemise",
    price: 15000,
    image: product2,
    category: "Ensemnle",
    collection: "femmes-modernes",

    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Crème", "Noir", "Sauge"],
    description: "Pantalon fluide en lin de haute qualité, coupe ample et élégante.",
  },
  {
    id: "6",
    name: "Chemise Pantalon Lin Homme",
    price: 20000,
    image: colMenJalaba,
    category: "Chemises",
    collection: "hommes",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blanc", "Beige", "Bleu ciel"],
    description: "Chemise en lin naturel, coupe décontractée mais soignée.",
  },
  {
    id: "7",
    name: "Voile en soie",
    price: 30000,
    image: product1,
    category: "Abayas",
    collection: "femmes-voilees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Noir", "Bleu nuit"],
    description: "Abaya élégante et moderne, confectionnée dans un tissu fluide et léger.",
  },
  {
    id: "8",
    name: "Costume Lin Beige",
    price: 15000,
    image: product4,
    category: "Costumes",
    collection: "hommes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Gris"],
    description: "Costume deux pièces en lin, élégance décontractée pour l'homme moderne.",
  },
];

export const collections: Collection[] = [
  {
    id: "femmes-voilees",
    price: 2000,
    unit: "FCFA",
    name: "Femmes Voilées",
    description: "Des tenues élégantes conçues pour les femmes qui portent le voile avec fierté.",
  },
  {
    id: "femmes-modernes",
    price: 7000,
    unit: "FCFA",
    name: "Femmes Modernes",
    description: "Une mode pudique et contemporaine pour la femme active et raffinée.",
  },
  {
    id: "hommes",
    price: 15000,
    unit: "FCFA",
    name: "Hommes",
    description: "Des pièces intemporelles pour l'homme élégant et moderne.",
  },
];
