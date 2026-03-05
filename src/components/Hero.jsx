import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import portada from '../assets/images/portada-solosancho.png'

const stats = [
  { value: '~1.000', label: 'Habitantes' },
  { value: '1.100 m', label: 'Altitud media' },
  { value: '4', label: 'Núcleos' },
  { value: '+2.300', label: 'Años de historia' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-center overflow-hidden">

      {/* ── Foto aérea de Solosancho (imagen del Ayuntamiento) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${portada})` }}
      />

      {/* Overlay oscuro para contraste perfecto del texto */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-granite-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Glow dorado sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 70%, rgba(200,138,16,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
          <MapPin className="w-4 h-4 text-gold-400" />
          <span className="text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase drop-shadow">
            Valle Amblés · Ávila · Castilla y León
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="font-heading leading-[0.9] mb-8 select-none"
        >
          <span
            className="block text-[clamp(5rem,18vw,11rem)] font-black tracking-tight drop-shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #ffffff 10%, #e8e3db 55%, #c4bdb2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            SOLO
          </span>
          <span
            className="block text-[clamp(5rem,18vw,11rem)] font-black tracking-tight drop-shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #e9c24a 0%, #c88a10 50%, #dfa61f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            SANCHO
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-white/80 text-lg sm:text-xl max-w-xl leading-relaxed mb-14 drop-shadow"
        >
          Donde la Sierra de la Paramera abraza el Valle Amblés. Cuatro pueblos,
          dos mil años de historia y el castro vetón más grande de la Península Ibérica.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-4"
              style={{
                background: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div className="text-gold-400 text-2xl sm:text-3xl font-bold font-heading leading-none">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs mt-1.5 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Crédito fotográfico */}
        <motion.p variants={itemVariants} className="mt-10 text-white/25 text-[10px] tracking-wide">
          Foto aérea · Ayuntamiento de Solosancho
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
