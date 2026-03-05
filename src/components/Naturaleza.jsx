import { motion } from 'framer-motion'
import { Footprints, Bird, Sun, Leaf, ArrowRight } from 'lucide-react'

// FOTO FONDO: Sierra de la Paramera — Wikimedia Commons CC BY-SA
// https://commons.wikimedia.org/wiki/File:Sierra_de_la_Paramera_5.jpg
// [SUGERENCIA] Usar foto con vegetación de primer plano (retamas, cantuesos) en lugar de la cima

const actividades = [
  {
    icon: Footprints,
    title: 'Senderismo',
    description:
      'Rutas circulares desde los cuatro núcleos que ascienden hasta los prados de altura de la Paramera. Para todos los niveles.',
  },
  {
    icon: Bird,
    title: 'Fauna y flora',
    description:
      'Buitres, ciervos, zorros y una explosión de retamas amarillas y cantuesos violeta en primavera. Biodiversidad excepcional.',
  },
  {
    icon: Sun,
    title: 'Las cuatro estaciones',
    description:
      'Nieve en invierno, flores en primavera, frescor en verano y tonos cobrizos en otoño. Cada visita es única.',
  },
  {
    icon: Leaf,
    title: 'Espacio Natural Protegido',
    description:
      'Solosancho forma parte de las Sierras de la Paramera y Serrota, declaradas Espacio Natural Protegido de Castilla y León.',
  },
]

export default function Naturaleza() {
  return (
    <section id="naturaleza" className="relative overflow-hidden">

      {/* ── Imagen de fondo: Sierra de la Paramera (Wikimedia CC BY-SA) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/paramera.jpg")', backgroundPosition: 'center 70%' }}
      />

      {/* Overlay verde profundo para la sección de naturaleza */}
      <div className="absolute inset-0 bg-gradient-to-b from-sierra-950/92 via-sierra-950/85 to-black/95" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(42,92,14,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 64px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 64px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sierra-400 text-xs font-semibold tracking-[0.3em] uppercase">
            Espacio Natural Protegido
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3 mb-4">
            La Sierra de{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #a3ce7b, #5e9933)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              la Paramera
            </span>
          </h2>
          <p className="text-sierra-300/60 max-w-xl mx-auto text-lg leading-relaxed">
            A tan solo 20&nbsp;km de Ávila capital, Solosancho ofrece un entorno natural donde
            el silencio, el granito y el verde mandan.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {actividades.map((act, i) => {
            const Icon = act.icon
            return (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-sierra-700/20"
                style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-sierra-800/50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sierra-300" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{act.title}</h3>
                <p className="text-sierra-300/55 text-sm leading-relaxed">{act.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-sierra-700/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)' }}
        >
          <div>
            <p className="text-sierra-400 text-xs font-semibold uppercase tracking-widest mb-1">
              Turismo rural en Solosancho
            </p>
            <h3 className="text-white text-2xl font-bold font-heading">
              Escapa a la naturaleza auténtica de Ávila
            </h3>
            <p className="text-sierra-300/50 text-sm mt-2 max-w-md">
              Casas rurales, rutas de senderismo y un patrimonio histórico que no encontrarás
              en ningún otro rincón de Castilla y León.
            </p>
          </div>
          <motion.a
            href="#contacto"
            className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white text-sm border border-sierra-500/50 hover:bg-sierra-700/50 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Planifica tu escapada
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <p className="mt-8 text-center text-white/20 text-[10px] tracking-wide">
          Foto de fondo: Sierra de la Paramera · Diego Delso, CC BY-SA · Wikimedia Commons
        </p>
      </div>
    </section>
  )
}
