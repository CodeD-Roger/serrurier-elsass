import { useState } from 'react'

interface Prestation {
  id: string
  n: string
  cat: string
  title: string
  desc: string
  delai: string
  prix: string
}

const PRESTATIONS: Prestation[] = [
  {
    id: "ouverture",
    n: "01",
    cat: "Urgence",
    title: "Ouverture de porte claquée",
    desc: "Intervention sans dégradation. Porte ouverte en moins de 15 minutes par un compagnon serrurier.",
    delai: "≤ 15 min",
    prix: "à partir de 89 €",
  },
  {
    id: "changement",
    n: "02",
    cat: "Installation",
    title: "Changement de serrure",
    desc: "Remplacement à l'identique ou montée en gamme. Cylindre haute sécurité A2P sur demande.",
    delai: "1 h",
    prix: "à partir de 140 €",
  },
  {
    id: "blindage",
    n: "03",
    cat: "Premium",
    title: "Blindage de porte",
    desc: "Panneau blindé A2P*** posé sur dormant renforcé. Protection optimale contre l'effraction.",
    delai: "1/2 journée",
    prix: "sur devis",
  },
  {
    id: "depannage",
    n: "04",
    cat: "24h/24",
    title: "Dépannage d'urgence",
    desc: "Disponible nuits, week-ends et jours fériés. Technicien sur place en 20 à 30 minutes.",
    delai: "20–30 min",
    prix: "à partir de 110 €",
  },
  {
    id: "multipoints",
    n: "05",
    cat: "Installation",
    title: "Serrure multipoints",
    desc: "Pose de serrures 3 ou 5 points. Marques agréées Fichet, Mul-T-Lock, Vachette, Picard.",
    delai: "2 h",
    prix: "à partir de 380 €",
  },
  {
    id: "effraction",
    n: "06",
    cat: "Urgence",
    title: "Sécurisation après effraction",
    desc: "Intervention d'urgence après cambriolage. Remise en état et renforcement anti-récidive.",
    delai: "≤ 30 min",
    prix: "sur devis",
  },
]

const PHONE = "03 74 47 52 51"

function catColor(cat: string) {
  return cat === "Urgence" ? "var(--rouge)"
       : cat === "Premium" ? "var(--brass)"
       : cat === "24h/24" ? "var(--rouge)"
       : "var(--brass)"
}

function catTone(cat: string) {
  return cat === "Urgence" ? { a: "#3a1b1b", b: "#200f0f", accent: "#DC2626", text: "#f87171" }
       : cat === "Premium" ? { a: "#1a2540", b: "#0f1728", accent: "#1E40AF", text: "#60a5fa" }
       : cat === "24h/24" ? { a: "#3a1b1b", b: "#200f0f", accent: "#DC2626", text: "#f87171" }
       :                    { a: "#1a2540", b: "#0f1728", accent: "#1E40AF", text: "#60a5fa" }
}

function Preview({ item }: { item: Prestation }) {
  const tone = catTone(item.cat)
  return (
    <div style={{ position: "sticky", top: 32, alignSelf: "start" }}>
      <div style={{
        position: "relative",
        width: "100%",
        paddingTop: "118%",
        background: `linear-gradient(135deg, ${tone.a}, ${tone.b})`,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            `repeating-linear-gradient(90deg, transparent 0 13px, rgba(255,255,255,.025) 13px 14px),
             radial-gradient(circle at 70% 28%, ${tone.accent}33, transparent 55%)`,
        }} />
        <div className="label" style={{
          position: "absolute", top: 18, left: 18,
          color: tone.text,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: tone.text }} />
          {item.cat}
        </div>
        <div style={{
          position: "absolute", bottom: 24, left: 22, right: 22,
          color: "rgba(255,255,255,.94)",
          fontFamily: "var(--serif)",
          fontWeight: 500,
          fontSize: 38,
          lineHeight: 1.05,
          letterSpacing: "-.005em",
        }}>
          {item.title}
        </div>
        <div className="label" style={{
          position: "absolute", top: 18, right: 18,
          fontSize: 10,
          color: "rgba(255,255,255,.4)",
        }}>
          {item.n} / 06 · img·plchldr
        </div>
      </div>

      <div style={{
        background: "#13151a",
        color: "var(--paper)",
        padding: "26px 24px",
      }}>
        <div className="label" style={{ color: "var(--brass-2)", marginBottom: 18 }}>
          Fiche technique
        </div>

        <div className="label" style={{ fontSize: 10, color: "#6a6d76", marginBottom: 6 }}>
          Tarif
        </div>
        <div style={{
          fontFamily: "var(--serif)",
          fontWeight: 500,
          fontSize: 32,
          lineHeight: 1.05,
          marginBottom: 18,
        }}>
          {item.prix}
        </div>

        <div style={{ paddingTop: 16, borderTop: "1px solid #2a2d36" }}>
          <div className="label" style={{ fontSize: 10, color: "#6a6d76", marginBottom: 8 }}>Garanties</div>
          <div style={{ fontSize: 13, lineHeight: 1.55, color: "#a8a89e" }}>
            Devis offert · Pièces garanties 2 ans · Compagnon serrurier certifié A2P
          </div>
        </div>

        <a href={"tel:" + PHONE.replace(/\s/g, "")} style={{
          marginTop: 22,
          width: "100%",
          background: "var(--brass)",
          color: "var(--ink)",
          border: "none",
          padding: "16px 18px",
          fontFamily: "var(--sans)",
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: ".06em",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          textDecoration: "none",
          boxSizing: "border-box",
        }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Appeler
          </span>
          <span style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 14, letterSpacing: ".04em" }}>
            {PHONE}
          </span>
        </a>
      </div>
    </div>
  )
}

