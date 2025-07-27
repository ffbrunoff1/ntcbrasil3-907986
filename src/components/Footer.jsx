import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753413447626_0.png';
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Diferenciais', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.footer
      className="bg-gray-800 text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <a href="#hero">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-sm text-gray-400">
              Compromisso com excelência em cada detalhe, construindo o futuro,
              um projeto de cada vez.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span>Endereço: Padre Lebret 801, G05 Bloco 03</span>
              </li>
              <li className="flex items-start">
                <a
                  href="tel:+5544991040774"
                  className="hover:text-brand-primary transition-colors duration-300"
                >
                  Tel: +55 44 99104-0774
                </a>
              </li>
              <li className="flex items-start">
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-brand-primary transition-colors duration-300"
                >
                  E-mail: ffbrunoff@yahoo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
