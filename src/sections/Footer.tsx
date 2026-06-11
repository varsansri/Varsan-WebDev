import FadeIn from '../components/FadeIn'
import { ContactButton } from '../components/Buttons'

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-ink px-5 sm:px-8 md:px-10 pt-10 pb-12">
      <FadeIn className="relative max-w-6xl mx-auto liquid-glass rounded-[40px] sm:rounded-[50px] md:rounded-[60px] px-6 sm:px-12 py-16 sm:py-24 text-center overflow-hidden">
        <div className="shader-bg opacity-50" />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="text-pumpkin/80 font-bold uppercase tracking-[0.2em] text-xs">
            Let&apos;s work together
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Ready for your <span className="pumpkin-heading">website?</span>
          </h2>
          <p
            className="text-mist/70 font-light uppercase tracking-wide leading-relaxed max-w-md"
            style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)' }}
          >
            WhatsApp me your business name. I&apos;ll reply in 2 hours with a demo
            + a clear price.
          </p>
          <ContactButton label="WhatsApp Me Now" />
        </div>
      </FadeIn>

      <div className="max-w-6xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-mist/50 text-sm uppercase tracking-wider">
        <span>© 2026 S. Srivarsan — Web Designer, Bangalore</span>
        <a
          href="https://wa.me/917695971495"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pumpkin transition-colors"
        >
          +91 76959 71495
        </a>
      </div>
    </footer>
  )
}
