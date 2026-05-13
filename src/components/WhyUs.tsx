import { motion } from 'framer-motion'
import { FileCheck, MapPin, Award } from 'lucide-react'

const reasons = [
  {
    icon: FileCheck,
    title: 'Devis transparent',
    desc: 'Prix annoncé avant intervention — aucune mauvaise surprise sur la facture. Devis détaillé gratuit par téléphone ou sur place.',
    from: -60,
  },
  {
    icon: MapPin,
    title: 'Artisan local depuis 15 ans',
    desc: 'Installé dans le Haut-Rhin depuis 2009, Serrurier Wagner connaît le terrain. Un vrai artisan local, pas un central téléphonique.',
    from: 0,
  },
  {
    icon: Award,
    title: 'Assurance décennale',
    desc: "Tous nos travaux sont couverts par une assurance décennale. Votre tranquillité d'esprit est notre priorité.",
    from: 60,
  },
]

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-bleu text-xs font-semibold tracking-[0.2em] uppercase mb-4">Notre différence</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Pourquoi nous choisir ?
          </h2>
          <div className="w-10 h-px bg-rouge mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map(({ icon: Icon, title, desc, from }) => (
            <motion.div
              key={title}
              className="flex flex-col items-center text-center md:items-start md:text-left group"
              initial={{ opacity: 0, x: from }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:border-bleu/40 group-hover:shadow-md transition-all duration-300">
                  <Icon size={26} className="text-bleu" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-gray-900 font-bold text-xl mb-3 font-display">{title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">{desc}</p>

              <div className="w-10 h-0.5 bg-bleu/30 mt-5 group-hover:bg-bleu group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 pt-12 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            { value: '+2 000', label: 'interventions réalisées' },
            { value: '15 ans', label: "d'expérience" },
            { value: '98%',    label: 'clients satisfaits' },
            { value: '30 min', label: 'délai moyen' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl sm:text-4xl font-black text-rouge">{value}</span>
              <span className="text-gray-400 text-sm">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
