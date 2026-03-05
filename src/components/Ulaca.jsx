import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Flame, Mountain, Shield, Compass, ArrowRight, Star } from 'lucide-react'

// FOTO FONDO: Castro de Ulaca, panorámica aérea — Wikimedia Commons CC BY-SA
// https://commons.wikimedia.org/wiki/File:Castro_de_Ulaca.JPG
//
// FOTO ALTAR: Altar de los Sacrificios de Ulaca — Wikimedia Commons CC BY-SA
// https://commons.wikimedia.org/wiki/File:Castro_de_Ulaca(Solosancho)-Altar_de_los_Sacrificios2.JPG
//
// [SUGERENCIA] Para la sección derecha añadir foto real del altar de sacrificios como imagen inline

const features = [
  { icon: Mountain, value: '~70 ha', label: 'Mayor oppidum prerromano peninsular' },
  { icon: Shield, value: 'S. III a.C.', label: 'Fundación de la ciudad vetona' },
  { icon: Flame, value: '~1.500 m', label: 'Altitud sobre el nivel del mar' },
  { icon: Compass, value: 'Villaviciosa', label: 'Acceso desde este núcleo' },
]

export default function Ulaca() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section id="ulaca" ref={ref} className="relative overflow-hidden">

      {/* ── Imagen de fondo: Castro de Ulaca panorámica (Wikimedia CC BY-SA) ── */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/ulaca-panoramica.jpg")',
          backgroundPosition: 'center 30%',
          y: bgY,
          scale: 1.1,
        }}
      />

      {/* Overlay muy oscuro para el texto épico */}
      <div className="absolute inset-0 bg-gradient-to-b from-granite-950/90 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20" />

      {/* Glow dorado ambiental */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(200,138,16,0.10) 0%, transparent 60%)',
        }}
      />

      {/* Top divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-gold-800/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold-600" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
                Patrimonio Vetón · La Pompeya Vetona
              </span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-8">
              El Castro
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #e9c24a 0%, #c88a10 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                de Ulaca
              </span>
            </h2>

            <div className="space-y-5 text-base leading-relaxed">
              <p className="text-white/85">
                En lo alto de la Sierra de la Paramera, a más de{' '}
                <strong className="text-white">1.500 metros de altitud</strong>, se alzan los
                muros de la mayor ciudad prerromana de la Península Ibérica. Casi{' '}
                <strong className="text-white">70 hectáreas</strong> cercadas por una muralla
                colosal de granito, habitadas por los vetones desde el siglo&nbsp;III&nbsp;a.C.
              </p>
              <p className="text-white/60">
                El castro conserva vestigios únicos: una{' '}
                <strong className="text-gold-400">sauna ritual</strong> excavada en la roca,
                edificios públicos tallados en el granito y, sobre todo, el célebre{' '}
                <strong className="text-gold-400">Altar de los Sacrificios</strong>: un recinto
                rectangular al que se accede por una doble escalinata. En sus cubetas se
                depositaban las ofrendas y la sangre de los animales sacrificados a los dioses
                vetones. No existe otro igual en toda la Hispania prerromana.
              </p>
              <p className="text-white/60">
                En Solosancho, junto a la iglesia de San Juan Evangelista, puedes contemplar
                un <strong className="text-white">verraco</strong> recuperado del propio castro:
                escultura zoomorfa de granito —toro o cerdo— que simboliza la identidad de la
                cultura vetona, dispersa por toda la meseta ibérica pero con especial
                concentración en las tierras de Ávila.
              </p>
            </div>

            <motion.a
              href="#ulaca-visita"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-granite-950 text-base"
              style={{ background: 'linear-gradient(135deg, #e9c24a, #c88a10)' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Planifica tu visita al castro
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <p className="mt-6 text-white/20 text-[10px] tracking-wide">
              Foto de fondo: Castro de Ulaca · Wikimedia Commons CC BY-SA
            </p>
          </motion.div>

          {/* ── Right: altar image + feature cards ── */}
          <div className="space-y-4">

            {/* Foto del Altar de los Sacrificios */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-gold-900/30"
              style={{ aspectRatio: '16/9' }}
            >
              {/* FOTO: Altar de los Sacrificios, Castro de Ulaca (Wikimedia CC BY-SA) */}
              <img
                src="/images/ulaca-altar.jpg"
                alt="Altar de los Sacrificios del Castro de Ulaca, Solosancho, Ávila"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-0.5">
                  El Altar de los Sacrificios
                </p>
                <p className="text-white/70 text-xs leading-relaxed">
                  Doble escalinata tallada en granito · único en la Hispania prerromana
                </p>
              </div>
            </motion.div>

            {features.map((feat, i) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-5 p-4 rounded-2xl border border-gold-900/20"
                  style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(200,138,16,0.20), rgba(200,138,16,0.05))',
                    }}
                  >
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-heading">{feat.value}</div>
                    <div className="text-white/45 text-sm mt-0.5">{feat.label}</div>
                  </div>
                </motion.div>
              )
            })}

            {/* Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-5 rounded-2xl border border-gold-900/20"
              style={{ background: 'rgba(53,26,8,0.35)', backdropFilter: 'blur(8px)' }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic">
                "Una visita al Castro de Ulaca es adentrarse en el mundo de los vetones:
                una civilización que dominó la meseta ibérica antes de Roma y dejó en
                las tierras de Ávila su huella más duradera."
              </p>
              <p className="mt-3 text-gold-700 text-xs uppercase tracking-widest font-medium">
                — Turismo de Ávila
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-sierra-900/40 to-transparent" />
    </section>
  )
}
