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

      {/* Heading */}
      <div className="relative z-0 flex-1 flex flex-col justify-start sm:justify-end px-6 md:px-10 pt-5 sm:pt-0">
        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-0 sm:mt-4 md:-mt-5 text-[12.5vw] sm:text-[14vw] md:text-[16vw] lg:text-[17.5vw]"
          >
            Hi, i&apos;m varsan
          </FadeIn>
        </div>

        {/* Tagline + CTA — sits under the name on mobile, pinned to the bottom on desktop */}
        <div className="relative z-20 flex items-end justify-between gap-3 mt-4 sm:mt-0 pb-0 sm:pb-8 md:pb-10">
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

      {/* Portrait — grounded to the bottom, height-capped so the hero stays compact */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 w-[74vw] max-w-[300px] sm:w-[360px] sm:max-w-none md:w-[440px] lg:w-[520px] pointer-events-none"
      >
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <img
            src="subject.png"
            alt="S. Srivarsan"
            className="w-full h-auto max-h-[56vh] sm:max-h-[66vh] object-contain object-bottom mx-auto select-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
