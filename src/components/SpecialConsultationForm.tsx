import React, { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { ChevronLeft, Send, CheckCircle2, User, Phone, MapPin, Heart, Activity } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SpecialConsultationForm() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ age?: string; phone?: string }>({});
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    healthInsurance: "",
    phone: "",
    symptoms: ""
  });

  const validateForm = () => {
    const newErrors: { age?: string; phone?: string } = {};
    
    // Age validation: must be a positive number
    const ageNum = parseInt(formData.age);
    if (!formData.age || isNaN(ageNum) || ageNum <= 0) {
      newErrors.age = "Por favor, ingrese una edad válida mayor a 0.";
    } else if (ageNum > 120) {
      newErrors.age = "Por favor, ingrese una edad realista.";
    }

    // Phone validation: basic format check (if provided or required)
    // Even if optional, if they type something, we validate it
    if (formData.phone) {
      const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "El formato del teléfono no es válido.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Simulate sending data
    console.log("Consulta enviada:", formData);
    setSubmitted(true);
    
    // Redirect after a few seconds
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-med-accent/20 text-center max-w-md w-full"
        >
          <div className="bg-emerald-100 text-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-display font-bold text-med-dark mb-4">¡Consulta Recibida!</h2>
          <p className="text-text-light mb-8 leading-relaxed">
            Gracias por confiar en nosotros, <span className="font-bold text-med-dark">{formData.fullName}</span>. 
            El Dr. Franco revisará su información y nos contactaremos a la brevedad.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-med-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-med-light transition-all shadow-lg"
          >
            Volver al Inicio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-main py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-med-dark font-bold mb-8 hover:text-med-light transition-colors group"
        >
          <div className="p-2 rounded-lg bg-white shadow-sm border border-border-subtle group-hover:border-med-light">
            <ChevronLeft size={20} />
          </div>
          <span>Volver al Sitio Principal</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border-subtle"
        >
          {/* Form Header */}
          <div className="bg-med-dark p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                  <Activity size={24} className="text-white" />
                </div>
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] opacity-80">Formulario Médico</span>
              </div>
              <h1 className="text-3xl font-display font-bold leading-tight">Consulta Cardiológica Detallada</h1>
              <p className="text-white/70 text-sm mt-2 font-medium">Complete los siguientes datos para una mejor evaluación.</p>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-10">
              <Heart size={200} fill="white" />
            </div>
          </div>

          {/* Actual Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-text-light tracking-widest flex items-center gap-2">
                  <User size={12} className="text-med-dark" />
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-med-dark focus:bg-white transition-all shadow-inner"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              {/* Age */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-text-light tracking-widest flex items-center gap-2">
                  <Activity size={12} className="text-med-dark" />
                  Edad
                </label>
                <input
                  type="number"
                  required
                  value={formData.age}
                  onChange={(e) => {
                    setFormData({...formData, age: e.target.value});
                    if (errors.age) setErrors(prev => ({ ...prev, age: undefined }));
                  }}
                  className={`w-full bg-slate-50 border ${errors.age ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-med-dark focus:bg-white transition-all shadow-inner`}
                  placeholder="Su edad"
                />
                {errors.age && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-[10px] font-bold mt-1"
                  >
                    {errors.age}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Health Insurance */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-text-light tracking-widest flex items-center gap-2">
                  <MapPin size={12} className="text-med-dark" />
                  Obra Social / Prepaga
                </label>
                <input
                  type="text"
                  required
                  value={formData.healthInsurance}
                  onChange={(e) => setFormData({...formData, healthInsurance: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-med-dark focus:bg-white transition-all shadow-inner"
                  placeholder="Ej: OSDE, Swiss Medical..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-text-light tracking-widest flex items-center gap-2">
                  <Phone size={12} className="text-med-dark" />
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({...formData, phone: e.target.value});
                    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                  }}
                  className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-med-dark focus:bg-white transition-all shadow-inner`}
                  placeholder="Su número de contacto"
                />
                {errors.phone && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-[10px] font-bold mt-1"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Symptoms */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-text-light tracking-widest flex items-center gap-2">
                <Activity size={12} className="text-med-red" />
                Síntomas o Motivo de Consulta (Opcional)
              </label>
              <textarea
                rows={4}
                value={formData.symptoms}
                onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-med-dark focus:bg-white transition-all resize-none shadow-inner"
                placeholder="Describa brevemente cómo se siente o qué estudios requiere..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-med-dark hover:bg-med-light text-white font-black py-4 rounded-2xl shadow-xl shadow-med-dark/20 flex items-center justify-center gap-3 transition-all active:scale-95 text-lg"
            >
              <span>Enviar Formulario Médico</span>
              <Send size={20} />
            </button>
            <p className="text-[10px] text-center text-text-light italic">
              Sus datos están protegidos bajo la Ley 25.326 de Protección de Datos Personales.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
