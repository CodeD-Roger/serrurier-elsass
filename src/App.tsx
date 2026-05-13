import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import ReassuranceBar from './components/ReassuranceBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import InterventionZone from './components/InterventionZone'
import Testimonials from './components/Testimonials'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'

type Page = 'home' | 'mentions' | 'confidentialite'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  useEffect(() => {
    const handler = () => setPage('confidentialite')
    window.addEventListener('navigate-confidentialite', handler)
    return () => window.removeEventListener('navigate-confidentialite', handler)
  }, [])

  if (page === 'mentions') {
    return <MentionsLegales onBack={() => setPage('home')} />
  }
  if (page === 'confidentialite') {
    return <Confidentialite onBack={() => setPage('home')} />
  }

  return (
    <>
      <main className="min-h-screen bg-noir">
        <Hero />
        <ReassuranceBar />
        <Services />
        <WhyUs />
        <InterventionZone />
        <Testimonials />
        <CTAFinal />
        <Footer
          onMentions={() => setPage('mentions')}
          onConfidentialite={() => setPage('confidentialite')}
        />
      </main>
      <CookieBanner />
    </>
  )
}
