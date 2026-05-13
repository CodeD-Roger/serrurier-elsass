import Hero from './components/Hero'
import ReassuranceBar from './components/ReassuranceBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import InterventionZone from './components/InterventionZone'
import Testimonials from './components/Testimonials'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen bg-noir">
      <Hero />
      <ReassuranceBar />
      <Services />
      <WhyUs />
      <InterventionZone />
      <Testimonials />
      <CTAFinal />
      <Footer />
    </main>
  )
}
