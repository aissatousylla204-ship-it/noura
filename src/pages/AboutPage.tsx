import { motion } from "framer-motion";
import { Globe, Heart, Leaf, type LucideIcon } from "lucide-react";
import founderImage from "@/assets/founder.jpg";
import heroImage from "@/assets/hero-image.jpg";
import collectionVeiled from "@/assets/collection-veiled.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

const values: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Leaf,
    title: "Durabilité",
    description: "Des matières durables et une production responsable pour réduire notre impact.",
  },
  {
    icon: Heart,
    title: "Inclusivité",
    description: "Des collections pour toutes les femmes, qu'elles portent le voile ou non.",
  },
  {
    icon: Globe,
    title: "Savoir-faire",
    description: "Confection européenne, matières nobles, finitions impeccables.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-foreground">
      {/* Hero */}
      <section className="relative h-[250px] overflow-hidden md:h-[320px]">
        <motion.img
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="NOURA"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#f0dfcf]/70" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-sans text-[32px] font-bold tracking-[-0.04em] text-[#1e1916] md:text-[42px]"
          >
            Notre Histoire
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              {...fadeInUp}
              className="mx-auto w-full max-w-[430px] lg:mx-0 lg:max-w-none"
            >
              <img
                src={founderImage}
                alt="Fondatrice de NOURA"
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.08 }}>
              <h2 className="max-w-xl font-sans text-[26px] font-bold tracking-[-0.04em] text-[#1e1916] md:text-[32px]">
                La naissance de NOURA
              </h2>

              <div className="mt-6 max-w-[540px] space-y-5 text-[12px] leading-[2.05] text-[#5e5750] md:text-[13px]">
                <p>
                  NOURA est née d'une conviction forte : les femmes ne devraient jamais avoir à
                  choisir entre pudeur et élégance.
                </p>
                <p>
                  Face à ce constat, NOURA a été créé pour proposer des tenues qui allient
                  modernité, confort et raffinement, tout en respectant les valeurs et identités de
                  chaque personne.
                </p>
                <p>
                  Chaque création est pensée avec soin, mettant en avant des coupes élégantes, des
                  matières de qualité et une attention particulière aux détails. NOURA s'adresse à
                  une mode libre, distinctive, qui s'adapte à tous les styles de vie, sans
                  jamais compromettre la pudeur et le style de chacun.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#d6d5c3] py-16 md:py-20">
        <div className="container">
          <motion.blockquote
            {...fadeInUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mx-auto max-w-2xl font-serif text-[18px] italic leading-[1.8] text-[#5a534d] md:text-[21px]">
              « La vraie élégance, c'est quand le vêtement sert la femme, et non l'inverse. Chez
              NOURA, nous habillons des femmes qui savent qui elles sont. »
            </p>
            <footer className="mt-6 text-[10px] uppercase tracking-[0.36em] text-[#6a645d]">
              - Fondatrice de NOURA
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="text-center font-serif text-[30px] font-light tracking-[-0.03em] text-[#2a211d] md:text-[34px]"
          >
            Nos Valeurs
          </motion.h2>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-5 flex h-8 w-8 items-center justify-center text-[#d2b39b]">
                    <Icon className="h-5 w-5" strokeWidth={1.2} />
                  </div>
                  <h3 className="font-serif text-[18px] font-light text-[#312722]">
                    {value.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[230px] text-[12px] leading-6 text-[#6a635d]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing image */}
      <section className="relative h-[320px] overflow-hidden md:h-[420px]">
        <img
          src={collectionVeiled}
          alt="Collection NOURA"
          className="h-full w-full object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-[#cfcfbe]/35" />
      </section>
    </div>
  );
};

export default AboutPage;
