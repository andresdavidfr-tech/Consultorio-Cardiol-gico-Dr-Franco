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
    <section id="servicios" className="py-12 bg-slate-50 border-y border-border-subtle">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="mb-10 text-center md:text-left">
          <span className="text-med-red font-bold tracking-widest uppercase text-[10px] mb-2 block">Cuidado Cardiovascular Integral</span>
          <h2 className="text-3xl font-black text-med-dark">Especialidades Médicas</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: idx % 3 * 0.1,
                ease: "easeOut" 
              }}
              className="compact-item"
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

