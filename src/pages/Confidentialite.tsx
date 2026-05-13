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

export default function Confidentialite({ onBack }: Props) {
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
          <span style={{ color: MUTED, fontSize: 13 }}>Politique de confidentialité</span>
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
          RGPD & Protection des données
        </p>
        <h1 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 500,
          lineHeight: 1,
          color: INK,
          marginBottom: 48,
        }}>
          Politique de<br />confidentialité
        </h1>

        <Section title="1. Responsable du traitement">
          <p>
            Le responsable du traitement de vos données personnelles est :
          </p>
          <p style={{ marginTop: 8 }}>
            <strong style={{ color: INK }}>JOUN SERVICES</strong><br />
            60 rue François 1er, 75008 Paris<br />
            SIREN : 999 215 627<br />
            Email :{' '}
            <a href="mailto:elsass.serrure@gmail.com" style={{ color: BLEU }}>
              elsass.serrure@gmail.com
            </a>
          </p>
        </Section>

        <Section title="2. Données collectées">
          <p>Dans le cadre de votre utilisation de ce site, nous sommes susceptibles de collecter :</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: INK }}>Données de contact :</strong> nom, numéro de téléphone
              et adresse e-mail, lorsque vous nous contactez par téléphone ou par email.
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: INK }}>Données de navigation :</strong> adresse IP, type de
              navigateur, pages consultées et durée de visite (via les journaux du serveur).
            </li>
            <li>
              <strong style={{ color: INK }}>Données de géolocalisation :</strong> ville et département
              renseignés lors d'une demande d'intervention.
            </li>
          </ul>
          <p style={{ marginTop: 10 }}>
            Nous ne collectons aucune donnée sensible au sens du RGPD (données de santé,
            origine ethnique, convictions religieuses, etc.).
          </p>
        </Section>

        <Section title="3. Finalités du traitement">
          <p>Vos données sont utilisées exclusivement pour :</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li style={{ marginBottom: 6 }}>Répondre à vos demandes d'intervention ou de devis</li>
            <li style={{ marginBottom: 6 }}>Assurer le suivi de la prestation de service</li>
            <li style={{ marginBottom: 6 }}>Établir les documents contractuels et factures</li>
            <li>Améliorer la qualité du site et de nos services</li>
          </ul>
        </Section>

        <Section title="4. Base légale du traitement">
          <p>Les traitements reposent sur :</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: INK }}>L'exécution du contrat</strong> (art. 6.1.b RGPD)
              pour les données liées à votre demande d'intervention.
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: INK }}>L'intérêt légitime</strong> (art. 6.1.f RGPD)
              pour l'amélioration du site et la lutte contre la fraude.
            </li>
            <li>
              <strong style={{ color: INK }}>Les obligations légales</strong> (art. 6.1.c RGPD)
              pour la conservation des données comptables et fiscales.
            </li>
          </ul>
        </Section>

        <Section title="5. Durée de conservation">
          <ul style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: INK }}>Données clients :</strong> conservées 3 ans
              à compter du dernier contact.
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: INK }}>Données de facturation :</strong> 10 ans
              conformément aux obligations comptables légales.
            </li>
            <li>
              <strong style={{ color: INK }}>Données de navigation :</strong> 13 mois maximum.
            </li>
          </ul>
        </Section>

        <Section title="6. Destinataires des données">
          <p>
            Vos données personnelles ne sont ni vendues, ni louées, ni cédées à des tiers.
            Elles peuvent être transmises uniquement aux prestataires techniques strictement
            nécessaires à l'exploitation du site (hébergeur), dans le respect du RGPD.
          </p>
          <p style={{ marginTop: 8 }}>
            Aucun transfert de données hors de l'Union européenne n'est réalisé.
          </p>
        </Section>

        <Section title="7. Vos droits">
          <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li style={{ marginBottom: 6 }}><strong style={{ color: INK }}>Droit d'accès</strong> — obtenir une copie de vos données</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: INK }}>Droit de rectification</strong> — corriger des données inexactes</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: INK }}>Droit à l'effacement</strong> — demander la suppression de vos données</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: INK }}>Droit d'opposition</strong> — vous opposer à un traitement</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: INK }}>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
            <li><strong style={{ color: INK }}>Droit à la limitation</strong> — restreindre temporairement un traitement</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            Pour exercer ces droits, contactez-nous à :{' '}
            <a href="mailto:elsass.serrure@gmail.com" style={{ color: BLEU }}>
              elsass.serrure@gmail.com
            </a>.
            Nous nous engageons à répondre dans un délai d'un mois.
          </p>
          <p style={{ marginTop: 8 }}>
            Vous avez également le droit d'introduire une réclamation auprès de la{' '}
            <strong style={{ color: INK }}>CNIL</strong> (Commission Nationale de l'Informatique
            et des Libertés) — <a href="https://www.cnil.fr" style={{ color: BLEU }} target="_blank" rel="noreferrer">www.cnil.fr</a>.
          </p>
        </Section>

        <Section title="8. Cookies">
          <p>
            Ce site utilise uniquement des cookies techniques strictement nécessaires à son
            fonctionnement (mémorisation des préférences de navigation). Ces cookies ne collectent
            aucune donnée personnelle à des fins publicitaires ou analytiques.
          </p>
          <p style={{ marginTop: 8 }}>
            Aucun cookie tiers n'est déposé sur votre appareil lors de votre visite.
          </p>
        </Section>

        <Section title="9. Sécurité">
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre tout accès non autorisé, perte, destruction ou altération.
            Le site est servi exclusivement en HTTPS.
          </p>
        </Section>

        <p style={{ color: '#C5CAD9', fontSize: 13, marginTop: 48 }}>
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </div>
  )
}
