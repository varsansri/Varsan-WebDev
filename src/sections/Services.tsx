import FadeIn from '../components/FadeIn'

const SERVICES: [string, string, string, string][] = [
  ['01', 'Business Website', 'Full site with home, about, services, gallery and contact. Mobile-first and built to convert visitors into customers.', 'From ₹13,000'],
  ['02', 'Doctor / Clinic', 'Appointment booking, services, gallery and Google Maps — designed to bring in more patient enquiries.', 'From ₹13,000'],
  ['03', 'Landing Page', 'One focused, high-impact page engineered for maximum WhatsApp leads.', 'From ₹7,000'],
  ['04', 'Redesign', 'Old site holding you back? Rebuilt modern, fast and mobile-first.', 'From ₹10,000'],
  ['05', 'E-Commerce', 'Sell products online with smooth payments, orders and inventory.', 'From ₹20,000'],
  ['06', 'Maintenance', 'Monthly updates, new pages and ongoing support so your site stays sharp.', '₹2,000/mo'],
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 bg-cream text-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0d1b24' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map(([num, name, desc, price], i) => (
          <FadeIn
            key={num}
            delay={i * 0.1}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(13,27,36,0.15)' }}
          >
            <span
              className="font-black leading-none shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)', color: '#0d1b24' }}
            >
              {num}
            </span>
            <div className="pt-2 md:pt-4">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {name}
                </h3>
                <span
                  className="font-semibold text-pumpkin"
                  style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.15rem)' }}
                >
                  {price}
                </span>
              </div>
              <p
                className="font-light leading-relaxed max-w-2xl mt-2"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