function Row({ item, active, onEnter }: { item: Prestation; active: boolean; onEnter: () => void }) {
  const color = catColor(item.cat)
  return (
    <div
      onMouseEnter={onEnter}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "70px 1fr 140px 50px",
        gap: 28,
        alignItems: "center",
        padding: "26px 0 26px 16px",
        borderBottom: "1px solid #d9cfb6",
        cursor: "pointer",
        background: active ? "rgba(163,126,58,.06)" : "transparent",
        transition: "background .2s ease, padding-left .25s ease",
        paddingLeft: active ? 28 : 16,
      }}
    >
      <span style={{
        position: "absolute",
        left: 0, top: "50%",
        width: 4, height: active ? 48 : 0,
        background: "var(--brass)",
        transform: "translateY(-50%)",
        transition: "height .25s ease",
      }} />

      <span style={{
        fontFamily: "var(--serif)",
        fontWeight: 500,
        fontSize: 48,
        lineHeight: 1,
        color: active ? "var(--brass)" : "var(--ink-3)",
        transition: "color .25s ease",
      }}>{item.n}</span>

      <div>
        <div className="label" style={{
          color,
          marginBottom: 6,
          fontSize: 10,
          display: "inline-flex", alignItems: "center", gap: 7,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: color }} />
          {item.cat}
        </div>
        <div style={{
          fontFamily: "var(--serif)",
          fontWeight: 500,
          fontSize: 32,
          lineHeight: 1.1,
          letterSpacing: "-.005em",
          color: "var(--ink)",
        }}>{item.title}</div>
        <div style={{
          maxHeight: active ? 80 : 0,
          opacity: active ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .3s ease, opacity .25s ease, margin-top .25s ease",
          marginTop: active ? 10 : 0,
          fontSize: 14, lineHeight: 1.55, color: "var(--ink-3)",
          maxWidth: 560,
        }}>
          {item.desc}
        </div>
      </div>

      <div style={{
        fontFamily: "var(--sans)",
        fontSize: 12.5,
        fontWeight: 500,
        color: "var(--ink-2)",
        textAlign: "right",
      }}>
        <div>{item.delai}</div>
        <div style={{ color: "var(--ink-3)", marginTop: 3, fontWeight: 400 }}>{item.prix}</div>
      </div>

      <span style={{
        justifySelf: "end",
        width: 38, height: 38,
        borderRadius: "50%",
        border: "1px solid " + (active ? "var(--ink)" : "#ccc1a6"),
        background: active ? "var(--ink)" : "transparent",
        color: active ? "var(--paper)" : "var(--ink-3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all .25s ease",
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M3 9 L9 3 M5 3 H9 V7" />
        </svg>
      </span>
    </div>
  )
}

export default function Services() {
  const [activeId, setActiveId] = useState(PRESTATIONS[0].id)
  const active = PRESTATIONS.find(p => p.id === activeId) || PRESTATIONS[0]

  return (
    <section id="services" style={{
      width: "100%",
      background: "#f4efe6",
      padding: "80px 6vw 96px",
      fontFamily: "var(--sans)",
      color: "var(--ink)",
      position: "relative",
      overflow: "hidden",
    }}>
      <h2 style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(56px, 9vw, 132px)",
        lineHeight: .94,
        letterSpacing: "-.015em",
        fontWeight: 500,
        margin: "0 0 54px",
      }}>
        Nos <em style={{ fontStyle: "italic", color: "var(--brass)", fontWeight: 400 }}>prestations</em>,<br/>
        à la lettre.
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(380px, 460px) 1fr",
        gap: 56,
      }}>
        <Preview item={active} />

        <div>
          <div className="label" style={{
            display: "grid",
            gridTemplateColumns: "70px 1fr 140px 50px",
            gap: 28,
            paddingBottom: 14,
            borderBottom: "1px solid #d9cfb6",
            color: "var(--ink-3)",
            fontSize: 10,
            paddingLeft: 16,
          }}>
            <span>N°</span>
            <span>Prestation</span>
            <span style={{ textAlign: "right" }}>Délai · Tarif</span>
            <span>&nbsp;</span>
          </div>

          {PRESTATIONS.map(item => (
            <Row
              key={item.id}
              item={item}
              active={item.id === activeId}
              onEnter={() => setActiveId(item.id)}
            />
          ))}

          <div style={{
            marginTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}>
            <span className="label" style={{ color: "var(--ink-3)" }}>
              Une prestation hors index ?
            </span>
            <a href={"tel:" + PHONE.replace(/\s/g, "")} style={{
              color: "var(--ink)",
              textDecoration: "none",
              borderBottom: "1px solid var(--brass)",
              paddingBottom: 4,
              fontWeight: 500,
              fontSize: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}>
              Appelez-nous · {PHONE}
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M0 4.5 H12 M9 1 L12.5 4.5 L9 8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
