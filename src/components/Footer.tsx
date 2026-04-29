import { Activity, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-med-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl">
                <Activity className="w-6 h-6 text-med-dark" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight uppercase">
                Dr. Franco
              </span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-xs">
              Especialista en cardiología clínica y preventiva. Brindando atención médica de excelencia en San Miguel con el respaldo de la Sociedad Argentina de Cardiología.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-6 text-med-light">Navegación</h4>
            <ul className="space-y-4 text-xs font-medium text-white/70">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#doctor" className="hover:text-white transition-colors">El Doctor</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-6 text-med-light">Contacto</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-center gap-3 text-white/70">
                <MapPin size={14} className="text-med-light" />
                <span>Delia 1367, San Miguel</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone size={14} className="text-med-light" />
                <span>11-3084-0282</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail size={14} className="text-med-light" />
                <span>consultoriocardiologiafr@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-6 text-med-light">Comunidad</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-med-light transition-colors border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-med-light transition-colors border border-white/10">
                <Facebook size={18} />
              </a>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2 italic">Atención:</p>
              <p className="text-[10px] font-medium text-white/80">Lunes a Viernes con turno previo.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
          <p>© {currentYear} Cardiología Dr. Esteban Franco | Mat. Nac. 123456</p>
          <p>Desarrollado con excelencia médica</p>
        </div>
      </div>
    </footer>
  );
}

