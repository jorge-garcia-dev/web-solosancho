import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const quickLinks = [
  'Sede Electrónica',
  'Cita Previa',
  'Bandos Municipales',
  'Castro de Ulaca',
  'Turismo',
  'Historia',
]

export default function Footer() {
  return (
    <footer
      id="contacto"
      style={{ background: '#100e0c' }}
      className="border-t border-granite-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/escudo.png"
                alt="Escudo Oficial de Solosancho"
                className="w-10 h-10 object-contain drop-shadow-lg"
              />
              <div className="leading-tight">
                <div className="text-white font-bold text-lg">Solosancho</div>
                <div className="text-granite-600 text-xs">Ayuntamiento · Ávila</div>
              </div>
            </div>
            <p className="text-granite-600 text-sm leading-relaxed max-w-xs">
              Municipio del Valle Amblés, a 20&nbsp;km de Ávila. Tierra de vetones, castillos
              medievales y sierra protegida.
            </p>

            {/* Escudo palette chips */}
            <div className="flex gap-2 mt-6">
              <span className="w-5 h-5 rounded-full bg-sierra-800 ring-1 ring-white/10" title="Verde sierra" />
              <span className="w-5 h-5 rounded-full bg-gold-500 ring-1 ring-white/10" title="Dorado cereal" />
              <span className="w-5 h-5 rounded-full bg-granite-600 ring-1 ring-white/10" title="Granito" />
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-granite-500 text-sm">
                <MapPin className="w-4 h-4 text-granite-700 mt-0.5 flex-shrink-0" />
                <span>
                  Plaza del Ayuntamiento, s/n
                  <br />
                  05129 Solosancho, Ávila
                </span>
              </li>
              <li className="flex items-center gap-3 text-granite-500 text-sm">
                <Phone className="w-4 h-4 text-granite-700 flex-shrink-0" />
                <a href="tel:+34920282001" className="hover:text-white transition-colors">
                  920 28 20 01
                </a>
              </li>
              <li className="flex items-center gap-3 text-granite-500 text-sm">
                <Mail className="w-4 h-4 text-granite-700 flex-shrink-0" />
                <a
                  href="mailto:ayuntamiento@solosancho.es"
                  className="hover:text-white transition-colors"
                >
                  ayuntamiento@solosancho.es
                </a>
              </li>
              <li className="flex items-center gap-3 text-granite-500 text-sm">
                <ExternalLink className="w-4 h-4 text-granite-700 flex-shrink-0" />
                <a
                  href="https://www.aytosolosancho.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  aytosolosancho.es
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Accesos directos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-granite-600 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-granite-800 group-hover:bg-gold-500 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-granite-900/80 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-granite-700 text-xs">
            © {new Date().getFullYear()} Ayuntamiento de Solosancho. Todos los derechos
            reservados.
          </p>
          <p className="text-granite-800 text-xs">
            Valle Amblés · Sierra de la Paramera · Ávila · Castilla y León
          </p>
        </div>
      </div>
    </footer>
  )
}
