import { Link } from "react-router-dom"
import GrainOverlay from "../components/GrainOverlay"
import HeroHeadline from "../components/HeroHeadline"
import Marquee from "../components/Marquee"
import FlavorCard from "../components/FlavorCard"
import ScrollReveal from "../components/ScrollReveal"

const FLAVORS = [
  {
    name: "The Lychee Affair",
    description: "Bright lychee and whisper-soft cream — a love letter in three layers.",
    toneClass: "flavor-card--a",
    imageSrc: "/flavors/lychee.png",
  },
  {
    name: "Rose & Fig Milk Cake",
    description: "Petals and jammy fig folded into cloud-light sponge — nostalgia, refined.",
    toneClass: "flavor-card--b",
    imageSrc: "/flavors/figs.png",
  },
  {
    name: "Biscoff Gajor Halwa Layers",
    description: "Carrot halwa meets cookie butter crunch — two traditions in one slice.",
    toneClass: "flavor-card--c",
    imageSrc: "/flavors/carrots.png",
  },
  {
    name: "S'mores Cha Brownie",
    description: "Smoky marshmallow, dark chocolate, and chai-spiced warmth by the firelight.",
    toneClass: "flavor-card--d",
    imageSrc: "/flavors/chai-spice.png",
  },
  {
    name: "Triple Chocolate Cardamom Cake",
    description: "Deep cocoa ribbons laced with cardamom — bold, balanced, unforgettable.",
    toneClass: "flavor-card--e",
    imageSrc: "/flavors/choc-cardamom.png",
  },
]

const IG = "https://www.instagram.com/sister.sister.co"

const HERO_PHOTOS = [
  { src: "/sisters-1.png", alt: "Sister Sister — moment one" },
  { src: "/sisters-2.png", alt: "Sister Sister — moment two" },
  { src: "/sisters-3.png", alt: "Sister Sister — moment three" },
  { src: "/sisters-4.png", alt: "Sister Sister — moment four" },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <GrainOverlay />
        <div className="hero__content">
          <div className="hero__text">
            <HeroHeadline />
            <p className="hero__subtitle">A Fusion of Bangladeshi Soul &amp; American Sweetness</p>
            <Link to="/order" className="btn btn--primary">
              Order Now
            </Link>
          </div>
          <div className="hero__gallery" role="list" aria-label="Sister Sister photography">
            {HERO_PHOTOS.map((photo, index) => (
              <figure key={photo.src} className="hero__figure" role="listitem">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={533}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section flavors">
        <div className="section__inner">
          <ScrollReveal as="header" className="section__header">
            <h2 className="section__title">This Season&apos;s Flavors</h2>
          </ScrollReveal>
          <div className="flavors__grid">
            {FLAVORS.map((f) => (
              <ScrollReveal key={f.name} className="flavors__cell">
                <FlavorCard
                  name={f.name}
                  description={f.description}
                  toneClass={f.toneClass}
                  imageSrc={f.imageSrc}
                  imageAlt={f.name}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-split">
        <div className="story-split__inner">
          <ScrollReveal className="story-split__quote-wrap" slide="left">
            <blockquote className="story-split__quote">
              Two sisters. One kitchen. Two worlds.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal className="story-split__body-wrap" delay={0.08} slide="right">
            <div className="story-split__body">
              <p>
                We braid cardamom into buttercream and let American classics borrow our spices. Nothing here is
                accidental — every bake is a conversation between where we&apos;re from and where we stand now.
              </p>
              <p>
                Small batches. Honest ingredients. The loving highs and quiet lows of family folded into every crumb. This is dessert with a point of
                view — warm, intentional, and unapologetically ours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pull in Instagram posts later */}
      <section className="section insta">
        <div className="section__inner">
          <ScrollReveal>
            <a href={IG} target="_blank" rel="noopener noreferrer" className="insta__icon-link" aria-label="Open Sister Sister Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle cx="17.2" cy="6.8" r="1.1" />
              </svg>
            </a>
            {/* <div className="insta__grid" aria-hidden="true">
              <div className="insta__tile insta__tile--1" />
              <div className="insta__tile insta__tile--2" />
              <div className="insta__tile insta__tile--3" />
              <div className="insta__tile insta__tile--4" />
            </div> */}
            <p className="insta__caption">
              Follow the Sweetness{" "} <br />
              <a href={IG} target="_blank" rel="noopener noreferrer">
                @sister.sister.co
              </a>
              <br />
              <br />
              ♡
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
