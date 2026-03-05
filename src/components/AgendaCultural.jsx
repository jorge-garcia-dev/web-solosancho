import { motion } from 'framer-motion'
import { CalendarDays, MapPin, ArrowRight, Moon, Music, Star, Flame } from 'lucide-react'

const eventos = [
  {
    icon: Moon,
    categoria: 'Festival Vetón',
    categoriaColor: 'bg-gold-900/60 text-gold-400 border-gold-800/40',
    titulo: 'Luna Celta',
    subtitulo: 'Castro de Ulaca',
    mes: 'AGO',
    dia: '—',
    descripcion:
      'El Castro de Ulaca revive cada verano con la magia vetona. Música, fuego, recreaciones históricas y visitas nocturnas al altar de los sacrificios bajo la luna llena de agosto.',
    lugar: 'Castro de Ulaca, Villaviciosa',
    accent: 'border-gold-800/30',
    bg: 'from-gold-950/40 to-granite-950/60',
    highlight: true,
  },
  {
    icon: Star,
    categoria: 'Fiestas Patronales',
    categoriaColor: 'bg-sierra-900/60 text-sierra-400 border-sierra-700/40',
    titulo: 'Fiestas de Santo Tomás',
    subtitulo: 'Patrón del municipio',
    mes: 'DIC',
    dia: '21',
    descripcion:
      'Las fiestas en honor al patrón Santo Tomás Apóstol reúnen a vecinos de los cuatro núcleos. Misa solemne, procesión, música tradicional y la gastronomía de toda la vida.',
    lugar: 'Solosancho · Iglesia de Santo Tomás',
    accent: 'border-sierra-800/30',
    bg: 'from-sierra-950/40 to-granite-950/60',
    highlight: false,
  },
  {
    icon: Flame,
    categoria: 'Patrimonio',
    categoriaColor: 'bg-granite-800/60 text-granite-300 border-granite-600/40',
    titulo: 'Ruta Nocturna al Castro',
    subtitulo: 'Visita guiada',
    mes: 'VER',
    dia: 'ANO',
    descripcion:
      'Sube al Castro de Ulaca al atardecer y descubre sus secretos a la luz de las antorchas. Guías especializados en cultura vetona acompañan el recorrido por la muralla y el altar.',
    lugar: 'Castro de Ulaca, Villaviciosa',
    accent: 'border-granite-700/30',
    bg: 'from-granite-800/30 to-granite-950/60',
    highlight: false,
  },
  {
    icon: Music,
    categoria: 'Cultura',
    categoriaColor: 'bg-gold-950/60 text-gold-500 border-gold-900/40',
    titulo: 'Fiestas de Villaviciosa',
    subtitulo: 'Verano en el castillo',
    mes: 'JUL',
    dia: '—',
    descripcion:
      'El municipio se viste de fiesta en julio alrededor del castillo medieval de Villaviciosa. Conciertos al aire libre, actividades para familias y la mejor gastronomía de la sierra.',
    lugar: 'Villaviciosa · Castillo medieval',
    accent: 'border-gold-900/30',
    bg: 'from-gold-950/30 to-granite-950/60',
    highlight: false,
  },
]

export default function AgendaCultural() {
  return (
    <section
      id="agenda"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #100e0c 0%, #1a1612 60%, #1e1a16 100%)' }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
            Agenda municipal
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3 mb-4">
            Cultura y{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #e9c24a, #c88a10)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              tradición
            </span>
          </h2>
          <p className="text-granite-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Solosancho celebra su historia vetona y medieval con fiestas que unen a vecinos
            y visitantes durante todo el año.
          </p>
        </motion.div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {eventos.map((ev, i) => {
            const Icon = ev.icon
            return (
              <motion.article
                key={ev.titulo}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border ${ev.accent} bg-gradient-to-b ${ev.bg} p-6 overflow-hidden`}
                style={{ backdropFilter: 'blur(6px)' }}
              >
                {/* Highlight badge for featured event */}
                {ev.highlight && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest">
                    Destacado
                  </div>
                )}

                <div className="flex items-start gap-5">
                  {/* Date block */}
                  <div
                    className="flex-shrink-0 w-16 rounded-xl flex flex-col items-center justify-center py-3 text-center border border-white/8"
                    style={{ background: 'rgba(0,0,0,0.35)' }}
                  >
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none">
                      {ev.mes}
                    </span>
                    <span className="text-white text-2xl font-black font-heading leading-tight mt-0.5">
                      {ev.dia}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Category badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border mb-3 ${ev.categoriaColor}`}
                    >
                      <Icon className="w-3 h-3" />
                      {ev.categoria}
                    </span>

                    <h3 className="text-white text-xl font-bold leading-tight mb-0.5">
                      {ev.titulo}
                    </h3>
                    <p className="text-granite-500 text-xs mb-3">{ev.subtitulo}</p>
                    <p className="text-granite-400 text-sm leading-relaxed mb-4">
                      {ev.descripcion}
                    </p>

                    <div className="flex items-center gap-1.5 text-granite-600 text-xs">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {ev.lugar}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-white/6"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <div className="flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-gold-500 flex-shrink-0" />
            <p className="text-granite-400 text-sm">
              ¿Organizas un evento en Solosancho? Contacta con el Ayuntamiento para incluirlo
              en la agenda municipal.
            </p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-gold-700/50 hover:bg-gold-900/30 transition-colors"
          >
            Contactar
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
