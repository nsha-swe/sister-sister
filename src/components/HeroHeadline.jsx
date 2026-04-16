import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const WORDS = ["Rooted.", "Reimagined.", "Sweet."]

export default function HeroHeadline() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const spans = gsap.utils.toArray(".hero-headline__word")
      gsap.fromTo(
        spans,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.18,
          ease: "power3.out",
          delay: 0.15,
        }
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <h1 ref={root} className="hero-headline">
      {WORDS.map((w) => (
        <span key={w} className="hero-headline__word">
          {w}{" "}
        </span>
      ))}
    </h1>
  )
}
