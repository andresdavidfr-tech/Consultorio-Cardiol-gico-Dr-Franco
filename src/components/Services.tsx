import { motion } from "motion/react";
import { 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  ClipboardCheck, 
  UserRoundCheck, 
  Baby,
  Clock
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <ClipboardCheck size={20} />,
      title: "Chequeo Cardiológico",
      description: "Evaluación preventiva integral."
    },
    {
      icon: <Activity size={20} />,
      title: "Electrocardiograma",
      description: "Estudio con informe inmediato."
    },
    {
      icon: <UserRoundCheck size={20} />,
      title: "Riesgo Quirúrgico",
      description: "Evaluaciones pre-operatorias."
    },
    {
      icon: <Baby size={20} />,
      title: "Prequirúrgico Embarazo",
      description: "Cuidado para futuras mamás."
    },
    {
      icon: <Activity size={20} />,
      title: "Hipertensión Arterial",
      description: "Control y seguimiento crónico."
    },
    {
      icon: <HeartPulse size={20} />,
      title: "Cardiopatías",
      description: "Seguimiento especializado."
    },
    {
      icon: <Clock size={20} />,
      title: "Holter 24hs",
      description: "Monitoreo continuo del ritmo cardíaco."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-blue-50/40 border-y border-blue-100/50 relative overflow-hidden">
      {/* Decorative background elements for section distinction */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-med-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-10 relative z-10">
        <div className="mb-12 text-center md:text-left">
          <span className="text-med-red font-bold tracking-widest uppercase text-[10px] mb-2 block">Cuidado Cardiovascular Integral</span>
          <h2 className="text-4xl font-black text-med-dark tracking-tight">Especialidades Médicas</h2>
          <div className="h-1.5 w-20 bg-med-light mt-4 rounded-full mx-auto md:mx-0 opacity-20" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut" 
              }}
              className="compact-item cursor-pointer"
            >
              <div className="bg-sky-50 w-10 h-10 rounded-lg flex items-center justify-center text-med-light shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-med-dark mb-0.5">{service.title}</h3>
                <p className="text-text-light text-[11px] leading-tight">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

