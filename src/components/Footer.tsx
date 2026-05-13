import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Shield } from 'lucide-react'

const PHONE = '03 74 47 52 51'
const SIRET = '842 156 731 00024'

const navLinks = [
  { label: 'Accueil',            href: '#accueil' },
  { label: 'Services',           href: '#services' },
  { label: "Zone d'intervention", href: '#zone' },
  { label: 'Témoignages',        href: '#avis' },
  { label: 'Contact',            href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Logo & description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-bleu/10 border border-bleu/20 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg leading-tight">Serrurier Wagner</p>
                <p className="text-gray-400 text-xs">Artisan certifié — Haut-Rhin</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Artisan serrurier indépendant dans le Haut-Rhin depuis 2009.
              Urgences, installations et sécurisations — disponible 24h/24.
            </p>
            <div className="flex items-center gap-2 text-bleu-light text-sm font-medium">
              <Shield size={14} />
              Artisan certifié & assuré
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Navigation</h3>
            <nav aria-label="Navigation footer">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-rouge-light text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-3 h-px bg-gray-600 group-hover:bg-rouge group-hover:w-4 transition-all duration-200" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-rouge-light transition-colors duration-200 group"
                  aria-label={`Appeler au ${PHONE}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-rouge/10 border border-rouge/20 flex items-center justify-center group-hover:border-rouge/40 transition-colors duration-200 flex-shrink-0">
                    <Phone size={14} className="text-rouge" />
                  </div>
                  <span className="text-sm font-medium">{PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:elsass.serrure@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-bleu-light transition-colors duration-200 group"
                  aria-label="Envoyer un email"
                >
                  <div className="w-8 h-8 rounded-lg bg-bleu/10 border border-bleu/20 flex items-center justify-center group-hover:border-bleu/40 transition-colors duration-200 flex-shrink-0">
                    <Mail size={14} className="text-bleu-light" />
                  </div>
                  <span className="text-sm">elsass.serrure@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-bleu/10 border border-bleu/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-bleu-light" />
                  </div>
                  <div>
                    <p className="text-sm">Mulhouse & Haut-Rhin</p>
                    <p className="text-xs text-gray-500 mt-0.5">Dép. 68 — Alsace</p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-rouge/5 border border-rouge/15 rounded-xl">
              <p className="text-rouge text-xs font-semibold uppercase tracking-wide mb-1">Disponibilité</p>
              <p className="text-white text-sm font-medium">24h/24 · 7j/7</p>
              <p className="text-gray-400 text-xs">Nuits, week-ends, jours fériés</p>
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-white/5 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <p>© {year} Serrurier Wagner. Tous droits réservés.</p>
            <span className="hidden sm:inline">·</span>
            <p>SIRET : {SIRET}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Mentions légales</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Confidentialité</a>
          </div>
        </div>

        <p className="text-gray-600 text-xs text-center mt-4 max-w-2xl mx-auto leading-relaxed">
          Serrurier Wagner — Entreprise individuelle. Assurance décennale Allianz n° 123456789.
          Interventions conformes aux normes NF P25-361. Prix indicatifs, devis définitif sur place.
        </p>
      </div>
    </footer>
  )
}
