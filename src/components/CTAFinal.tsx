import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const PHONE = '03 74 47 52 51'

export default function CTAFinal() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #991B1B 0%, #DC2626 45%, #EF4444 75%, #B91C1C 100%)' }}
    >
      {/* Motifs décoratifs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full border border-white/6" />
        <div className="absolute -left-28 -bottom-28 w-96 h-96 rounded-full border border-black/10" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(circle at 75% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Urgence serrurerie</p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
            Besoin d'un serrurier
            <br />maintenant ?
          </h2>

          <p className="text-white/70 text-lg mb-10 font-medium">
            Disponible 24h/24, 7j/7 · Réponse immédiate
          </p>

          {/* Bouton pulsant */}
          <motion.div
            className="inline-block"
            animate={{ boxShadow: ['0 0 0 0 rgba(255,255,255,0.3)', '0 0 0 18px rgba(255,255,255,0)'] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
            style={{ borderRadius: '1rem' }}
          >
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="shine-effect inline-flex items-center gap-3.5 bg-white text-rouge font-bold text-xl px-10 py-5 rounded-2xl hover:bg-gray-50 transition-colors duration-200 shadow-2xl"
              aria-label={`Appeler Serrurier Wagner au ${PHONE} — disponible 24h/24`}
            >
              <Phone size={22} className="flex-shrink-0" />
              Appeler le {PHONE}
            </a>
          </motion.div>

          {/* Micro-détails */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/70 text-sm font-medium">
            {['⚡ 30 min max', '📋 Devis gratuit', '🔒 Artisan certifié', '💳 CB acceptée'].map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
