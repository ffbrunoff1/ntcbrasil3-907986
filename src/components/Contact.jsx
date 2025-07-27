import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userEmail: 'ffbrunoff@yahoo.com.br',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Vamos <span className="gradient-text">Construir Juntos</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Tem um projeto em mente? Entre em contato conosco. Nossa equipe está
            pronta para ajudar a transformar sua ideia em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-3 bg-bg-light p-8 md:p-12 rounded-2xl shadow-subtle"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-brand-primary text-white font-bold py-4 px-8 rounded-xl shadow-md hover:bg-brand-accent transition-all duration-300 transform hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin mr-2" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center text-green-600 bg-green-100 p-4 rounded-lg">
                  <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                </div>
              )}
              {submitError && (
                <div className="flex items-center text-red-600 bg-red-100 p-4 rounded-lg">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-bg-light p-8 rounded-2xl shadow-subtle">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-text-primary">
                    Telefone
                  </h4>
                  <a
                    href="tel:+5544991040774"
                    className="text-text-secondary hover:text-brand-primary"
                  >
                    +55 44 99104-0774
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-bg-light p-8 rounded-2xl shadow-subtle">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-text-primary">
                    E-mail
                  </h4>
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="text-text-secondary hover:text-brand-primary"
                  >
                    ffbrunoff@yahoo.com.br
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-bg-light p-8 rounded-2xl shadow-subtle">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-text-primary">
                    Endereço
                  </h4>
                  <p className="text-text-secondary">
                    Padre Lebret 801, G05 Bloco 03
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
