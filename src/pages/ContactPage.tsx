import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-image.jpg";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="NOURA - Contact"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-3xl md:text-5xl font-serif font-light tracking-tight"
        >
          Nous <em className="italic">Contacter</em>
        </motion.h1>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-light tracking-tight mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Nom", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "subject", label: "Sujet", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm font-sans focus:outline-none focus:border-primary transition-colors rounded-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm font-sans focus:outline-none focus:border-primary transition-colors rounded-sm resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-primary text-primary-foreground px-10 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-primary/90 transition-colors rounded-sm"
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl font-serif font-light tracking-tight mb-8">Nos coordonnées</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" strokeWidth={1} />,
                    label: "Email",
                    value: "nourabyaysha@gmail.com",
                  },
                  {
                    icon: <Phone className="w-5 h-5" strokeWidth={1} />,
                    label: "Téléphone",
                    value: "+221 77 698 91 48",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" strokeWidth={1} />,
                    label: "Adresse",
                    value: "Dakar, Sénégal",
                  },
                  {
                    icon: <span className="text-lg leading-none">⏰</span>,
                    label: "Horaires",
                    value: "Lun - Ven : 09h-20h\nSam : 10h-19h",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="text-primary mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-sans text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-10">
                <div className="relative aspect-video overflow-hidden rounded-sm border border-border/60 bg-muted shadow-sm">
                  <iframe
                    title="Localisation de NOURA à Dakar, Sénégal"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-17.54%2C14.64%2C-17.35%2C14.8&layer=mapnik&marker=14.7167%2C-17.4677"
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                  <div className="absolute left-4 bottom-4 rounded-sm bg-background/90 px-3 py-2 shadow-sm">
                    <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
                      Position
                    </p>
                    <p className="font-sans text-sm font-medium">Dakar, Sénégal</p>
                  </div>
                </div>
                <a
                  href="https://www.openstreetmap.org/?mlat=14.7167&mlon=-17.4677#map=13/14.7167/-17.4677"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs tracking-widest uppercase font-sans text-primary hover:text-primary/80 transition-colors"
                >
                  Ouvrir dans OpenStreetMap
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
