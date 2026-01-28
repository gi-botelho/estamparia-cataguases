import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const worlds = [
    {
        id: 'corporativo',
        title: 'Corporativo & Eventos',
        subtitle: 'Vista sua marca',
        description: 'Uniformes profissionais em Malha Fria e Sublimação. Qualidade e identidade visual para sua empresa.',
        image: '/images/corporativo-uniformes.png',
        gradient: 'from-blue-900 to-slate-900',
        features: ['Malha Fria Premium', 'Sublimação Digital', 'Gola Polo ou Redonda'],
        isPremium: false
    },
    {
        id: 'escolar',
        title: 'Escolar & Terceirão',
        subtitle: 'Marque seu legado',
        description: 'Do uniforme do dia a dia às camisas inesquecíveis de formatura. Estilo que fica para a história.',
        image: '/images/school-terceirao.png',
        gradient: 'from-orange-700 to-red-900',
        features: ['Designs exclusivos', 'Tecidos confortáveis', 'Personalização total'],
        isPremium: false
    },
    {
        id: 'moto-truck',
        title: 'Estrada & Grau',
        subtitle: 'Estilo sobre rodas',
        description: 'A paixão por caminhões e motos estampada no peito. Artes agressivas e modernas para quem vive na estrada.',
        image: '/images/estrada-grau.png',
        gradient: 'from-slate-800 to-gray-900',
        features: ['Estilo "Grau 244"', 'Artes Realistas', 'Cores Vibrantes'],
        isPremium: false
    },
    {
        id: 'religioso',
        title: 'Fé & Devoção',
        subtitle: 'Vestindo sua missão',
        description: 'Estampas que celebram sua fé com respeito e beleza. Perfeito para grupos de oração, festas e paróquias.',
        image: '/images/fe-devocao.png',
        gradient: 'from-yellow-700 to-amber-900',
        features: ['Artes Sacras', 'Acabamento Delicado', 'Preços Especiais p/ Grupos'],
        isPremium: false
    },
    {
        id: 'personalizado',
        title: 'Estamparia Criativa',
        subtitle: 'Sua arte, Sem limites',
        description: 'Liberdade total para criar. Traga seu desenho ou deixe nossa equipe criar algo único para você.',
        image: '/images/products-gallery.png',
        gradient: 'from-indigo-900 to-purple-900',
        features: ['Sem pedido mínimo', 'Impressão HD', 'Consultoria de Design'],
        isPremium: false
    },
    {
        id: 'rove',
        title: 'Rove Performance',
        subtitle: 'Marca Premium',
        description: 'Nossa linha esportiva de alta performance. Tecnologia, design aerodinâmico e tecidos inteligentes.',
        image: '/images/rove-performance.png',
        gradient: 'from-emerald-900 to-teal-900',
        features: ['Dry-Fit Avançado', 'Modelagem Atleta', 'Proteção UV'],
        isPremium: true
    }
];

