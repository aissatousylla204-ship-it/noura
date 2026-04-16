import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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

      {/* Product name */}
      <h3
        className="font-serif font-light tracking-[-0.45px] text-foreground leading-tight mb-1"
        style={{ fontSize: "18px" }}
      >
        {product.name}
      </h3>

      {/* Price + Cart button */}
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

      {/* Star rating - 4/5 */}
      <div className="flex gap-0.5 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < 4 ? "fill-primary text-primary" : "fill-foreground text-foreground"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProductCard;
