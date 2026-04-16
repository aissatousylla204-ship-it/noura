import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import collectionVeiled from "@/assets/femme_moderne_voile.jpg";
import collectionModern from "@/assets/femme_moderne_vide.jpg";
import collectionMen from "@/assets/homme_moderne.jpg";
import homeProduct2Image from "@/assets/col-veiled-hero.jpg";
import homeProduct4Image from "@/assets/echarpe.jpg";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const whyFeatures = [
  {
    icon: "/icons/icon-quality.svg",
    title: "Matières de qualité",
    desc: "Des tissus nobles sélectionnés avec soin.",
  },
  {
    icon: "/icons/icon-cuts.svg",
    title: "Coupes élégantes",
    desc: "Des silhouettes raffinées et modernes.",
  },
  {
    icon: "/icons/icon-inclusive.svg",
    title: "Inclusive & pudique",
    desc: "Pour toutes les femmes et hommes, tous les styles.",
  },
  {
    icon: "/icons/icon-livraison.svg",
    title: "Livraison rapide",
    desc: "Expédition sous 48h au Sénégal.",
  },
];

const collections = [
  { img: collectionVeiled, name: "Femmes Voilées", desc: "Élégance et pudeur au quotidien" },
  { img: collectionModern, name: "Femmes Modernes", desc: "Style contemporain et raffiné" },
  { img: collectionMen, name: "Hommes", desc: "L'homme élégant et moderne" },
];

const featuredProductImages: Record<string, string> = {
  "2": homeProduct2Image,
  "4": homeProduct4Image,
};

const reviews = [
  {
    name: "AMINA K.",
    quote:
      "Les robes NOURA sont d'une qualité exceptionnelle. Enfin une marque qui comprend nos besoins.",
    stars: 5,
  },
  {
    name: "SARAH L.",
    quote:
      "Le blazer camel est devenu mon indispensable. Élégant et confortable, un vrai investissement.",
    stars: 5,
  },
  {
    name: "FATIMA M.",
    quote:
      "Je recommande à toutes les femmes qui cherchent des tenues pudiques et modernes. Bravo NOURA !",
    stars: 5,
  },
];

