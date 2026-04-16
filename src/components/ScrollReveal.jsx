import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal({ children, className = "", as = "div", delay = 0, slide }) {
  const ref = useRef(null)
  const Component = as

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const from =
      slide === "left"
        ? { opacity: 0, x: -48 }
        : slide === "right"
          ? { opacity: 0, x: 48 }
          : { opacity: 0, y: 20 }

    const to =
      slide === "left" || slide === "right"
        ? { opacity: 1, x: 0, duration: 0.95, delay, ease: "power3.out" }
        : { opacity: 1, y: 0, duration: 0.95, delay, ease: "power3.out" }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      })
    }, el)

    return () => ctx.revert()
  }, [delay, slide])

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  )
}
