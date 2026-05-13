import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

const STORAGE_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function refuse() {
    localStorage.setItem(STORAGE_KEY, 'refused')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        /* Wrapper de centrage — ne pas animer ce div */
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0 16px 16px',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 9999,
          pointerEvents: 'none',
        }}>
          <motion.div
            role="dialog"
            aria-label="Gestion des cookies"
            aria-live="polite"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              pointerEvents: 'auto',
              width: '100%',
              maxWidth: 740,
              background: '#0B1F4D',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
              fontFamily: '"Inter", system-ui, sans-serif',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent line top */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: 2,
              background: 'linear-gradient(90deg, #1742A8, #DC2626)',
            }} />

            <div style={{
              padding: '20px 44px 20px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}>
              {/* Icône */}
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Cookie size={18} color="#93A8F4" />
              </div>

              {/* Texte */}
              <div style={{ flex: '1 1 200px' }}>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 3 }}>
                  Ce site utilise des cookies
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>
                  Uniquement des cookies techniques nécessaires au bon fonctionnement.{' '}
                  <button
                    onClick={() => {
                      refuse()
                      window.dispatchEvent(new CustomEvent('navigate-confidentialite'))
                    }}
                    style={{
                      color: '#93A8F4',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      fontSize: 13,
                      textDecoration: 'underline',
                      textUnderlineOffset: 2,
                      fontFamily: 'inherit',
                    }}
                  >
                    En savoir plus
                  </button>
                </p>
              </div>

              {/* Boutons */}
              <div style={{
                display: 'flex',
                gap: 8,
                flex: '1 1 auto',
                justifyContent: 'flex-end',
                minWidth: 0,
              }}>
                <button
                  onClick={refuse}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.6)',
                    borderRadius: 8,
                    padding: '9px 20px',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, color 0.2s',
                    fontFamily: 'inherit',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0',
                    maxWidth: 120,
                  }}
                  onMouseEnter={e => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.borderColor = 'rgba(255,255,255,0.35)'
                    b.style.color = 'rgba(255,255,255,0.9)'
                  }}
                  onMouseLeave={e => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.borderColor = 'rgba(255,255,255,0.15)'
                    b.style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  Refuser
                </button>
                <button
                  onClick={accept}
                  style={{
                    background: '#DC2626',
                    border: '1px solid transparent',
                    color: '#fff',
                    borderRadius: 8,
                    padding: '9px 20px',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    fontFamily: 'inherit',
                    whiteSpace: 'nowrap',
                    flex: '1 1 0',
                    maxWidth: 120,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#B91C1C' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#DC2626' }}
                >
                  Accepter
                </button>
              </div>
            </div>

            {/* Fermer */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Fermer"
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.25)',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 6,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.7)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.25)' }}
            >
              <X size={14} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
