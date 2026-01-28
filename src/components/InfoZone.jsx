import { motion } from 'framer-motion';
import FAQ from './FAQ';
import LocationMap from './LocationMap';

export default function InfoZone() {
    return (
        <section className="relative w-full pt-12 pb-10 bg-dark overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 w-full h-full bg-fixed"
                style={{
                    backgroundImage: 'url(/images/team-workspace.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-dark/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark opacity-90"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-handwritten text-light mb-4 text-shadow-lg transform -rotate-1"
                    >
                        Informações & <span className="text-primary">Localização</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <FAQ />
                    </motion.div>

                    {/* Right Column: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <LocationMap />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
