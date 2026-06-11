import type { ReactNode } from 'react'

const WA =
  'https://wa.me/917695971495?text=Hi%20Srivarsan%2C%20I%20want%20a%20website%20for%20my%20business.'

export function ContactButton({
  label = 'Contact Me',
  href = WA,
  className = '',
}: {
  label?: string
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full font-medium uppercase tracking-widest text-white px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-[1.04] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #1a0e06 4%, #b94e00 34%, #fe7f2d 64%, #ffca3a 100%)',
        boxShadow:
          '0px 4px 4px rgba(254,127,45,0.25), 4px 4px 12px rgba(185,78,0,0.55) inset',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  )
}

export function LiveProjectButton({
  label = 'Live Project',
  href = '#',
  className = '',
}: {
  label?: string
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-mist text-mist font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-mist/10 ${className}`}
    >
      {label}
    </a>
  )
}

export function GhostLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a href={href} className="transition-opacity duration-200 hover:opacity-70">
      {children}
    </a>
  )
}

export { WA }
