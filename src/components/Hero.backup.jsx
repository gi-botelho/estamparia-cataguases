import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-dark">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center bg-dark/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-light mb-6 leading-tight drop-shadow-lg">
            Sua ideia, nossa estampa.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Qualidade que você sente.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Conectando a energia jovem à sofisticação industrial.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Solicitar Orçamento
            </button>
            <button className="px-8 py-4 border-2 border-light text-light font-semibold rounded-lg hover:bg-light/10 transition-all duration-300">
              Explorar Portfólio
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray text-sm">Explore nosso trabalho</p>
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
