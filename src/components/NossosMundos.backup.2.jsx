import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section className="relative bg-light">

            {/* 1. Solid Title Strip (Divider) */}
            <div className="relative z-20 bg-light py-16 md:py-24 px-6 md:px-12 border-b border-gray-100 shadow-sm">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Nossos <span className="text-secondary">Mundos</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Soluções especializadas para cada necessidade. Onde você se encaixa?
                    </p>
                </motion.div>
            </div>

            {/* 2. Parallax Content Area */}
            <div ref={ref} className="relative z-10 py-24 overflow-hidden">

                {/* Parallax Background */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0 w-full h-[120%] -top-[10%]"
                    >
                        <img
                            src="/images/process-showcase.png"
                            alt="Background"
                            className="w-full h-full object-cover opacity-100" // Image visible
                        />
                        <div className="absolute inset-0 bg-dark/70"></div> {/* Overlay to ensure text readability */}
                    </motion.div>
                </div>

                {/* 3. Cards Grid (Glassmorphism) */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {worlds.map((world, index) => (
                            <motion.div
                                key={world.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md border border-white/20
                  ${world.isPremium
                                        ? 'bg-white/95 ring-2 ring-accent lg:scale-105 z-20' // Rove (Premium) - More Solid
                                        : 'bg-white/90' // Others - Glassy but high contrast
                                    }`}
                            >
                                {/* Card Header */}
                                <div className={`px-6 py-4 flex items-center justify-between ${world.isPremium ? 'bg-dark text-white' : 'bg-gray-50/50 border-b border-gray-100'}`}>
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

                                    {/* Features List */}
                                    <div className={`rounded-xl p-4 mb-6 space-y-2 border ${world.isPremium ? 'bg-gray-50 border-gray-200' : 'bg-white/50 border-gray-100'}`}>
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
            </div>
        </section>
    );
}
