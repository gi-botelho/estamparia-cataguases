import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-primary">Estamparia<br />Cataguases</h3>
            <p className="text-gray-400 text-sm">
              Convergência entre técnica e estilo.
            </p>
          </div>

          {/* Contact - Fator Júnior */}
          <motion.div
            whileHover={{ y: -5 }}
            className="col-span-1 md:col-span-2 bg-white/95 p-5 rounded-xl border border-white/20 ring-1 ring-accent shadow-lg relative z-10"
          >
            <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
              <span className="font-bold uppercase tracking-wider text-xs text-accent">Smart</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-accent text-lg inline-block cursor-default"
              >⚡</motion.span>
            </div>
            <h4 className="text-lg font-bold font-display text-dark mb-1">Fator Júnior - Atendimento Imediato</h4>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Seu Brother Virtual</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">"Bateu aquela dúvida ou tá sem ideia? Chama o Júnior! Ele te ajuda com o que precisar"</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-auto px-5 py-2.5 bg-dark text-white rounded-lg font-bold uppercase tracking-wide text-xs hover:bg-gray-900 transition-colors shadow-md shadow-dark/20 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                Falar com o Júnior
              </button>
            </div>
          </motion.div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporativo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rove Performance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Estamparia Cataguases. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer >
  );
}
