import { useEffect, useRef } from 'react'

// Liquid-metal text effect (inspired by paper-design/liquid-logo) using an
// animated SVG turbulence + displacement filter. No external deps.
export default function LiquidName({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const turbRef = useRef<SVGFETurbulenceElement>(null)

  useEffect(() => {
    let raf = 0
    let t = 0
    const animate = () => {
      t += 0.0016
      const bf = 0.008 + Math.sin(t) * 0.004
      turbRef.current?.setAttribute('baseFrequency', `${bf} ${bf * 1.6}`)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <span className={`relative inline-block ${className}`} style={{ filter: 'url(#liquid)' }}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="liquid">
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.008 0.013"
              numOctaves={2}
              seed={7}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      {text}
    </span>
  )
}
