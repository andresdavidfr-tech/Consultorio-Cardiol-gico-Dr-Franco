import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "El Doctor", href: "/#doctor" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Testimonios", href: "/#testimonios" },
    { name: "FAQ", href: "/#faq" },
    { name: "Ubicación", href: "/#ubicacion" },
    { name: "Contacto", href: "/#contacto" },
  ];

  interface NavLinkProps {
    link: typeof navLinks[0];
    className?: string;
    children?: React.ReactNode;
  }

  const NavLink = ({ link, className, children }: NavLinkProps) => {
    const isSamePage = location.pathname === "/" && link.href.startsWith("/#");
    const content = children || link.name;

    if (isSamePage) {
      return (
        <a 
          href={link.href.replace("/", "")} 
          className={className}
          onClick={() => setIsOpen(false)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link 
        to={link.href} 
        className={className}
        onClick={() => setIsOpen(false)}
      >
        {content}
      </Link>
    );
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 h-[70px] flex items-center ${
          scrolled ? "glass shadow-sm" : "bg-white border-b border-border-subtle"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-10 flex justify-between items-center w-full">
          <NavLink link={navLinks[0]} className="flex items-center gap-3 group">
            <div className="relative">
              {/* Logo Background Effect */}
              <div className="absolute inset-0 bg-med-dark rounded-xl -rotate-6 group-hover:rotate-6 transition-transform duration-500 opacity-5" />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex items-center justify-center bg-white border border-med-dark/20 p-2 rounded-xl shadow-sm z-10"
              >
                <Activity className="w-5 h-5 text-med-dark" strokeWidth={3} />
                {/* Subtle Red Detail: A heart beat indicator */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-med-red rounded-full animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold leading-[1.1] text-med-dark text-[14px] sm:text-[16px] tracking-tight uppercase">
                Consultorio Cardiológico <br className="hidden sm:block" />
                <span className="text-med-light">Dr. Franco</span>
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                <NavLink
                  link={link}
                  className="text-sm font-semibold transition-colors text-text-light hover:text-med-dark"
                />
              </div>
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
            className="md:hidden p-2 rounded-lg text-med-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-med-dark/20 backdrop-blur-md z-[55] md:hidden"
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-[70px] left-0 right-0 z-[55] md:hidden bg-white shadow-2xl border-t border-slate-100 rounded-b-3xl overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <NavLink
                      link={link}
                      className="text-xl font-bold text-med-dark py-4 px-2 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-between group w-full"
                    />
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-slate-100"
                >
                  <a
                    href="tel:1130840282"
                    className="bg-med-dark text-white text-center py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-lg shadow-med-dark/20 active:scale-95 transition-transform"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={24} />
                    <span>Solicitar Turno Ahora</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
