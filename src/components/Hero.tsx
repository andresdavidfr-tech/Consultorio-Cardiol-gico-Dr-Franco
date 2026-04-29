import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Clock, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-[110px] pb-12 overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-stretch">
          <div className="section-card flex flex-col justify-center border-med-dark/10 shadow-xl shadow-med-dark/5">
            <span className="inline-block px-3 py-1 bg-med-dark/5 text-med-dark rounded text-[11px] font-bold uppercase tracking-wider mb-4 w-fit border border-med-dark/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-med-red rounded-full animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
              Especialista UBA - SAC
            </span>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-med-dark leading-tight mb-4 tracking-tight">
              Cuidando tu corazón <br /> 
              con experiencia y dedicación
            </h1>
            
            <div className="lg:hidden flex flex-col items-center mb-6 pt-4 border-t border-border-subtle">
               <div className="w-24 h-24 rounded-full border-2 border-med-light overflow-hidden mb-2 shadow-inner bg-slate-100">
                  <img
                    src="/regenerated_image_1777501178251.png"
                    alt="Dr. Esteban Franco"
                    className="w-full h-full object-cover"
                  />
               </div>
               <span className="text-xs font-black text-med-dark">Dr. Esteban Franco</span>
               <span className="text-[10px] font-bold text-med-light uppercase tracking-widest">Cardiólogo UBA - SAC</span>
            </div>

            <p className="text-base text-text-light mb-8 max-w-2xl leading-relaxed">
              Atención cardiológica integral en San Miguel. Compromiso con la salud cardiovascular de nuestros pacientes a través de la prevención y tecnología médica.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5491130840282"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold text-base transition-all flex items-center gap-2 shadow-sm"
              >
                Solicitar Turno WhatsApp
              </a>
              <a
                href="#servicios"
                className="bg-white hover:bg-slate-50 text-text-dark border border-border-subtle px-6 py-3 rounded-lg font-bold text-base transition-all shadow-sm"
              >
                Ver Servicios
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border-subtle flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-xl font-black text-med-dark">15+</span>
                <span className="text-[10px] text-text-light font-bold uppercase tracking-wider">Años Exp.</span>
              </div>
              <div className="w-px h-6 bg-border-subtle" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-med-dark uppercase">SAC</span>
                <span className="text-[10px] text-text-light font-bold uppercase tracking-wider">Sociedad Argentina de Cardiología</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            <div className="section-card flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 rounded-full border-4 border-med-light overflow-hidden mb-4 shadow-inner bg-slate-100">
                <img
                  src="/regenerated_image_1777501178251.png"
                  alt="Dr. Esteban Franco"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-black text-med-dark mb-1">Dr. Esteban Franco</h2>
              <h3 className="text-xs font-bold text-med-light uppercase tracking-widest mb-4">Médico UBA - SAC</h3>
              <p className="text-xs text-text-light leading-relaxed italic border-t border-border-subtle pt-4 mt-2">
                “Cuidando tu corazón con experiencia y dedicación”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// Add standard animation keyframes if needed in index.css, or just use motion
