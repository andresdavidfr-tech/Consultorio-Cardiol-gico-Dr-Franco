import { FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito. Nos contactaremos a la brevedad.");
  };

  return (
    <section id="contacto" className="py-12 bg-bg-main pb-24">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="section-card">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-med-light font-bold tracking-widest uppercase text-[10px] mb-2 block">Información de Contacto</span>
              <h2 className="text-3xl font-black text-med-dark mb-8 leading-tight">
                Turnos y Consultas
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="bg-slate-50 p-2.5 rounded-lg text-med-dark border border-border-subtle">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-med-dark uppercase">Dirección</h5>
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
                  className="bg-emerald-500 text-white w-full py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-sm mt-4"
                >
                  <MessageCircle size={20} />
                  Solicitar Turno WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-border-subtle">
               <h4 className="text-xs font-bold text-text-light uppercase tracking-widest mb-6 text-center">Formulario Administrativo</h4>
               <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-border-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-med-dark transition-all"
                    placeholder="Nombre Completo"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      required
                      className="w-full bg-white border border-border-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-med-dark transition-all"
                      placeholder="Teléfono"
                    />
                    <input
                      type="email"
                      required
                      className="w-full bg-white border border-border-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-med-dark transition-all"
                      placeholder="Email"
                    />
                  </div>
                  <textarea
                    rows={3}
                    required
                    className="w-full bg-white border border-border-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-med-dark transition-all resize-none"
                    placeholder="Escriba su consulta aquí..."
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-med-dark hover:bg-med-light text-white font-bold py-3.5 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Enviar Mensaje</span>
                    <Send size={16} />
                  </button>
               </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder as seen in design */}
        <div id="ubicacion" className="mt-8 rounded-2xl overflow-hidden border border-border-subtle h-[300px] shadow-sm relative">
           <iframe
              title="Mapa Consultorio Dr. Esteban Franco"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.136712345678!2d-58.718!3d-34.542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd3939393939%3A0x0!2zRGVsaWEgMTM2NywgQjE2NjNCWUQgU2FuIE1pZ3VlbCwgUHJvdmluY2lhIGRlIEJ1ZW5vcyBBaXJlcw!5e0!3m2!1ses!2sar!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-border-subtle text-[11px] font-bold text-med-dark shadow-sm">
                Delia 1367, San Miguel, Buenos Aires
            </div>
        </div>
      </div>
    </section>
  );
}

