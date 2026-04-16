import { motion } from "motion/react";
import { GraduationCap, Award, Stethoscope } from "lucide-react";

export default function About() {
  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Médico UBA",
      description: "Egresado de la Universidad de Buenos Aires."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "SOCIEDAD ARG. DE CARDIOLOGÍA",
      description: "Miembro SAC activo y actualizado."
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: "ESPECIALISTA",
      description: "Tratamiento avanzado de enfermedades cardíacas."
    }
  ];

  return (
    <section id="doctor" className="py-12 bg-bg-main">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="section-card">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-med-light font-bold tracking-widest uppercase text-[10px] mb-2 block">Formación Profesional</span>
              <h2 className="text-3xl font-black text-med-dark mb-6 leading-tight">
                Dr. Esteban Franco
              </h2>
              
              <p className="text-sm text-text-light mb-8 leading-relaxed">
                Formado en la Universidad de Buenos Aires y miembro de la Sociedad Argentina de Cardiología. Con amplia experiencia en prevención, diagnóstico y tratamiento de afecciones cardiovasculares, brindando atención de excelencia en San Miguel.
              </p>

              <div className="grid gap-4">
                {credentials.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-border-subtle bg-slate-50/50">
                    <div className="bg-med-dark/10 p-2.5 rounded-lg text-med-dark shrink-0 h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-med-dark text-xs uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-text-light text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-border-subtle aspect-video lg:aspect-square">
                <img
                  src="https://picsum.photos/seed/doctor-work/800/800"
                  alt="Dr. Esteban Franco en consulta"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

