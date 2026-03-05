import { motion } from 'framer-motion'
import { Landmark, Castle, TreePine, Wheat } from 'lucide-react'

// FOTO CABECERA: Vista panorámica de Solosancho desde la sierra — Wikimedia Commons CC BY-SA
// Autor: Diego Delso — https://commons.wikimedia.org/wiki/File:Solosancho_01_by-dpc.jpg
// [SUGERENCIA] Card Villaviciosa → foto del Castillo de Villaviciosa
// [SUGERENCIA] Card Robledillo   → foto de robledal o paisaje de sierra
// [SUGERENCIA] Card Baterna      → foto de la calzada romana cercana

const nucleos = [
  {
    num: '01',
    name: 'Solosancho',
    role: 'Capital del municipio',
    icon: Landmark,
    description:
      'Núcleo principal y sede del Ayuntamiento. Junto a la iglesia de Santo Tomás Apóstol se conserva un verraco vetón recuperado del Castro de Ulaca: escultura de granito que atestigua la presencia milenaria de los vetones en estas tierras.',
    accent: 'text-granite-300',
    border: 'border-white/10',
    bg: 'rgba(30,26,22,0.80)',
    iconColor: 'text-granite-300',
    numColor: 'text-white/5',
  },
  {
    num: '02',
    name: 'Villaviciosa',
    role: 'Villa medieval · Puerta al Castro',
    icon: Castle,
    description:
      'La antigua "Xemensancho", fundada en los siglos XI-XII. Su castillo restaurado —siglos XIV y XV— domina el paisaje del valle. Desde aquí parte el camino al Castro de Ulaca, la mayor ciudad vetona de la Hispania prerromana.',
    accent: 'text-sierra-400',
    border: 'border-sierra-700/30',
    bg: 'rgba(15,26,9,0.82)',
    iconColor: 'text-sierra-400',
    numColor: 'text-sierra-950/60',
  },
  {
    num: '03',
    name: 'Robledillo',
    role: 'Naturaleza y silencio',
    icon: TreePine,
    description:
      'Enclave de gran belleza a los pies de la Paramera. Robledales, retamas y cantuesos forman parte del Espacio Natural Protegido de la sierra. Punto de partida de rutas de senderismo hacia las cumbres.',
    accent: 'text-sierra-300',
    border: 'border-sierra-600/20',
    bg: 'rgba(12,18,8,0.82)',
    iconColor: 'text-sierra-300',
    numColor: 'text-sierra-950/50',
  },
  {
    num: '04',
    name: 'Baterna',
    role: 'Raíces romanas',
    icon: Wheat,
    description:
      'El más antiguo del municipio. Su nombre deriva del latín "Tabernae". Vestigios romanos hallados junto a la calzada que unía Talavera con Ávila confirman su origen como enclave de paso hace más de dos mil años.',
    accent: 'text-gold-400',
    border: 'border-gold-800/30',
    bg: 'rgba(20,12,4,0.82)',
    iconColor: 'text-gold-400',
    numColor: 'text-gold-950/60',
  },
]

export default function Nucleos() {
  return (
    <section id="municipio" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* ── Imagen de fondo: vista panorámica de Solosancho (Wikimedia CC BY-SA) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/solosancho-vista.jpg")', backgroundPosition: 'center 60%' }}
      />
      {/* Overlay fuerte para que las cards sean legibles */}
      <div className="absolute inset-0 bg-granite-950/88" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
            El municipio
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3 mb-4">
            Un territorio,{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #e9c24a, #c88a10)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              cuatro almas
            </span>
          </h2>
          <p className="text-granite-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Solosancho se articula en torno a cuatro núcleos situados entre los contrafuertes
            de la Paramera y la llanura cultivada del Valle Amblés.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {nucleos.map((n, i) => {
            const Icon = n.icon
            return (
              <motion.article
                key={n.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border ${n.border} p-6 overflow-hidden cursor-default`}
                style={{ background: n.bg, backdropFilter: 'blur(8px)' }}
              >
                {/* Background number */}
                <div
                  className={`absolute top-3 right-4 text-6xl font-black font-heading select-none ${n.numColor}`}
                >
                  {n.num}
                </div>

                <Icon className={`w-7 h-7 mb-4 ${n.iconColor}`} />
                <h3 className="text-white text-xl font-bold mb-1">{n.name}</h3>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${n.accent}`}>
                  {n.role}
                </p>
                <p className="text-granite-400 text-sm leading-relaxed">{n.description}</p>
              </motion.article>
            )
          })}
        </div>

        {/* Photo credit */}
        <p className="mt-8 text-center text-white/20 text-[10px] tracking-wide">
          Foto de fondo: Solosancho · Diego Delso, CC BY-SA · Wikimedia Commons
        </p>
      </div>
    </section>
  )
}
