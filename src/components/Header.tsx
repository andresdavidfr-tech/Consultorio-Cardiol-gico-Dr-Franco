import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Activity, Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "El Doctor", href: "#doctor" },
    { name: "Servicios", href: "#servicios" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] flex items-center ${
        scrolled ? "glass shadow-sm" : "bg-white border-b border-border-subtle"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-10 flex justify-between items-center w-full">
        <a href="#inicio" className="flex items-center gap-2 group">
          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center justify-center bg-med-dark/5 p-2 rounded-lg group-hover:bg-med-dark/10 transition-colors"
          >
            <Activity className="w-5 h-5 text-med-dark group-hover:text-med-light transition-colors" strokeWidth={3} />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-extrabold leading-tight text-med-dark text-lg tracking-tight uppercase">
              Franco Cardiología
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold transition-colors text-text-light hover:text-med-dark"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:1130840282"
            className="bg-med-dark hover:bg-med-light text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm"
          >
            Turnos
          </a>
        </div>


        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-med-dark" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-800 hover:text-med-light"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:1130840282"
              className="bg-med-dark text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={20} />
              <span>Solicitar Turno</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
