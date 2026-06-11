import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { ContactButton } from '../components/Buttons'

const FIG =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/'

const CORNERS = [
  {
    src: FIG + 'moon_icon.11395d36.png',
    cls: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    x: -80,
    delay: 0.1,
  },
  {
    src: FIG + 'p59_1.4659672e.png',
    cls: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    x: -80,
    delay: 0.25,
  },
  {
    src: FIG + 'lego_icon-1.703bb594.png',
    cls: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    x: 80,
    delay: 0.15,
  },
  {
    src: FIG + 'Group_134-1.2e04f3ce.png',
    cls: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    x: 80,
    delay: 0.3,
  },
]

const BIO =
  'I build mobile-first, fast-loading websites that turn visitors into customers within 7 days. From doctors wanting more patient enquiries to brands that need to look premium online, I craft sites that help businesses in Bangalore grow. Let us build something unforgettable together!'

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-ink overflow-hidden"
    >
      {CORNERS.map((c, i) => (
        <FadeIn
          key={i}
          delay={c.delay}
          duration={0.9}
          x={c.x}
          y={0}
          className={`absolute z-0 pointer-events-none ${c.cls}`}
        >
          <img src={c.src} alt="" className="w-full h-auto select-none" draggable={false} />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={BIO}
            className="text-mist font-medium leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