export default function NossosMundos() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [skipAnimation, setSkipAnimation] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    const sectionsRef = useRef(null);
    const isInView = useInView(sectionsRef, { amount: 0.4 }); // Re-trigger when 40% visible

    const cardsPerPage = 3;
    const totalPages = Math.ceil(worlds.length / cardsPerPage);

    // Clone first page at end for seamless loop
    const totalPagesWithClone = totalPages + 1;
    // Calculate width-based movement: 1 page = 100% / totalPagesWithClone
    // So move = currentPage * (100 / totalPagesWithClone)
    const translateX = -(currentPage * 100) / totalPagesWithClone;

    const hasStartedRef = useRef(false);

    // Reset to first page INSTANTLY (no animation) after reaching clone
    useEffect(() => {
        if (currentPage === totalPages) {
            const timer = setTimeout(() => {
                setSkipAnimation(true); // Disable animation for the reset
                setCurrentPage(0);
                // Re-enable animation after reset
                setTimeout(() => setSkipAnimation(false), 50);
            }, 4000); // Wait for slide animation to complete
            return () => clearTimeout(timer);
        }
    }, [currentPage, totalPages]);

    // Autoplay effect
    useEffect(() => {
        if (isInView && !isPaused) {
            let initialTimer;

            // Initial scroll when entering view - only runs ONCE per session
            if (!hasStartedRef.current) {
                initialTimer = setTimeout(() => {
                    // Safe to call directly as nextPage now checks isAnimating
                    // But we check here too to avoid calling if state changed rapidly
                    nextPage();
                    hasStartedRef.current = true;
                }, 500); // 0.5s delay on entry
            }

            // Continued loop
            const loopInterval = setInterval(() => {
                nextPage();
            }, 8000); // 4s pause + 4s animation buffer

            return () => {
                if (initialTimer) clearTimeout(initialTimer);
                clearInterval(loopInterval);
            };
        }
    }, [isInView, isPaused]); // Re-run if view status or pause state changes

    const nextPage = () => {
        if (isAnimating) return; // Prevention

        setCurrentPage((prev) => prev + 1);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 4050);
    };

    const prevPage = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setTimeout(() => setIsAnimating(false), 4050);
    };

    // Build pages array (including clone of first page at end)
    const getCardsForPage = (pageIndex) => {
        const actualIndex = pageIndex >= totalPages ? 0 : pageIndex;
        return worlds.slice(actualIndex * cardsPerPage, actualIndex * cardsPerPage + cardsPerPage);
    };

    return (
        <section ref={sectionsRef} className="relative bg-light">
            {/* Centered Title Block */}
            <div className="relative z-20 bg-light py-10 md:py-14 px-6 md:px-12 border-b border-gray-100 shadow-sm">
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

            {/* Cards Section */}
            <div className="relative z-10 py-24 overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 z-0 bg-fixed"
                    style={{
                        backgroundImage: 'url(/images/process-showcase.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-dark/70"></div>
                </div>

                {/* Carousel */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center gap-4">

                        {/* Left Arrow */}
                        <button
                            onClick={prevPage}
                            className="hidden md:flex shrink-0 w-14 h-14 items-center justify-center text-white/80 hover:text-white transition-all duration-300"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div
                            className="flex-1 overflow-x-hidden overflow-y-visible py-4"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <motion.div
                                className="flex will-change-transform" // Added will-change-transform
                                style={{ width: `${totalPagesWithClone * 100}%` }} // Explicit container width
                                animate={{ x: `${translateX}%` }}
                                transition={skipAnimation ? { duration: 0 } : {
                                    type: "tween",
                                    duration: 4,
                                    ease: "easeInOut"
                                }}
                            >
                                {Array.from({ length: totalPagesWithClone }).map((_, pageIndex) => (
                                    <div
                                        key={pageIndex}
                                        style={{ width: `${100 / totalPagesWithClone}%` }} // Explicit page width
                                        className="flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-3"
                                    >
                                        {getCardsForPage(pageIndex).map((world) => (
                                            <div
                                                key={world.id}
                                                className={`flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20
                                                    ${world.isPremium
                                                        ? 'bg-white/95 ring-2 ring-accent lg:scale-105 z-20'
                                                        : 'bg-white/95'
                                                    }`}
                                            >
                                                {/* Header */}
                                                <div className={`px-6 py-4 flex items-center justify-between ${world.isPremium ? 'bg-dark text-white' : 'bg-gray-50/80 border-b border-gray-100'}`}>
                                                    <span className={`font-bold uppercase tracking-wider text-sm ${world.isPremium ? 'text-accent' : 'text-secondary'}`}>
                                                        {world.isPremium ? 'Premium' : 'Categoria'}
                                                    </span>
                                                    {world.isPremium && <span className="text-accent text-xl">★</span>}
                                                </div>

                                                {/* Image */}
                                                <div className="relative h-40 overflow-hidden group">
                                                    <div className={`absolute inset-0 bg-gradient-to-t ${world.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-10`}></div>
                                                    <img src={world.image} alt={world.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                                </div>

                                                {/* Content */}
                                                <div className="p-5 flex-1 flex flex-col">
                                                    <h3 className="text-xl font-bold font-display mb-1 text-dark">{world.title}</h3>
                                                    <p className={`text-sm mb-4 uppercase tracking-wide ${world.isPremium ? 'text-accent' : 'text-gray-500'}`}>{world.subtitle}</p>
                                                    <p className="text-sm leading-relaxed mb-4 flex-1 text-gray-600">{world.description}</p>

                                                    <div className={`rounded-xl p-3 mb-4 space-y-1.5 border ${world.isPremium ? 'bg-gray-50 border-gray-200' : 'bg-gray-50 border-gray-100'}`}>
                                                        {world.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-center text-xs text-gray-700">
                                                                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${world.isPremium ? 'bg-accent' : 'bg-primary'}`}></span>
                                                                {feature}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <button className={`w-full py-3 rounded-xl font-bold uppercase tracking-wide text-sm transition-all duration-300 flex items-center justify-center gap-2
                                                        ${world.isPremium
                                                            ? 'bg-dark text-white hover:bg-gray-900 shadow-lg shadow-dark/20'
                                                            : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'}`}>
                                                        {world.isPremium ? 'Conhecer Rove' : 'Ver Detalhes'}
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextPage}
                            className="hidden md:flex shrink-0 w-14 h-14 items-center justify-center text-white/80 hover:text-white transition-all duration-300"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentPage(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${(currentPage % totalPages) === idx ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Mobile Nav */}
                    <div className="md:hidden flex justify-center gap-4 mt-6">
                        <button onClick={prevPage} className="p-3 rounded-full bg-white/90 shadow-lg text-dark">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={nextPage} className="p-3 rounded-full bg-white/90 shadow-lg text-dark">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
