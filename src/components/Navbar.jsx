import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Building2, CalendarDays, Megaphone } from 'lucide-react'

const navLinks = [
  { label: 'Municipio', href: '#municipio' },
  { label: 'Ulaca', href: '#ulaca' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Naturaleza', href: '#naturaleza' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-granite-950/96 backdrop-blur-md shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo con escudo oficial */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex-shrink-0 drop-shadow-lg">
              <img
                src="/images/escudo.png"
                alt="Escudo Oficial de Solosancho"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-none">
              <div className="text-white/60 text-[10px] font-medium tracking-widest uppercase">
                Ayuntamiento de
              </div>
              <div className="text-white font-bold text-base tracking-wide group-hover:text-gold-300 transition-colors duration-200">
                SOLOSANCHO
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop utility buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#sede"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white/80 border border-white/20 rounded-lg hover:border-white/50 hover:text-white transition-all backdrop-blur-sm"
            >
              <Building2 className="w-3.5 h-3.5" />
              Sede Electrónica
            </a>
            <a
              href="#cita"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-sierra-700 text-white rounded-lg hover:bg-sierra-600 transition-colors"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              Cita Previa
            </a>
            <a
              href="#bandos"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-gold-600 text-white rounded-lg hover:bg-gold-500 transition-colors"
            >
              <Megaphone className="w-3.5 h-3.5" />
              Bandos
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-granite-950/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-granite-300 hover:text-white font-medium py-3 px-3 rounded-xl hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 grid gap-3 mt-4">
                <a
                  href="#sede"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <Building2 className="w-4 h-4" /> Sede Electrónica
                </a>
                <a
                  href="#cita"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-sierra-700 text-white rounded-xl hover:bg-sierra-600 transition-colors"
                >
                  <CalendarDays className="w-4 h-4" /> Cita Previa
                </a>
                <a
                  href="#bandos"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-gold-600 text-white rounded-xl hover:bg-gold-500 transition-colors"
                >
                  <Megaphone className="w-4 h-4" /> Bandos Municipales
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
