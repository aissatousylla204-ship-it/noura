import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import collectionVeiledHero from "@/assets/col-veiled-abaya-noire.jpg";
import collectionModernHero from "@/assets/collection-veiled.jpg";
import collectionMenHero from "@/assets/yereolof.jpg";
import modernBlazerCamelImage from "@/assets/col-modern-blazer-camel.jpg";
import abayaRoseImage from "@/assets/abayarose.jpg";
import modernRobeSaugeImage from "@/assets/col-modern-robe-sauge.jpg";
import pantalonLargeImage from "@/assets/pantalonlarge.jpg";
import product3Image from "@/assets/product-3.jpg";
import colMenJalabaImage from "@/assets/col-men-jalaba.jpg";
import hommeModerneImage from "@/assets/homme_moderne.jpg";
import { products, collections } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const collectionImages: Record<string, string> = {
  "femmes-voilees": collectionVeiledHero,
  "femmes-modernes": collectionModernHero,
  hommes: collectionMenHero,
};

const collectionProductImages: Record<string, string[]> = {
  "femmes-voilees": [modernBlazerCamelImage, collectionVeiledHero, abayaRoseImage],
  "femmes-modernes": [modernRobeSaugeImage, product3Image, pantalonLargeImage],
  hommes: [colMenJalabaImage, hommeModerneImage],
};

const CollectionsPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-secondary/20">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/60 pointer-events-none" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-light tracking-tight"
          >
            Nos <em className="italic">Collections</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-muted-foreground mt-4 max-w-lg mx-auto"
          >
            Découvrez nos univers pensés pour sublimer chaque style.
          </motion.p>
        </div>
      </section>

      {/* Collections */}
      {collections.map((col, i) => {
        const colProducts = products.filter((p) => p.collection === col.id).slice(0, 3);
        const isReversed = i % 2 === 1;

        return (
          <section key={col.id} className="py-20 md:py-28">
            <div className="container">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isReversed ? "md:direction-rtl" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isReversed ? "md:order-2" : ""}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={collectionImages[col.id]}
                      alt={col.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isReversed ? "md:order-1" : ""}
                >
                  <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-4">{col.name}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-prose">{col.description}</p>
                  <Link
                    to="/boutique"
                    className="inline-block bg-primary text-primary-foreground px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-primary/90 transition-colors rounded-sm"
                  >
                    Explorer la collection
                  </Link>
                </motion.div>
              </div>

              {/* Collection products */}
              {colProducts.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 mt-16">
                  {colProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={{
                        ...product,
                        image: collectionProductImages[col.id]?.[index] ?? product.image,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default CollectionsPage;
