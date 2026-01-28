import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Serigrafia',
    description: 'Técnica tradicional com acabamento impecável e cores vibrantes',
    icon: '🎨',
    features: ['Alta durabilidade', 'Cores vibrantes', 'Acabamento profissional'],
  },
  {
    id: 2,
    title: 'Sublimação',
    description: 'Impressão digital com qualidade fotográfica em diversos materiais',
    icon: '🖼️',
    features: ['Qualidade fotográfica', 'Sem limite de cores', 'Acabamento brilhante'],
  },
  {
    id: 3,
    title: 'Bordado',
    description: 'Bordados precisos e elegantes para um acabamento premium',
    icon: '✨',
    features: ['Precisão milimétrica', 'Acabamento luxuoso', 'Durabilidade extrema'],
  },
  {
    id: 4,
    title: 'Personalização',
    description: 'Soluções customizadas para suas necessidades específicas',
    icon: '🎯',
    features: ['Designs únicos', 'Consultoria profissional', 'Produção sob demanda'],
  },
];

export default function Services() {
  return (
    <section className="relative py-20 md:py-32 bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mb-48"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-light mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Técnicas avançadas para transformar suas ideias em produtos de qualidade excepcional
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }
                }
              }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>

              {/* Card Content */}
              <div className="relative p-8 md:p-10 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display font-bold text-light mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-primary font-semibold flex items-center gap-2 group/btn"
                >
                  Saiba Mais
                  <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray mb-8">
            Não encontrou o que procura? Temos soluções customizadas para você
          </p>
          <button className="px-8 py-4 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Fale com Nosso Time
          </button>
        </motion.div>
      </div>
    </section>
  );
}
