import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-med-dark text-white py-4 h-[40px] flex items-center">
      <div className="container mx-auto px-4 lg:px-10 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-90">
        <p className="flex-1">© {currentYear} Dr. Esteban Franco | San Miguel</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/cardiologiasanmiguel/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-med-light transition-colors normal-case"
          >
            <Instagram size={14} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <p className="hidden md:block">Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

