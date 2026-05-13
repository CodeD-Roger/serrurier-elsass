import { motion } from 'framer-motion'
import { MapPin, Clock, CheckCircle2 } from 'lucide-react'

const zones = [
  { name: 'Mulhouse & Agglomération', detail: 'Wittenheim, Illzach, Kingersheim, Riedisheim…', delay: 15 },
  { name: 'Colmar & Environs',        detail: 'Wintzenheim, Ingersheim, Turckheim…',           delay: 25 },
  { name: 'Sundgau',                  detail: 'Altkirch, Hirsingue, Dannemarie, Ferrette…',    delay: 30 },
  { name: 'Rhin & Saint-Louis',       detail: 'Huningue, Hésingue, Village-Neuf, Bartenheim…', delay: 20 },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function InterventionZone() {
  return (
    <section id="zone" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-gold-dark text-xs font-semibold tracking-[0.2em] uppercase mb-4">Secteur géographique</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Zone d'intervention
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Nous intervenons dans tout le{' '}
            <span className="text-gray-900 font-medium">Haut-Rhin (68)</span>{' '}
            en <span className="text-gray-900 font-medium">20 à 30 minutes</span>.
          </p>
          <div className="w-10 h-px bg-gold mx-auto mt-7" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Carte stylisée */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm">
              <svg viewBox="0 0 320 300" className="w-full max-w-sm mx-auto" aria-hidden="true">
                <defs>
                  <radialGradient id="mulhouseGlow" cx="45%" cy="65%" r="40%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="deptGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Silhouette du département */}
                <path
                  d="M100,30 L180,20 L240,50 L270,90 L265,140 L250,180 L240,230 L210,270 L170,285 L130,275 L90,250 L65,210 L60,165 L70,120 L80,70 Z"
                  fill="url(#deptGlow)"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  strokeDasharray="5 3"
                  opacity="0.6"
                />

                {/* Rhin */}
                <path
                  d="M265,140 Q268,160 264,190 Q262,210 255,230 Q248,250 240,270"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
                <text x="275" y="195" fill="#6B7280" fontSize="7" fontFamily="Inter, sans-serif">Rhin</text>

                {/* Mulhouse */}
                <circle cx="200" cy="200" r="9" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="4" fill="#B8952A" />
                <text x="215" y="198" fill="#111827" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">Mulhouse</text>
                <text x="215" y="209" fill="#6B7280" fontSize="7" fontFamily="Inter, sans-serif">Agglomération</text>

                {/* Colmar */}
                <circle cx="170" cy="105" r="5" fill="#D4AF37" fillOpacity="0.7" stroke="#B8952A" strokeWidth="1" />
                <text x="180" y="109" fill="#374151" fontSize="8" fontFamily="Inter, sans-serif">Colmar</text>

                {/* Saint-Louis */}
                <circle cx="235" cy="248" r="4" fill="#D4AF37" fillOpacity="0.6" />
                <text x="194" y="263" fill="#374151" fontSize="7" fontFamily="Inter, sans-serif">Saint-Louis</text>

                {/* Altkirch */}
                <circle cx="155" cy="250" r="4" fill="#D4AF37" fillOpacity="0.6" />
                <text x="100" y="254" fill="#374151" fontSize="7" fontFamily="Inter, sans-serif">Altkirch</text>

                {/* Guebwiller */}
                <circle cx="140" cy="175" r="4" fill="#D4AF37" fillOpacity="0.6" />
                <text x="78" y="179" fill="#374151" fontSize="7" fontFamily="Inter, sans-serif">Guebwiller</text>

                {/* Rayon */}
                <circle cx="200" cy="200" r="65" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="4 5" opacity="0.3" />

                {/* Label dept */}
                <text x="100" y="55" fill="#B8952A" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">Haut-Rhin</text>
                <text x="105" y="68" fill="#6B7280" fontSize="9" fontFamily="Inter, sans-serif">Dép. 68</text>
              </svg>

              <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-gold inline-block" />
                  Mulhouse (base)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-4 border-t border-dashed border-gold/50" />
                  Zone couverte
                </span>
              </div>
            </div>
          </motion.div>

          {/* Liste des zones */}
          <div>
            <motion.div
              className="flex flex-col gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {zones.map(({ name, detail, delay }, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-gold/40 transition-colors duration-300">
                    <span className="text-gold-dark font-black text-base font-display">68</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-semibold text-sm">{name}</p>
                    <p className="text-gray-400 text-xs truncate mt-0.5">{detail}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium flex-shrink-0">
                    <Clock size={13} />
                    ~{delay} min
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-5 flex items-start gap-3 text-gray-500 text-sm bg-amber-50 border border-amber-100 rounded-xl p-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CheckCircle2 size={16} className="text-gold-dark flex-shrink-0 mt-0.5" />
              <p>
                Délais estimés depuis Mulhouse.{' '}
                <span className="text-gray-700 font-medium">Nous intervenons également dans le Bas-Rhin (67)</span>{' '}
                — appelez-nous pour vérifier.
              </p>
            </motion.div>

            <motion.div
              className="mt-6 flex items-center gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <MapPin size={15} className="text-gold-dark flex-shrink-0" />
              <p className="text-gray-400 text-sm">
                Pas sûr d'être dans notre zone ?{' '}
                <a
                  href="tel:06XXXXXXXX"
                  className="text-gold-dark hover:text-gold font-medium underline underline-offset-2 transition-colors duration-200"
                  aria-label="Appelez pour vérifier votre zone d'intervention"
                >
                  Appelez-nous.
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
