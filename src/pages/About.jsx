import ScrollReveal from "../components/ScrollReveal"
import GrainOverlay from "../components/GrainOverlay"
import { Link } from "react-router-dom"

const ABOUT_HERO_VIDEO = "/about-hero.mp4"
const BRAND_PHOTO = "/about-pic.png"

const VALUES = [
  {
    n: "1",
    title: "Rooted",
    text: "Every flavor honors where we come from.",
  },
  {
    n: "2",
    title: "Reimagined",
    text: "We find the unexpected joy in fusion.",
  },
  {
    n: "3",
    title: "Made with love",
    text: "Every order is personal. Every bite is intentional.",
  },
]

export default function About() {
  return (
    <div className="page-about">
      <section className="about-hero">
        <div className="about-hero__bg" aria-hidden="true">
          <video
            className="about-hero__video"
            src={ABOUT_HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="about-hero__scrim" />
          <div className="about-hero__vignette" />
          {/* REMOVED FADE TO FIX LINE ISSUE */}
        </div>
        <GrainOverlay />
        <div className="about-hero__inner">
          <ScrollReveal>
            <h1 className="about-hero__title">We are Sister Sister.</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section about-story">
        <div className="about-story__inner">
          <ScrollReveal className="about-story__copy" delay={0.06}>
            <div className="about-story__media">
              <div className="about-story__circle">
                <div className="about-story__circle-media">
                  <img src={BRAND_PHOTO} alt="Sister Sister — brand illustration" width={640} height={640} />
                </div>
              </div>
            </div>
            <div className="about-story__text">
              <h2 className="about-story__heading">Our story</h2>
              <p>
                Sister Sister was born within two worlds: the fragrant kitchens of a Bangladeshi home, and the
                sweet indulgence of American baking. 
                <br />
                We&apos;re two sisters who grew up watching our mother roll
                dough and strain <em>cha</em>, and simultaneously fell in love with rich chocolate ganache and the beautifully nuanced flavors of Biscoff. 
                <br />
                Our desserts carry both — the warmth of home, the joy of now.
                <br />
              </p>

              <p
                className="about-story__signature"
                style={{
                  marginTop: "2.5rem",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                With love,
                <br />
                <span style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                  Nahreen &amp; Nazreen
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section values">
        <div className="section__inner">
          <div className="values__grid">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} className="value-card" delay={i * 0.06}>
                <span className="value-card__num">{v.n}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="section__inner section__inner--narrow">
          <ScrollReveal>
            <Link to="/order" className="about-cta__card" aria-label="Go to order page">
              <p className="about-cta__eyebrow">Ready when you are.</p> 
              <br />
              <p className="about-cta__title">Let&apos;s talk through your order.</p>
              <p className="about-cta__copy">
                We'd love to get to know you as well as you've gotten know us. 
                <br />
                Tell us about your dessert dreams — we'll help shape it into something that feels like you (and
                tastes like home).
              </p>
              <span className="about-cta__action">Start an inquiry</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}