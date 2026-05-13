import { motion } from 'framer-motion'

const INK   = '#0B1F4D'
const ROUGE = '#B91C1C'
const BLEU  = '#1742A8'
const MUTED = '#5B6680'

const articles = [
  {
    n: '01',
    title: 'Devis transparent',
    desc: 'Prix annoncé avant intervention — aucune mauvaise surprise sur la facture. Devis détaillé gratuit par téléphone ou sur place.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3.5h9l5 5v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-18a2 2 0 0 1 2-2Z"/>
        <path d="M16 3.5V8a1 1 0 0 0 1 1h4"/>
        <path d="m10 16 3 3 5-6"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Artisan local depuis 2009',
    desc: 'Installé dans le Haut-Rhin depuis 15 ans, je connais le terrain. Un vrai artisan, pas un central téléphonique.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 25s8-7.5 8-13.5A8 8 0 1 0 6 11.5C6 17.5 14 25 14 25Z"/>
        <circle cx="14" cy="11.5" r="3"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Assurance décennale',
    desc: "Tous mes travaux sont couverts par une assurance décennale. Votre tranquillité d'esprit est ma priorité.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="11" r="6.5"/>
        <path d="M10 16.5 8 25l6-3 6 3-2-8.5"/>
      </svg>
    ),
  },
]

const stats = [
  { value: '+2 000', label: 'interventions réalisées' },
  { value: '15 ans', label: "d'expérience" },
  { value: '98 %',   label: 'clients satisfaits' },
  { value: '30 min', label: 'délai moyen' },
]

export default function WhyUs() {
  return (
    <section
      id="pourquoi-nous"
      style={{
        width: '100%',
        background: '#fff',
        padding: '88px 6vw 96px',
        fontFamily: '"Inter", system-ui, sans-serif',
        color: INK,
      }}
    >
      {/* Header éditorial */}
      <motion.header
        style={{ marginBottom: 64, maxWidth: 680 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p style={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: BLEU,
          marginBottom: 20,
        }}>
          Notre différence
        </p>

        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(48px, 7vw, 88px)',
          fontWeight: 500,
          lineHeight: 0.96,
          letterSpacing: '-0.01em',
          color: INK,
          margin: '0 0 28px',
        }}>
          Pourquoi nous{' '}
          <em style={{ fontStyle: 'italic', color: ROUGE, fontWeight: 400 }}>choisir</em>
          {' '}?
        </h2>

        <p style={{
          fontSize: 17,
          lineHeight: 1.65,
          color: MUTED,
          fontWeight: 400,
          maxWidth: 560,
        }}>
          Quinze ans à crocheter, déverrouiller, sécuriser. Et toujours la même promesse : un prix annoncé, un artisan qui répond, une intervention qui tient.
        </p>
      </motion.header>

      {/* 3 articles — cartes */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 72,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {articles.map(({ n, title, desc, icon }, i) => (
          <motion.article
            key={n}
            style={{
              background: '#fff',
              border: '1px solid #e2e6ee',
              borderRadius: 16,
              padding: '32px 28px 36px',
              boxShadow: '0 1px 4px rgba(11,31,77,0.05)',
              display: 'flex',
              flexDirection: 'column',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Icône */}
            <div style={{ color: BLEU, marginBottom: 20 }}>
              {icon}
            </div>

            {/* Numéro éditorial */}
            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: MUTED,
              marginBottom: 16,
            }}>
              <span style={{ color: '#c5cad9' }}>0</span>
              {n.slice(1)}
            </div>

            {/* Titre */}
            <h3 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 26,
              fontWeight: 500,
              lineHeight: 1.2,
              color: INK,
              marginBottom: 14,
              letterSpacing: '-0.01em',
            }}>
              {title}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: MUTED,
              fontWeight: 400,
            }}>
              {desc}
            </p>
          </motion.article>
        ))}
      </motion.div>

      {/* Stats — "En chiffres" */}
      <motion.div
        style={{
          borderTop: `1px solid #e2e6ee`,
          paddingTop: 36,
        }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Header stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 32,
          flexWrap: 'wrap',
          gap: 8,
        }}>
          <span style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: BLEU,
          }}>
            En chiffres
          </span>
          <span style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#c5cad9',
          }}>
            Bilan 2009 — 2024
          </span>
        </div>

        {/* Grille des stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0 32px',
        }}>
          {stats.map(({ value, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 500,
                lineHeight: 1,
                color: ROUGE,
                letterSpacing: '-0.02em',
              }}>
                {value}
              </span>
              <span style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 13,
                color: MUTED,
                fontWeight: 400,
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
