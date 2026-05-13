import { motion } from 'framer-motion'
import { ShieldCheck, Zap, FileText, BadgeCheck } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    label: 'Artisan certifié',
    desc: 'Qualifié & assuré',
    bg: 'bg-bleu/10',
    border: 'border-bleu/25',
    hoverBg: 'group-hover:bg-bleu/20',
    hoverBorder: 'group-hover:border-bleu/40',
    iconColor: 'text-bleu-light',
  },
  {
    icon: Zap,
    label: '30 min chrono',
    desc: 'Délai garanti',
    bg: 'bg-rouge/10',
    border: 'border-rouge/25',
    hoverBg: 'group-hover:bg-rouge/20',
    hoverBorder: 'group-hover:border-rouge/40',
    iconColor: 'text-rouge',
  },
  {
    icon: FileText,
    label: 'Devis gratuit',
    desc: 'Sans engagement',
    bg: 'bg-bleu/10',
    border: 'border-bleu/25',
    hoverBg: 'group-hover:bg-bleu/20',
    hoverBorder: 'group-hover:border-bleu/40',
    iconColor: 'text-bleu-light',
  },
  {
    icon: BadgeCheck,
    label: 'Garantie 1 an',
    desc: 'Sur toutes prestations',
    bg: 'bg-bleu/10',
    border: 'border-bleu/25',
    hoverBg: 'group-hover:bg-bleu/20',
    hoverBorder: 'group-hover:border-bleu/40',
    iconColor: 'text-bleu-light',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ReassuranceBar() {
  return (
    <section className="border-y border-gray-100 py-10 px-6 bg-white">
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {pillars.map(({ icon: Icon, label, desc, bg, border, hoverBg, hoverBorder, iconColor }) => (
          <motion.div
            key={label}
            variants={itemVariants}
            className="flex flex-col items-center text-center gap-2.5 group"
          >
            <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center ${hoverBg} ${hoverBorder} transition-all duration-300`}>
              <Icon size={20} className={iconColor} strokeWidth={1.5} />
            </div>
            <p className="text-gray-900 font-semibold text-sm leading-tight">{label}</p>
            <p className="text-gray-400 text-xs">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
