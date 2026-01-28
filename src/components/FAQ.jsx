import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: "Quais tipos de estampa vocês realizam?",
        answer: "Trabalhamos com diversas técnicas para atender sua necessidade: Serigrafia (Silk Screen) para alta durabilidade e grandes tiragens; Sublimação para estampas totais em poliéster; Bordado Computadorizado para um acabamento premium em uniformes; e DTF para estampas coloridas em qualquer tecido."
    },
    {
        question: "Qual a quantidade mínima para pedidos?",
        answer: "A quantidade mínima varia conforme a técnica. Para Silk Screen, geralmente trabalhamos com mínimo de 10 a 20 peças. Para Sublimação, DTF e Bordado, temos flexibilidade para pedidos menores, podendo fazer até peças unitárias dependendo do projeto."
    },
    {
        question: "Qual o prazo de produção?",
        answer: "Nosso prazo médio é de 7 a 15 dias úteis após a aprovação da arte e pagamento do sinal. Prazos podem variar de acordo com a complexidade e quantidade do pedido."
    },
    {
        question: "Vocês criam a arte da estampa?",
        answer: "Idealmente, o cliente deve enviar a arte finalizada em vetor (PDF, Corel, Illustrator) ou imagem em alta resolução. Caso não tenha, oferecemos serviço de criação e ajuste de arte com um custo adicional."
    },
    {
        question: "Quais formas de pagamento aceitam?",
        answer: "Aceitamos PIX, transferência bancária e cartões de crédito. Geralmente trabalhamos com 50% de sinal no pedido e 50% na entrega."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl font-display font-bold text-center text-white mb-12">
                Dúvidas <span className="text-accent">Frequentes</span>
            </h3>

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-white/10 rounded-xl overflow-hidden bg-dark/40 backdrop-blur-sm hover:border-accent/30 transition-colors"
                    >
                        <button
                            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="text-lg font-medium text-light">{item.question}</span>
                            <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''} text-accent`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
