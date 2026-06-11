import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { LiveProjectButton } from '../components/Buttons'

type Project = {
  num: string
  cat: string
  title: string
  url: string
  img1: string
  img2: string
  img3: string
}

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=900&q=80`

const PROJECTS: Project[] = [
  { num: '01', cat: 'Doctor / Clinic', title: 'General Physician', url: 'https://varsansri.github.io/dr-sharma', img1: U('1551076805-e1869033e561'), img2: U('1579684385127-1ef15d508118'), img3: U('1559839734-2b71ea197ec2') },
  { num: '02', cat: 'Dental Clinic', title: 'Dental Care', url: 'https://varsansri.github.io/dr-priya-dental', img1: U('1606811971618-4486d14f3f99'), img2: U('1588776814546-daab30f310ce'), img3: U('1629909613654-28e377c37b09') },
  { num: '03', cat: 'Dermatology', title: 'Skin Clinic', url: 'https://varsansri.github.io/dr-kavya-skin', img1: U('1570172619644-dfd03ed5d881'), img2: U('1540555700478-4be289fbecef'), img3: U('1556228578-8c89e6adf883') },
  { num: '04', cat: 'Mental Health', title: 'Wellness Clinic', url: 'https://varsansri.github.io/mindwell', img1: U('1474631245212-32dc3c8310c6'), img2: U('1573496359142-b8d87734a5a2'), img3: U('1506126613408-eca07ce68773') },
  { num: '05', cat: 'Digital Agency', title: 'Marketing Agency', url: 'https://varsansri.github.io/nexus-agency', img1: U('1497366216548-37526070297c'), img2: U('1522071820081-009f0129c71c'), img3: U('1542744173-8e7e53415bb0') },
  { num: '06', cat: 'Construction', title: 'Construction Co.', url: 'https://varsansri.github.io/buildright', img1: U('1504307651254-35680f356dfd'), img2: U('1503387762-592deb58ef4e'), img3: U('1486325212027-8081e485255e') },
  { num: '07', cat: 'Fashion Brand', title: 'Luxury Fashion', url: 'https://varsansri.github.io/lumiere-fashion', img1: U('1558769132-cb1aea458c5e'), img2: U('1483985988355-763728e1935b'), img3: U('1490481651871-ab68de25d43d') },
  { num: '08', cat: 'Interior Design', title: 'Interior Studio', url: 'https://varsansri.github.io/prism-interiors', img1: U('1618221195710-dd6b41faaea6'), img2: U('1556909114-f6e7ad7d3136'), img3: U('1616594039964-ae9021a400a0') },
]

const TOTAL = PROJECTS.length

function Card({
  p,
  index,
  progress,
}: {
  p: Project
  index: number
  progress: MotionValue<number>
}) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03
  const scale = useTransform(progress, [index / TOTAL, 1], [1, targetScale])

  return (
    <div className="h-[85vh] flex items-start justify-center">
      <motion.div
        style={{ scale, top: `calc(7rem + ${index * 24}px)` }}
        className="sticky w-full max-w-6xl"
      >
        <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-mist/30 bg-ink p-4 sm:p-6 md:p-8 overflow-hidden">
          {/* top row */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-5 md:mb-7">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="font-black leading-none text-pumpkin/20"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
              >
                {p.num}
              </span>
              <div>
                <div className="text-pumpkin font-bold uppercase tracking-[0.18em] text-[0.65rem] sm:text-xs mb-1">
                  {p.cat}
                </div>
                <div
                  className="text-mist font-semibold leading-tight"
                  style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2rem)' }}
                >
                  {p.title}
                </div>
              </div>
            </div>
            <LiveProjectButton href={p.url} label="View Demo" />
          </div>

          {/* image grid */}
          <div className="grid grid-cols-[2fr_3fr] gap-2 sm:gap-3 md:gap-4">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <img
                src={p.img1}
                alt=""
                loading="lazy"
                className="w-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
                style={{ height: 'clamp(110px, 14vw, 200px)' }}
              />
              <img
                src={p.img2}
                alt=""
                loading="lazy"
                className="w-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
                style={{ height: 'clamp(140px, 20vw, 300px)' }}
              />
            </div>
            <img
              src={p.img3}
              alt=""
              loading="lazy"
              className="w-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
              style={{ height: 'clamp(260px, 35vw, 516px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="work"
      ref={ref}
      className="relative z-10 bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pb-[10vh]"
    >
      <div className="text-center pt-20 sm:pt-24 md:pt-28 pb-6">
        <div className="text-pumpkin/70 font-bold uppercase tracking-[0.2em] text-xs mb-3">
          Portfolio
        </div>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Selected Work
        </h2>
        <p className="text-mist/40 mt-3 text-sm uppercase tracking-widest">
          Scroll through all 8 →
        </p>
      </div>

      {PROJECTS.map((p, i) => (
        <Card key={p.num} p={p} index={i} progress={scrollYProgress} />
      ))}
    </section>
  )
}
