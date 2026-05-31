import { motion } from 'framer-motion'

const INK   = '#0B1F4D'
const ROUGE = '#B91C1C'
const BLEU  = '#1742A8'
const MUTED = '#5B6680'
const GREEN = '#0F7A4A'

const PHONE = '03 74 47 52 51'

const zones = [
  { name: 'Mulhouse & Agglomération', detail: 'Wittenheim, Illzach, Kingersheim, Riedisheim…', delay: '~15 min' },
  { name: 'Colmar & Environs',        detail: 'Wintzenheim, Ingersheim, Turckheim…',           delay: '~25 min' },
  { name: 'Sundgau',                  detail: 'Altkirch, Hirsingue, Dannemarie, Ferrette…',    delay: '~30 min' },
  { name: 'Rhin & Saint-Louis',       detail: 'Huningue, Hésingue, Village-Neuf…',             delay: '~20 min' },
]

const ClockIcon = () => (
  <svg width="14" height="14" fill="none" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="6"/>
    <path d="M8 4.5V8l2.5 1.5"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 16 16">
    <path d="m3.5 8 3 3 6-7"/>
  </svg>
)

const PinIcon = () => (
  <svg width="15" height="15" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 16 16">
    <path d="M8 14s5-4.5 5-8.5A5 5 0 1 0 3 5.5C3 9.5 8 14 8 14Z"/>
    <circle cx="8" cy="5.5" r="1.8"/>
  </svg>
)

export default function InterventionZone() {
  return (
    <section
      id="zone"
      style={{
        width: '100%',
        background: '#FBF9F7',
        padding: '88px 6vw 96px',
        fontFamily: '"Inter", system-ui, sans-serif',
        color: INK,
      }}
    >
      {/* Header */}
      <motion.header
        style={{ marginBottom: 56, maxWidth: 640 }}
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
          marginBottom: 18,
        }}>
          Secteur géographique
        </p>

        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(48px, 7vw, 88px)',
          fontWeight: 500,
          lineHeight: 0.97,
          letterSpacing: '-0.01em',
          color: INK,
          margin: '0 0 24px',
        }}>
          Zone d&rsquo;
          <em style={{ fontStyle: 'italic', color: ROUGE, fontWeight: 400 }}>intervention</em>
        </h2>

        <p style={{ fontSize: 16, lineHeight: 1.65, color: MUTED }}>
          Nous intervenons dans tout le{' '}
          <strong style={{ color: INK, fontWeight: 600 }}>Haut-Rhin (68)</strong>{' '}
          en <strong style={{ color: INK, fontWeight: 600 }}>20 à 30 minutes</strong>.
        </p>
      </motion.header>

      {/* Corps : carte + liste */}
      <div className="zone-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.1fr)',
        gap: 48,
        alignItems: 'stretch',
      }}>

        {/* Carte Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="zone-map"
          style={{
            background: '#F3EFE7',
            borderRadius: 12,
            overflow: 'hidden',
            minHeight: 320,
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Mulhouse,+Haut-Rhin,+France&t=&z=10&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', height: '100%', filter: 'saturate(0.85) contrast(0.95)' }}
            loading="lazy"
            title="Zone d'intervention Serrurier Elsass — Haut-Rhin"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Liste des zones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          {zones.map(({ name, detail, delay }, i) => (
            <motion.article
              key={name}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 16,
                alignItems: 'center',
                background: '#fff',
                border: '1px solid #E6E9F0',
                borderRadius: 14,
                padding: '18px 20px',
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge "68" */}
              <div style={{
                background: '#FDF6E3',
                borderRadius: 10,
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  fontSize: 17,
                  color: INK,
                  lineHeight: 1,
                }}>
                  68
                </span>
              </div>

              {/* Nom + villes */}
              <div style={{ minWidth: 0 }}>
                <h3 style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: INK,
                  margin: '0 0 3px',
                  lineHeight: 1.3,
                }}>
                  {name}
                </h3>
                <p style={{
                  fontSize: 12,
                  color: MUTED,
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {detail}
                </p>
              </div>

              {/* Badge délai */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                background: '#E9F5EF',
                borderRadius: 999,
                padding: '5px 11px',
                flexShrink: 0,
              }}>
                <ClockIcon />
                <span style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 12,
                  fontWeight: 500,
                  color: GREEN,
                  whiteSpace: 'nowrap',
                }}>
                  {delay}
                </span>
              </div>
            </motion.article>
          ))}

          {/* Note Bas-Rhin */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              background: '#fff',
              border: '1px solid #E6E9F0',
              borderRadius: 14,
              padding: '16px 20px',
              marginTop: 4,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: '#E9F5EF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <CheckIcon />
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: MUTED, margin: 0 }}>
              <strong style={{ color: INK, fontWeight: 600 }}>Délais estimés depuis Mulhouse.</strong>{' '}
              Nous intervenons également dans le{' '}
              <strong style={{ color: INK, fontWeight: 600 }}>Bas-Rhin (67)</strong>{' '}
              — appelez-nous pour vérifier.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: INK,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
              paddingTop: 4,
            }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            aria-label="Appelez pour vérifier votre zone d'intervention"
          >
            <PinIcon />
            <span>
              Pas sûr d&rsquo;être dans notre zone ?{' '}
              <u style={{ textUnderlineOffset: 3, color: ROUGE }}>Appelez-nous.</u>
            </span>
          </motion.a>

        </div>
      </div>
    </section>
  )
}
