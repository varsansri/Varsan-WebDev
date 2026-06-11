import { useEffect, useRef, useState } from 'react'

const BASE = 'https://motionsites.ai/assets/'
const GIFS = [
  'hero-space-voyage-preview-eECLH3Yc.gif',
  'hero-codenest-preview-Cgppc2qV.gif',
  'hero-vex-ventures-preview-BczMFIiw.gif',
  'hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'hero-asme-preview-B_nGDnTP.gif',
  'hero-transform-data-preview-Cx5OU29N.gif',
  'hero-vitara-preview-Cjz2QYyU.gif',
  'hero-terra-preview-BFjrCr7T.gif',
  'hero-skyelite-preview-DHaZIgUv.gif',
  'hero-aethera-preview-DknSlcTa.gif',
  'hero-designpro-preview-D8c5_een.gif',
  'hero-stellar-ai-preview-D3HL6bw1.gif',
  'hero-xportfolio-preview-D4A8maiC.gif',
  'hero-orbit-web3-preview-BXt4OttD.gif',
  'hero-nexora-preview-cx5HmUgo.gif',
  'hero-evr-ventures-preview-DZxeVFEX.gif',
  'hero-planet-orbit-preview-DWAP8Z1P.gif',
  'hero-new-era-preview-CocuDUm9.gif',
  'hero-wealth-preview-B70idl_u.gif',
  'hero-luminex-preview-CxOP7ce6.gif',
  'hero-celestia-preview-0yO3jXO8.gif',
].map((g) => BASE + g)

const ROW1 = GIFS.slice(0, 11)
const ROW2 = GIFS.slice(11)

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="rounded-2xl object-cover shrink-0"
      style={{ width: 420, height: 270 }}
    />
  )
}

export default function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY
      setOffset((window.scrollY - top + window.innerHeight) * 0.3)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-ink pt-6 sm:pt-10 md:pt-12 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {[...ROW1, ...ROW1, ...ROW1].map((src, i) => (
            <Tile key={i} src={src} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {[...ROW2, ...ROW2, ...ROW2].map((src, i) => (
            <Tile key={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  )
}
