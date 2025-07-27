import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1753464141665_6a3rr64cssh_Captura_de_Tela_2025-06-02_a_s_15.28.01.png"
          alt="Fundo de construção"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Vida de qualidade para
            <br />
            <span className="gradient-text">
              transformar sonhos em realidade.
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-10"
          >
            Construa com confiança. Construa com a NTC Brasil. Nosso compromisso
            é com a excelência em cada detalhe, garantindo projetos sólidos e
            duradouros.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-brand-primary text-white font-bold text-lg py-4 px-8 rounded-xl shadow-medium hover:bg-brand-accent transition-all duration-300 transform hover:-translate-y-1"
            >
              Sua construção começa aqui
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