const StarRating = ({ count = 5, filled = 4 }: { count?: number; filled?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < filled ? "fill-primary text-primary" : "fill-foreground text-foreground"
        }`}
      />
    ))}
  </div>
);

const Index = () => {
  const { addItem } = useCart();
  const featuredProducts = products.slice(0, 4).map((product) => ({
    ...product,
    image: featuredProductImages[product.id] ?? product.image,
  }));

  return (
    <div>
      {/* ① Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="NOURA - Mode pudique et élégante"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/56" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-[#faf8f5] tracking-[-1.8px] leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)" }}
          >
            NOURA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-sans font-normal text-[#faf8f5] tracking-[-1.8px] mb-10"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
          >
            L'élégance, sans compromis.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/boutique"
              className="bg-primary text-white px-8 py-4 text-[12px] tracking-[1.2px] uppercase font-sans font-normal hover:bg-primary/90 transition-colors"
            >
              Découvrir la boutique
            </Link>
            <Link
              to="/collections"
              className="border border-white/60 text-[#faf8f5] px-8 py-4 text-[12px] tracking-[1.2px] uppercase font-sans font-normal hover:bg-white/10 transition-colors"
            >
              Nos collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ② Brand Introduction */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "rgba(214,192,174,0.15)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <motion.div {...fadeInUp}>
              <h2
                className="font-serif font-light tracking-[-0.9px] leading-[40px] mb-6 text-foreground"
                style={{ fontSize: "36px" }}
              >
                La mode pudique,{" "}
                <em className="italic">réinventée.</em>
              </h2>
              <p className="font-sans text-[14px] text-[#666666] leading-[26px] max-w-xl">
                NOURA est née d'une conviction forte : l'élégance et la pudeur peuvent coexister
                harmonieusement. Chaque création est conçue pour sublimer aussi bien la femme que
                l'homme modernes, qu'ils soient voilés ou non, grâce à des matières nobles et des
                coupes contemporaines.
              </p>
            </motion.div>

            <div className="flex flex-col gap-10">
              {[
                {
                  icon: "✦",
                  title: "Élégance",
                  desc: "Des coupes raffinées inspirées de la haute couture.",
                },
                {
                  icon: "◇",
                  title: "Pudeur",
                  desc: "Des tenues qui respectent et célèbrent la modestie.",
                },
                {
                  icon: "○",
                  title: "Modernité",
                  desc: "Un design contemporain pour la femme d'aujourd'hui.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-5"
                >
                  <span className="text-[#ddbea9] text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-serif font-medium text-[20px] text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[13px] text-[#666666]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ③ Nos Collections */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-sans font-bold text-[36px] tracking-[-0.9px] leading-[40px] text-foreground">
              Nos Collections
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Link to="/collections" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                    <img
                      src={col.img}
                      alt={col.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-2xl text-white font-light">{col.name}</h3>
                      <p className="font-sans text-xs text-white/70 mt-1">{col.desc}</p>
                    </div>
                  </div>
                  <span className="text-[11px] tracking-[1.2px] uppercase font-sans text-primary hover:text-primary/80 transition-colors">
                    Explorer →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ Pièces Phares + ⑤ Pourquoi NOURA — shared sage background */}
      <div style={{ backgroundColor: "rgba(165,165,141,0.5)" }}>
        {/* ④ Pièces Phares */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.div {...fadeInUp} className="text-center mb-14">
              <h2 className="font-serif font-light text-[36px] tracking-[-0.9px] leading-[40px] text-foreground">
                Pièces <em className="italic">Phares</em>
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  {/* Image */}
                  <div
                    className="relative aspect-[3/4] overflow-hidden rounded-sm mb-3"
                    style={{ backgroundColor: "#efeae7" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {product.isNew && (
                      <span
                        className="absolute top-3 left-3 text-white text-[9px] uppercase tracking-widest font-sans font-medium px-3 py-1"
                        style={{ backgroundColor: "rgba(165,165,141,0.85)" }}
                      >
                        Nouveau
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <h3
                    className="font-serif font-light tracking-[-0.45px] text-foreground leading-tight mb-1"
                    style={{ fontSize: "18px" }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-[14px] text-[#666666] leading-5">
                      {product.price.toLocaleString("fr-FR")} FCFA
                    </p>
                    <button
                      onClick={() => addItem(product)}
                      aria-label={`Ajouter ${product.name} au panier`}
                      className="w-10 h-10 rounded-full border border-border/60 bg-white/80 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 flex-shrink-0"
                    >
                      <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>
                  <div className="mt-2">
                    <StarRating filled={4} />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp} className="text-center mt-14">
              <Link
                to="/boutique"
                className="inline-block border border-foreground/30 text-foreground px-10 py-4 text-[12px] tracking-[1.2px] uppercase font-sans font-normal hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Voir toute la boutique
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ⑤ Pourquoi NOURA */}
        <section className="pb-20 md:pb-28">
          <div className="container">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="font-serif font-light text-[36px] tracking-[-0.9px] leading-[40px] text-foreground">
                Pourquoi <em className="italic">NOURA</em>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {whyFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-[26px] flex items-start gap-4 px-6 py-5"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain flex-shrink-0"
                    style={{ color: "#cb997e" }}
                  />
                  <div>
                    <h3 className="font-serif font-medium text-[18px] text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[12px] text-[#666666]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ⑥ Rejoignez la communauté NOURA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-serif font-light text-[36px] tracking-[-0.9px] leading-[40px] text-foreground">
              Rejoignez la communauté <em className="italic">NOURA</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="border border-[rgba(224,217,209,0.5)] bg-white/40 p-8 rounded-sm"
              >
                <div className="mb-4">
                  <StarRating filled={5} />
                </div>
                <p className="font-sans text-[13px] text-[#666666] leading-relaxed mb-5 italic">
                  "{review.quote}"
                </p>
                <p className="font-sans text-[12px] tracking-[1.2px] uppercase font-bold text-foreground">
                  {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
