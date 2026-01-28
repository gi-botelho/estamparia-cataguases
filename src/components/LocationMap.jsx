import { motion } from 'framer-motion';

export default function LocationMap() {
    return (
        <div className="w-full relative min-h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Map Filter for Dark Mode - using CSS filter to invert generic maps */}
            <div className="absolute inset-0 z-0 bg-dark pointer-events-none"></div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.456094622181!2d-42.6963242!3d-21.3912999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb143360b09460d%3A0xe67f9a8f43834168!2sAv.%20Guido%20Marli%C3%A9re%2C%20365%20-%20Haid%C3%A9e%2C%20Cataguases%20-%20MG%2C%2036774-000!5e0!3m2!1spt-BR!2sbr!4v1706469000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full mix-blend-luminosity opacity-80"
            ></iframe>

            {/* Overlay Gradient at bottom for better text readability if needed */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>

            {/* Floating Card */}
            <div className="absolute top-1/2 left-4 md:left-12 transform -translate-y-1/2 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-dark/90 backdrop-blur-md p-8 rounded-2xl border-l-4 border-primary shadow-2xl max-w-sm"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/20 rounded-full text-primary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold font-display text-white">Nossa Base</h4>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                        Avenida Guido Marliere, 365<br />
                        Bairro Haidée<br />
                        <span className="font-semibold text-white">Cataguases - MG</span><br />
                        CEP: 36774-104
                    </p>

                    <a
                        href="https://maps.google.com/?q=Avenida+Guido+Marliere+365+Haidee+Cataguases+MG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors group"
                    >
                        Traçar Rota
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
