import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Marie-Claire T.',
    location: 'Mulhouse (68)',
    rating: 5,
    text: "Porte claquée à 23h, Wagner était là en 22 minutes chrono. Professionnel, efficace, et le prix annoncé par téléphone était celui sur la facture. Je recommande sans hésiter.",
    service: "Ouverture d'urgence",
    date: 'Nov. 2024',
  },
  {
    name: 'Karim B.',
    location: 'Colmar (68)',
    rating: 5,
    text: "Changement complet de serrure après une tentative d'effraction. Travail soigné, devis respecté. Serrure multipoints installée en moins de 2h. Merci !",
    service: 'Sécurisation effraction',
    date: 'Oct. 2024',
  },
  {
    name: 'Sophie L.',
    location: 'Altkirch (68)',
    rating: 5,
    text: "Blindage de porte après déménagement. M. Wagner explique chaque étape, le résultat est top. La porte est vraiment solide maintenant. 5 étoiles méritées.",
    service: 'Blindage de porte',
    date: 'Sep. 2024',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="avis" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-gold-dark text-xs font-semibold tracking-[0.2em] uppercase mb-4">Ce que disent nos clients</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Témoignages
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="text-gray-900 font-semibold ml-1 text-sm">4,9</span>
            <span className="text-gray-400 text-sm">/ 5 · 147 avis</span>
          </div>
          <div className="w-10 h-px bg-gold mx-auto mt-7" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {testimonials.map(({ name, location, rating, text, service, date }) => (
            <motion.article
              key={name}
              variants={cardVariants}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <Stars count={rating} />
                <span className="text-[11px] text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                  {service}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                « {text} »
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{location}</p>
                </div>
                <span className="text-gray-300 text-xs">{date}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
