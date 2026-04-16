import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

const Footer = () => {
  const [email, setEmail] = useState("");

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/boutique", label: "Boutique" },
    { to: "/collections", label: "Collections" },
    { to: "/a-propos", label: "À Propos" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", icon: "/icons/social-pinterest.svg", label: "Pinterest" },
    { href: "#", icon: "/icons/social-instagram.svg", label: "Instagram" },
    { href: "#", icon: "/icons/social-tiktok.svg", label: "TikTok" },
    { href: "#", icon: "/icons/social-facebook.svg", label: "Facebook" },
  ];

  return (
    <footer className="bg-[#cb997e] text-white">
      <div className="container pt-16 pb-8">
        {/* Centered Logo */}
        <div className="flex justify-center mb-12">
          <Logo className="h-16 w-auto object-contain" linkClassName="flex-shrink-0" />
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Navigation */}
          <div>
            <h4 className="text-[12px] tracking-[1.2px] uppercase mb-5 text-white/60 font-sans font-bold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-white/80 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[12px] tracking-[1.2px] uppercase mb-5 text-white/60 font-sans font-bold">
              Collections
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/collections", label: "Femmes Voilées" },
                { to: "/collections", label: "Femmes Modernes" },
                { to: "/collections", label: "Hommes" },
              ].map((c) => (
                <li key={c.label}>
                  <Link
                    to={c.to}
                    className="text-[13px] text-white/80 hover:text-white transition-colors font-sans"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] tracking-[1.2px] uppercase mb-5 text-white/60 font-sans font-bold">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Email", value: "nourabyaysha@gmail.com" },
                { label: "Téléphone", value: "+221 77 698 91 48" },
                { label: "Adresse", value: "Dakar, Sénégal" },
                { label: "Horaires", value: "Lun - Ven : 09h-20h\nSam : 10h-19h" },
              ].map((item) => (
                <li key={item.label} className="text-[13px] text-white/80 font-sans">
                  <span className="block text-[11px] uppercase tracking-[1px] text-white/60 mb-0.5">
                    {item.label}
                  </span>
                  <span className="whitespace-pre-line">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[12px] tracking-[1.2px] uppercase mb-5 text-white/60 font-sans font-bold">
              Newsletter
            </h4>
            <p className="text-[13px] text-white/80 mb-4 font-sans leading-5">
              Recevez nos dernières nouveautés et offres exclusives.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="flex-1 min-w-0 bg-transparent border border-white/30 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white font-dm"
              />
              <button
                type="submit"
                className="bg-transparent border border-white/30 border-l-0 px-4 py-2 text-[12px] tracking-[1.2px] uppercase font-sans text-white hover:bg-white/10 transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[12px] text-white/60 font-sans">
            © 2026 NOURA. Tous droits réservés.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-4 h-4 object-contain brightness-0 invert"
                />
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-5 text-[12px] text-white/60 font-sans">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGV
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
