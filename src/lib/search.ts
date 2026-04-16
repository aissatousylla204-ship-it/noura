import { Product, collections, Product as ProductType } from "@/data/products";

export const normalizeQuery = (value: string) =>
  value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export const includesQuery = (text: string, query: string) => {
  if (!query) return true;
  return normalizeQuery(text).includes(normalizeQuery(query));
};

export const getCollectionName = (collectionId: string) =>
  collections.find((c) => c.id === collectionId)?.name ?? "";

export const matchesProduct = (product: ProductType, query: string) => {
  if (!query) return true;
  const haystack = [
    product.name,
    product.description,
    product.category,
    product.collection,
    getCollectionName(product.collection),
    product.colors.join(" "),
    product.sizes.join(" "),
  ].join(" ");
  return includesQuery(haystack, query);
};

export const matchesCollection = (collectionId: string, query: string) => {
  if (!query) return true;
  const collection = collections.find((c) => c.id === collectionId);
  if (!collection) return false;
  const haystack = [collection.name, collection.description, collection.id].join(" ");
  return includesQuery(haystack, query);
};

export const groupProductsByCollection = (products: Product[]) => {
  return products.reduce<Record<string, Product[]>>((acc, product) => {
    if (!acc[product.collection]) acc[product.collection] = [];
    acc[product.collection].push(product);
    return acc;
  }, {});
};
