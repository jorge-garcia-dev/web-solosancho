import { motion } from 'framer-motion'
import { Building2, CalendarDays, Megaphone, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'sede',
    icon: Building2,
    title: 'Sede Electrónica',
    description:
      'Realiza tus trámites administrativos de forma online, sin desplazamientos y con plena validez legal.',
    cta: 'Acceder a la sede',
    style: {
      card: 'border-granite-700/50 bg-gradient-to-b from-granite-800/30 to-granite-900/50',
      icon: 'bg-granite-700/60 text-granite-200',
      cta: 'border border-granite-500 text-granite-200 hover:bg-granite-700',
    },
  },
  {
    id: 'cita',
    icon: CalendarDays,
    title: 'Cita Previa',
    description:
      'Solicita tu cita con el Ayuntamiento de forma rápida. Atención personalizada garantizada para cualquier gestión.',
    cta: 'Pedir cita ahora',
    style: {
      card: 'border-sierra-800/60 bg-gradient-to-b from-sierra-900/40 to-sierra-950/60',
      icon: 'bg-sierra-800/60 text-sierra-200',
      cta: 'bg-sierra-700 hover:bg-sierra-600 text-white',
    },
  },
  {
    id: 'bandos',
    icon: Megaphone,
    title: 'Bandos Municipales',
    description:
      'Mantente al día con los últimos bandos, anuncios y comunicaciones oficiales del municipio.',
    cta: 'Ver bandos',
    style: {
      card: 'border-gold-900/50 bg-gradient-to-b from-gold-950/40 to-granite-950/60',
      icon: 'bg-gold-800/40 text-gold-300',
      cta: 'bg-gold-600 hover:bg-gold-500 text-white',
    },
  },
]

export default function QuickAccess() {
  return (
    <section id="sede" className="bg-granite-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-600 text-xs font-semibold tracking-[0.3em] uppercase">
            Gestiones municipales
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-white mt-2">
            Trámites al alcance de todos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`rounded-2xl border p-7 flex flex-col ${service.style.card}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.style.icon}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-granite-400 text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
                <a
                  href={`#${service.id}-detail`}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all group ${service.style.cta}`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
