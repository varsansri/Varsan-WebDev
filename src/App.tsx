import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

export default function App() {
  return (
    <main style={{ overflowX: 'clip' }}>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Footer />
    </main>
  )
}
