import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, Users } from 'lucide-react';
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <div className="relative p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl transform -rotate-3"></div>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1753467030070_lp0rbc60nxa_lingua.png"
                alt="Selo de qualidade NTC Brasil"
                className="relative z-10 w-full h-auto rounded-xl shadow-medium object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Construindo o Futuro, <br />
              <span className="gradient-text">Um Projeto de Cada Vez.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Na NTC Brasil, acreditamos que cada construção é mais do que
              tijolos e argamassa; é a fundação de um sonho. Com anos de
              experiência no setor, nos dedicamos a entregar projetos que não
              apenas atendem, mas superam as expectativas, combinando inovação,
              segurança e um rigoroso controle de qualidade.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Target size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-text-primary">
                    Nossa Missão
                  </h4>
                  <p className="text-text-secondary mt-1">
                    Entregar soluções de engenharia com máxima eficiência e
                    qualidade, garantindo a satisfação total de nossos clientes
                    e parceiros.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Building size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-text-primary">
                    Nossa Visão
                  </h4>
                  <p className="text-text-secondary mt-1">
                    Ser referência em excelência e inovação na construção civil,
                    contribuindo para o desenvolvimento sustentável do Brasil.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
