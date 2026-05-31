import { motion } from 'framer-motion'
import { Phone, Zap, ShieldCheck } from 'lucide-react'

const PHONE = '03 74 47 52 51'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="noise-overlay relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #0A0A0A 0%, #0f0f14 50%, #13131a 100%)' }}
    >
      {/* Halo rouge haut-droite — urgence */}
      <div
        className="absolute top-[-8%] right-[-8%] w-[560px] h-[560px] rounded-full pointer-events-none opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 65%)', filter: 'blur(64px)' }}
      />
      {/* Halo bleu bas-gauche — sécurité */}
      <div
        className="absolute bottom-[-12%] left-[-8%] w-[420px] h-[420px] rounded-full pointer-events-none opacity-[0.10]"
        style={{ background: 'radial-gradient(circle, #1E40AF 0%, transparent 65%)', filter: 'blur(80px)' }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge disponibilité */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-rouge/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rouge opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rouge" />
            </span>
            <Zap size={13} className="text-rouge" />
            <span className="text-rouge text-sm font-medium tracking-wide">Intervention en 30 min garantie</span>
          </div>
        </motion.div>

        {/* Titre */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-black text-creme leading-[0.92] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)' }}
        >
          Serrurier
          <br />
          <span className="text-rouge-gradient">Elsass</span>
        </motion.h1>

        {/* Divider */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-7">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-bleu/40" />
          <ShieldCheck size={15} className="text-bleu-light/70" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-bleu/40" />
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          variants={itemVariants}
          className="text-acier text-xl sm:text-2xl font-light leading-relaxed mb-10"
        >
          Intervention rapide{' '}
          <span className="text-creme font-normal">24h/24 · 7j/7</span>
          <br className="hidden sm:block" />
          {' '}Mulhouse & Haut-Rhin (68)
        </motion.p>

        {/* CTA principal */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className="shine-effect group inline-flex items-center gap-3 bg-rouge hover:bg-rouge-dark text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors duration-200 shadow-xl shadow-rouge/25 w-full sm:w-auto justify-center"
            aria-label={`Appeler Serrurier Elsass au ${PHONE}`}
          >
            <Phone size={20} className="transition-transform duration-200 group-hover:scale-110 flex-shrink-0" />
            Appeler — {PHONE}
          </a>

          <a
            href="#services"
            className="text-acier/70 hover:text-creme text-sm font-medium transition-colors duration-200 flex items-center gap-1.5"
          >
            Voir nos services
            <span className="text-xs opacity-60">↓</span>
          </a>
        </motion.div>

        {/* Micro-preuves */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-7 gap-y-2 mt-10 text-acier/60 text-sm"
        >
          {['Devis gratuit', 'Sans engagement', 'Artisan certifié'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-bleu-light/50 inline-block flex-shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <div className="w-px h-9 bg-gradient-to-b from-transparent to-white/15 rounded-full" />
        <div className="w-1 h-1 rounded-full bg-white/20" />
      </motion.div>
    </section>
  )
}
