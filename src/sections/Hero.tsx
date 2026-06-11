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
      className="relative flex h-screen flex-col"
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
      <div className="relative z-0 flex-1 flex flex-col justify-end px-6 md:px-10">
        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-6 sm:mt-4 md:-mt-5 text-[12.5vw] sm:text-[14vw] md:text-[16vw] lg:text-[17.5vw]"
          >
            Hi, i&apos;m varsan
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="relative z-20 flex items-end justify-between pb-7 sm:pb-8 md:pb-10">
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

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] pointer-events-none"
      >
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <img
            src="subject.png"
            alt="S. Srivarsan"
            className="w-full h-auto select-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
