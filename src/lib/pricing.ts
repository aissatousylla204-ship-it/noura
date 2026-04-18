import { collections, type Product } from "@/data/products";

export const WHATSAPP_OWNER_NUMBER = "221776989148";

export const getCollectionById = (collectionId: string) =>
  collections.find((collection) => collection.id === collectionId);

export const getProductCollection = (product: Product) => getCollectionById(product.collection);

export const getProductCollectionPrice = (product: Product) =>
  product.useCustomPrice ? product.price : getProductCollection(product)?.price ?? product.price;

export const getProductCollectionUnit = (product: Product) =>
  getProductCollection(product)?.unit ?? "FCFA";

export const formatCollectionPrice = (product: Product) =>
  `${getProductCollectionPrice(product).toLocaleString("fr-FR")} ${getProductCollectionUnit(product)}`;
