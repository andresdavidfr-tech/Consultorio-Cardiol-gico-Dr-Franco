import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-med-dark text-white py-4 h-[40px] flex items-center">
      <div className="container mx-auto px-4 lg:px-10 flex justify-center md:justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-90">
        <p>© {currentYear} Cardiología Dr. Esteban Franco | San Miguel, Bs.As.</p>
        <p className="hidden md:block">Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

