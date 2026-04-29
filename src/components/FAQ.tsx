import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  key?: any;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group focus:outline-none"
      >
        <span className="font-bold text-med-dark group-hover:text-med-light transition-colors pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-text-light shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-text-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "¿Cómo solicito un turno?",
      answer: "Puede solicitar un turno a través de nuestra central telefónica al 11-3084-0282, vía WhatsApp presionando el botón verde en pantalla, o completando el formulario administrativo de contacto."
    },
    {
      question: "¿Qué estudios se realizan en el consultorio?",
      answer: "Realizamos electrocardiogramas con informe, Holter de 24hs, controles de presión arterial (HTA), chequeos preventivos integrales, evaluaciones de riesgo quirúrgico y valoraciones pre-natales."
    },
    {
      question: "¿Atienden obras sociales?",
      answer: "Atendemos diversas obras sociales y particulares. Para confirmar la cobertura de su plan específico, le recomendamos consultarnos vía WhatsApp o teléfono."
    },
    {
      question: "¿Dónde se encuentra el consultorio?",
      answer: "Estamos ubicados en Delia 1367, en el centro de San Miguel, Buenos Aires. Un punto de fácil acceso tanto en vehículo particular como en transporte público."
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-border-subtle">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <HelpCircle size={16} className="text-med-red" />
            <span className="text-med-red font-bold tracking-widest uppercase text-[10px] block font-sans">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-med-dark mb-8 text-center md:text-left">Dudas comunes</h2>
          
          <div className="bg-white rounded-3xl p-2 md:p-6 border border-border-subtle shadow-sm px-6">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
