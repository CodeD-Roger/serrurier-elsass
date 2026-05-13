import { ArrowLeft } from 'lucide-react'

const INK   = '#0B1F4D'
const BLEU  = '#1742A8'
const MUTED = '#5B6680'

interface Props {
  onBack: () => void
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 26,
        fontWeight: 600,
        color: INK,
        marginBottom: 12,
        paddingBottom: 10,
        borderBottom: '1px solid #E6E9F0',
      }}>
        {title}
      </h2>
      <div style={{ color: MUTED, fontSize: 15, lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  )
}

export default function MentionsLegales({ onBack }: Props) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8F9FB',
      fontFamily: '"Inter", system-ui, sans-serif',
      color: INK,
    }}>
      {/* Header */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #E6E9F0',
        padding: '20px 6vw',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: BLEU,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              padding: '6px 0',
            }}
            aria-label="Retour à l'accueil"
          >
            <ArrowLeft size={16} />
            Retour
          </button>
          <span style={{ color: '#C5CAD9' }}>·</span>
          <span style={{ color: MUTED, fontSize: 13 }}>Mentions légales</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 6vw 100px' }}>
        <p style={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: BLEU,
          marginBottom: 16,
        }}>
          Informations légales
        </p>
        <h1 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 500,
          lineHeight: 1,
          color: INK,
          marginBottom: 48,
        }}>
          Mentions légales
        </h1>

        <Section title="1. Éditeur du site">
          <p><strong style={{ color: INK }}>Raison sociale :</strong> JOUN SERVICES</p>
          <p><strong style={{ color: INK }}>Forme juridique :</strong> Société par actions simplifiée à associé unique (SASU)</p>
          <p><strong style={{ color: INK }}>Capital social :</strong> 1,00 EUR</p>
          <p><strong style={{ color: INK }}>Siège social :</strong> 60 rue François 1er, 75008 Paris</p>
          <p><strong style={{ color: INK }}>SIREN :</strong> 999 215 627</p>
          <p><strong style={{ color: INK }}>RCS :</strong> 999 215 627 R.C.S. Paris</p>
          <p><strong style={{ color: INK }}>EUID :</strong> FR7501.999215627</p>
          <p><strong style={{ color: INK }}>Date d'immatriculation :</strong> 31 décembre 2025</p>
          <p><strong style={{ color: INK }}>Domiciliataire :</strong> LegalPlace — 814 428 785 R.C.S.</p>
        </Section>

        <Section title="2. Directeur de la publication">
          <p>
            Le directeur de la publication est <strong style={{ color: INK }}>Handouchi Ilias Joun</strong>,
            en qualité de Président de la société JOUN SERVICES.
          </p>
          <p style={{ marginTop: 8 }}>
            <strong style={{ color: INK }}>Contact :</strong>{' '}
            <a href="mailto:elsass.serrure@gmail.com" style={{ color: BLEU }}>
              elsass.serrure@gmail.com
            </a>
          </p>
        </Section>

        <Section title="3. Hébergement">
          <p>
            Ce site est hébergé par <strong style={{ color: INK }}>GitHub Pages</strong> (service de GitHub, Inc.),
            88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.
          </p>
        </Section>

        <Section title="4. Propriété intellectuelle">
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive
            de JOUN SERVICES ou de ses partenaires et est protégé par les lois françaises et internationales
            relatives à la propriété intellectuelle.
          </p>
          <p style={{ marginTop: 8 }}>
            Toute reproduction, distribution, modification ou utilisation de ces contenus, même partielle,
            est strictement interdite sans autorisation préalable écrite.
          </p>
        </Section>

        <Section title="5. Limitation de responsabilité">
          <p>
            JOUN SERVICES s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées
            sur ce site. Toutefois, elle ne peut garantir l'exhaustivité, la précision ou l'actualité
            des informations présentées.
          </p>
          <p style={{ marginTop: 8 }}>
            Les prix et délais d'intervention indiqués sont donnés à titre indicatif. Le devis définitif
            est établi sur place par le technicien.
          </p>
          <p style={{ marginTop: 8 }}>
            JOUN SERVICES ne saurait être tenue responsable des dommages directs ou indirects résultant
            de l'utilisation de ce site ou de l'impossibilité d'y accéder.
          </p>
        </Section>

        <Section title="6. Liens hypertextes">
          <p>
            Ce site peut contenir des liens vers des sites tiers. JOUN SERVICES n'exerce aucun contrôle
            sur ces sites et décline toute responsabilité quant à leur contenu ou leur disponibilité.
          </p>
        </Section>

        <Section title="7. Droit applicable">
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
            français seront seuls compétents.
          </p>
        </Section>

        <p style={{ color: '#C5CAD9', fontSize: 13, marginTop: 48 }}>
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </div>
  )
}
