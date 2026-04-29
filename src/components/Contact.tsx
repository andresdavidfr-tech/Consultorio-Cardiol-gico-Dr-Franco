import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, FileText, ClipboardList, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contacto" className="py-12 bg-white pb-24">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="section-card bg-slate-50/30 backdrop-blur-sm border-slate-200">
          <div className="grid lg:grid-cols-[1fr_450px] gap-12">
            <div>
              <span className="text-med-red font-bold tracking-widest uppercase text-[10px] mb-2 block">Información de Contacto</span>
              <h2 className="text-3xl font-black text-med-dark mb-8 leading-tight">
                Turnos y Consultas
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4 items-center group cursor-pointer">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      color: "var(--color-med-light)",
                      scale: 1.2
                    }}
                    className="bg-slate-50 p-2.5 rounded-lg text-med-dark border border-border-subtle transition-colors"
                  >
                    <MapPin size={18} />
                  </motion.div>
                  <div>
                    <h5 className="font-extrabold text-xs text-med-dark uppercase group-hover:text-med-light transition-colors">Dirección</h5>
                    <p className="text-sm text-text-light">Delia 1367, San Miguel, Buenos Aires</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="bg-slate-50 p-2.5 rounded-lg text-med-dark border border-border-subtle">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-med-dark uppercase">Central de Turnos</h5>
                    <p className="text-sm text-text-light">11-3084-0282</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="bg-slate-50 p-2.5 rounded-lg text-med-dark border border-border-subtle">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-med-dark uppercase">Email</h5>
                    <p className="text-sm text-text-light">consultoriocardiologiafr@gmail.com</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5491130840282" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-500 text-white w-full py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-lg active:scale-95 transition-transform"
                >
                  <MessageCircle size={20} />
                  Solicitar Turno WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-med-dark rounded-3xl -rotate-1 opacity-[0.03]" />
              <div className="relative h-full bg-white rounded-3xl p-8 border border-border-subtle shadow-xl flex flex-col justify-center text-center">
                 <div className="bg-med-dark/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-med-dark">
                    <ClipboardList size={32} />
                 </div>
                 <h3 className="text-xl font-black text-med-dark mb-3">Consulta Médica Digital</h3>
                 <p className="text-text-light text-sm mb-8 leading-relaxed">
                   Si prefiere enviarnos sus datos médicos y síntomas para una evaluación previa, puede completar nuestro formulario especializado.
                 </p>
                 
                 <Link
                   to="/consulta-especial"
                   className="group bg-med-dark hover:bg-med-light text-white font-black py-4 px-6 rounded-2xl shadow-xl shadow-med-dark/20 flex items-center justify-center gap-3 transition-all active:scale-95 text-base"
                 >
                   <span>Ir al Formulario Detallado</span>
                   <FileText size={20} className="group-hover:rotate-12 transition-transform" />
                 </Link>
                 
                 <div className="mt-8 flex items-center justify-center gap-2 opacity-50">
                    <ShieldAlert size={14} className="text-med-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-dark">Datos Seguros y Confidenciales</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section with Navigation Options */}
        <div id="ubicacion" className="mt-8 rounded-3xl overflow-hidden border border-border-subtle shadow-lg relative bg-slate-50">
          <div className="h-[400px] w-full">
            <iframe
              title="Mapa Consultorio Dr. Esteban Franco"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.8756041699933!2d-58.718047924261774!3d-34.544026872976804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd6c81881ff1%3A0xc3b5edee080c98f5!2sDelia%201367%2C%20B1663BYD%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1713312890123!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="absolute top-6 left-6 right-6 md:right-auto flex flex-col gap-3 group">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-md p-5 rounded-3xl border border-border-subtle shadow-2xl max-w-sm"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="bg-med-dark text-white p-3 rounded-2xl shadow-lg shadow-med-dark/20 relative z-10">
                    <MapPin size={24} />
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-med-dark rounded-2xl -z-0"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-black text-med-dark text-lg leading-tight mb-1">Consultorio San Miguel</h4>
                  <p className="text-xs text-text-light mb-4 font-medium leading-relaxed">
                    Delia 1367, San Miguel.<br/>
                    Centro Médico Profesional.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-dark/40 mb-2">Abrir en navegador:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=-34.5440269,-58.7180479"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn bg-slate-50 hover:bg-med-dark hover:text-white border border-slate-200 p-3 rounded-xl flex flex-col items-center gap-1.5 transition-all active:scale-95 shadow-sm"
                      >
                        <img src="https://www.google.com/s2/favicons?domain=maps.google.com&sz=64" alt="" className="w-5 h-5 group-hover/btn:brightness-0 group-hover/btn:invert transition-all" />
                        <span className="text-[10px] font-black uppercase tracking-tighter">Google Maps</span>
                      </a>
                      <a 
                        href="https://waze.com/ul?ll=-34.5440269,-58.7180479&navigate=yes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn bg-slate-50 hover:bg-sky-500 hover:text-white border border-slate-200 p-3 rounded-xl flex flex-col items-center gap-1.5 transition-all active:scale-95 shadow-sm"
                      >
                        <img src="https://www.google.com/s2/favicons?domain=waze.com&sz=64" alt="" className="w-5 h-5 group-hover/btn:brightness-0 group-hover/btn:invert transition-all" />
                        <span className="text-[10px] font-black uppercase tracking-tighter">Waze App</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

