import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-dark/95 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-2 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <img
            src="/images/estamparia-logo.png"
            alt="Estamparia Cataguases"
            className="h-24 w-auto -my-6"
          />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block px-6 py-2 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
        >
          Solicitar Orçamento
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-light focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark border-t border-primary/10"
      >
        <nav className="flex flex-col gap-4 p-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 mt-4">
            Solicitar Orçamento
          </button>
        </nav>
      </motion.div>
    </header>
  );
}
