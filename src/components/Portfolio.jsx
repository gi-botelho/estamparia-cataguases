import { motion } from 'framer-motion';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Camisetas Personalizadas',
    category: 'Camisetas',
    image: '/images/products-gallery.png',
    description: 'Designs exclusivos com máxima qualidade de impressão',
  },
  {
    id: 2,
    title: 'Uniformes Corporativos',
    category: 'Uniformes',
    image: '/images/process-showcase.png',
    description: 'Soluções profissionais para sua empresa',
  },
  {
    id: 3,
    title: 'Bonés e Acessórios',
    category: 'Acessórios',
    image: '/images/team-workspace.png',
    description: 'Personalizações em diversos tipos de produtos',
  },
  {
    id: 4,
    title: 'Camisetas Técnicas',
    category: 'Camisetas',
    image: '/images/hero-background.png',
    description: 'Estamparia em tecidos técnicos e performance',
  },
];

const categories = ['Todos', 'Camisetas', 'Uniformes', 'Acessórios'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredItems =
    selectedCategory === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="relative py-20 md:py-32 bg-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformamos em realidade
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category
                ? 'bg-primary text-dark shadow-lg scale-105'
                : 'bg-gray/20 text-dark hover:bg-gray/30'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden bg-dark">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Overlay */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-8 text-light"
              >
                <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray mb-4">{item.description}</p>
                <button className="w-full px-4 py-2 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300">
                  Ver Detalhes
                </button>
              </motion.div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-primary/90 text-dark font-semibold text-sm rounded-lg">
                {item.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray mb-6">
            Quer ver mais projetos? Explore nossa galeria completa
          </p>
          <button className="px-8 py-4 bg-dark text-light font-semibold rounded-lg hover:bg-dark/90 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Ver Galeria Completa
          </button>
        </motion.div>
      </div>
    </section>
  );
}
