import { motion } from 'framer-motion';

const worlds = [
    {
        id: 'corporativo',
        title: 'Corporativo & Eventos',
        subtitle: 'Vista sua marca com autoridade',
        description: 'Uniformes que transitem credibilidade. Da recepção ao chão de fábrica, qualidade que representa sua empresa.',
        gradient: 'from-secondary to-dark', // Azul
        image: '/images/team-workspace.png',
        features: ['Bordado de Alta Precisão', 'Durabilidade Extrema', 'Identidade Visual Coerente']
    },
    {
        id: 'personalizado',
        title: 'Sua Estampa',
        subtitle: 'Liberdade criativa total',
        description: 'Sua arte em qualquer tecido. Serigrafia tradicional ou sublimação digital para tiragens exclusivas.',
        gradient: 'from-primary to-accent', // Terracota
        image: '/images/products-gallery.png',
        features: ['Cores Vibrantes', 'Toque Zero', 'Sem Pedido Mínimo']
    },
    {
        id: 'rove',
        title: 'Rove Performance',
        subtitle: 'A marca esportiva premium',
        description: 'Tecnologia têxtil de ponta para atletas. Leveza, proteção UV e secagem rápida para quem busca performance.',
        gradient: 'from-dark to-black', // Premium Dark
        image: '/images/hero-background.png',
        features: ['Tecnologia Active Dry', 'Modelagem Anatômica', 'Design Minimalista'],
        isPremium: true
    }
];

export default function NossosMundos() {
    return (
        <section className="py-24 bg-light">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Nossos <span className="text-secondary">Mundos</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Soluções especializadas para cada necessidade. Onde você se encaixa?
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {worlds.map((world, index) => (
                        <motion.div
                            key={world.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className={`flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 ${world.isPremium ? 'ring-2 ring-dark lg:scale-105 z-10' : ''}`}
                        >
                            {/* Card Header (Rio Motos Style Tag) */}
                            <div className={`px-6 py-4 flex items-center justify-between ${world.isPremium ? 'bg-dark text-white' : 'bg-light border-b border-gray-200'}`}>
                                <span className={`font-bold uppercase tracking-wider text-sm ${world.isPremium ? 'text-accent' : 'text-secondary'}`}>
                                    {world.isPremium ? 'Premium' : 'Categoria'}
                                </span>
                                {world.isPremium && <span className="text-xl">★</span>}
                            </div>

                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden group">
                                <div className={`absolute inset-0 bg-gradient-to-t ${world.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-10`}></div>
                                <img
                                    src={world.image}
                                    alt={world.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className={`text-2xl font-bold font-display mb-2 ${world.isPremium ? 'text-dark' : 'text-secondary'}`}>
                                    {world.title}
                                </h3>
                                <p className="text-gray-500 font-medium text-sm mb-4 uppercase tracking-wide">{world.subtitle}</p>
                                <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">
                                    {world.description}
                                </p>

                                {/* Features List (Rio Motos Icons Style) */}
                                <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2 border border-gray-100">
                                    {world.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-700">
                                            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2
                  ${world.isPremium
                                        ? 'bg-dark text-white hover:bg-gray-900 shadow-lg shadow-dark/20'
                                        : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'}`}>
                                    {world.isPremium ? 'Conhecer Rove' : 'Ver Detalhes'}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
