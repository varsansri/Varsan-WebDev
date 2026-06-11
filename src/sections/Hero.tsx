import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import { ContactButton, GhostLink, WA } from '../components/Buttons'

const NAV = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Work', '#work'],
  ['Contact', '#contact'],
]

export default function Hero() {
  return (
    <section
      className="relative flex h-screen min-h-[600px] flex-col overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      <div className="shader-bg" />

      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between gap-3 px-6 md:px-10 pt-6 md:pt-8"
      >
        <span className="text-mist font-extrabold uppercase tracking-wider text-lg md:text-2xl shrink-0">
          Varsan<span className="text-pumpkin">.</span>
        </span>
        {/* full links on tablet+ */}
        <div className="hidden sm:flex gap-6 md:gap-10 text-mist font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          {NAV.map(([label, href]) => (
            <GhostLink key={label} href={href}>
              {label}
            </GhostLink>
          ))}
        </div>
        {/* compact CTA on phones */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden shrink-0 rounded-full border border-pumpkin text-pumpkin uppercase tracking-wider text-[0.7rem] font-medium px-4 py-1.5"
        >
          Enquire
        </a>
      </FadeIn>

      {/* Portrait — centered focal point */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 min-h-0">
        <FadeIn
          delay={0.4}
          y={30}
          className="w-[68vw] max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px]"
        >
          <Magnet padding={150} strength={3}>
            <img
              src="subject.png"
              alt="S. Srivarsan"
              className="w-full h-auto max-h-[52vh] object-contain mx-auto select-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom block — name, tagline, CTA */}
      <div className="relative z-20 shrink-0 px-6 md:px-10 pb-7 sm:pb-9 md:pb-12">
        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12.5vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]"
          >
            Hi, i&apos;m varsan
          </FadeIn>
        </div>

        <div className="flex items-end justify-between gap-3 mt-3 sm:mt-4">
          <FadeIn
            as="p"
            delay={0.35}
            y={20}
            className="text-mist font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a web designer crafting fast, unforgettable sites for businesses in
            bangalore
          </FadeIn>
          <FadeIn delay={0.5} y={20} className="shrink-0">
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
