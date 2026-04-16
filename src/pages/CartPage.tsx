import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { toast } from "sonner";

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        <nav className="mb-8 font-sans text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Panier</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-10"
        >
          Votre <em className="italic">Panier</em>
        </motion.h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-serif text-[120px] text-muted/30 leading-none select-none">N</p>
            <p className="font-sans text-muted-foreground mt-4">Votre panier est vide.</p>
            <Link
              to="/boutique"
              className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-primary/90 transition-colors rounded-sm"
            >
              Découvrir la boutique
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-6 border-b border-border/50 pb-6"
                >
                  <div className="w-24 h-32 bg-muted rounded-sm overflow-hidden shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h3 className="font-serif text-lg font-light">{item.product.name}</h3>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        >
                          <X className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="font-sans text-sm text-muted-foreground tabular-nums">{item.product.price},00 €</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary transition-colors rounded-sm"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm tabular-nums w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary transition-colors rounded-sm"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="border border-border/50 p-8 rounded-sm sticky top-24">
                <h2 className="font-serif text-xl font-light mb-6">Récapitulatif</h2>
                <div className="space-y-3 border-b border-border/50 pb-6 mb-6">
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-muted-foreground">{totalItems} article{totalItems > 1 ? "s" : ""}</span>
                    <span className="tabular-nums">{totalPrice},00 €</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="text-accent">Gratuite</span>
                  </div>
                </div>

                {/* Promo code */}
                <div className="mb-6">
                  <label className="block text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2">Code promo</label>
                  <div className="flex">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Entrez votre code"
                      className="flex-1 border border-border bg-transparent px-3 py-2 text-sm font-sans focus:outline-none focus:border-primary rounded-sm"
                    />
                    <button
                      onClick={() => toast.info("Code promo appliqué !")}
                      className="bg-foreground text-background px-4 py-2 text-xs font-sans font-medium ml-2 rounded-sm"
                    >
                      OK
                    </button>
                  </div>
                </div>

                <div className="flex justify-between font-serif text-xl mb-6">
                  <span>Total</span>
                  <span className="tabular-nums">{totalPrice},00 €</span>
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toast.success("Commande confirmée !")}
                  className="w-full bg-primary text-primary-foreground py-4 text-xs tracking-widest uppercase font-sans font-bold hover:bg-primary/90 transition-colors rounded-sm"
                >
                  Passer commande
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
