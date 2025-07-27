import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Award,
      title: 'Qualidade e Precisão',
      description:
        'Nosso compromisso com a excelência se reflete em cada detalhe, desde o planejamento até a entrega final do projeto.',
    },
    {
      icon: Zap,
      title: 'Inovação e Tecnologia',
      description:
        'Utilizamos as mais modernas tecnologias e metodologias construtivas para garantir eficiência, segurança e sustentabilidade.',
    },
    {
      icon: ShieldCheck,
      title: 'Confiança e Transparência',
      description:
        'Construímos relacionamentos sólidos baseados na comunicação clara e honestidade em todas as etapas do processo.',
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description:
        'Entendemos suas necessidades para transformar sua visão em um projeto concreto, personalizado e funcional.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Por que escolher a{' '}
            <span className="gradient-text">NTC Brasil?</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Nossos diferenciais são os pilares que sustentam a qualidade e a
            confiança que entregamos em cada obra.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-subtle hover:shadow-medium transition-shadow duration-300 flex flex-col text-center items-center transform hover:-translate-y-2"
              variants={cardVariants}
            >
              <div className="bg-brand-primary text-white rounded-full p-4 mb-6 inline-block">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
