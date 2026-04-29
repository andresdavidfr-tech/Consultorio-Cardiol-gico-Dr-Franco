import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ricardo M.",
      text: "Excelente atención y profesionalismo. Me sentí muy seguro durante todo mi tratamiento.",
      role: "Paciente de San Miguel",
      stars: 5
    },
    {
      name: "Marta G.",
      text: "El Dr. Franco es muy dedicado. Explicó todo con mucha paciencia y claridad. Lo recomiendo.",
      role: "Chequeo Preventivo",
      stars: 5
    },
    {
      name: "Jorge P.",
      text: "Muy conforme con el seguimiento de mi hipertensión. El consultorio es impecable.",
      role: "Paciente Crónico",
      stars: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-white overflow-hidden border-b border-border-subtle">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="text-center mb-10">
          <span className="text-med-red font-bold tracking-widest uppercase text-[10px] mb-2 block">Experiencias</span>
          <h2 className="text-3xl font-display font-bold text-med-dark">Lo que dicen nuestros pacientes</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <button 
              onClick={prev}
              className="hidden md:flex p-3 rounded-full border border-border-subtle hover:bg-slate-50 transition-colors text-med-dark shrink-0 transition-transform active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex-1 min-h-[200px] flex flex-col items-center justify-center text-center px-4 md:px-12 py-8 bg-slate-50/50 rounded-3xl border border-border-subtle relative">
              <div className="absolute top-6 left-6 text-med-dark/10">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-med-dark font-serif italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div>
                    <h4 className="font-display font-bold text-med-dark uppercase tracking-tight">{testimonials[currentIndex].name}</h4>
                    <p className="text-[10px] text-text-light font-bold uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={next}
              className="hidden md:flex p-3 rounded-full border border-border-subtle hover:bg-slate-50 transition-colors text-med-dark shrink-0 transition-transform active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots for mobile & indication */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-med-dark" : "bg-slate-300"
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
