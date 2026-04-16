import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import collectionVeiled from "@/assets/collection-veiled.jpg";
import collectionModern from "@/assets/collection-modern.jpg";
import collectionMen from "@/assets/collection-men.jpg";
import { collections, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { groupProductsByCollection, matchesCollection, matchesProduct } from "@/lib/search";

const collectionImages: Record<string, string> = {
  "femmes-voilees": collectionVeiled,
  "femmes-modernes": collectionModern,
  hommes: collectionMen,
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const { matchedProducts, matchedCollections } = useMemo(() => {
    const matchedProducts = products.filter((product) => matchesProduct(product, query));
    const productsByCollection = groupProductsByCollection(matchedProducts);

    const matchedCollections = collections.filter((collection) => {
      if (matchesCollection(collection.id, query)) return true;
      return Boolean(productsByCollection[collection.id]?.length);
    });

    return { matchedProducts, matchedCollections };
  }, [query]);

  const hasQuery = query.trim().length > 0;
  const totalResults = matchedProducts.length + matchedCollections.length;

  return (
    <div className="py-10 md:py-14">
      <div className="container">
        <nav className="mb-8 font-sans text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Recherche</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-light tracking-tight"
        >
          Résultats de <em className="italic">recherche</em>
        </motion.h1>
        <p className="mt-3 font-sans text-sm text-muted-foreground">
          {hasQuery ? (
            <>
              Recherche pour "<span className="text-foreground">{query}</span>" — {totalResults} résultat{totalResults > 1 ? "s" : ""}
            </>
          ) : (
            "Saisissez un mot-clé pour lancer la recherche."
          )}
        </p>

        {!hasQuery ? null : totalResults === 0 ? (
          <div className="text-center py-16">
            <p className="font-sans text-muted-foreground">Aucun résultat trouvé. Essayez un autre mot-clé.</p>
          </div>
        ) : (
          <div className="mt-12 space-y-16">
            {matchedCollections.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight mb-6">Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {matchedCollections.map((collection) => (
                    <Link key={collection.id} to="/collections" className="group block">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                        <img
                          src={collectionImages[collection.id]}
                          alt={collection.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-serif text-2xl text-background font-light">{collection.name}</h3>
                          <p className="font-sans text-xs text-background/70 mt-1">{collection.description}</p>
                        </div>
                      </div>
                      <span className="text-xs tracking-widest uppercase font-sans text-primary hover:text-primary/80 transition-colors">
                        Explorer →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {matchedProducts.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight mb-6">Produits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                  {matchedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
