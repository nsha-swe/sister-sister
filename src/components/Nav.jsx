import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import HomeIcon from "./icons/HomeIcon.jsx"

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header className="site-nav">
        <nav className="site-nav__inner" aria-label="Main navigation">
          <div className="site-nav__start">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link nav-link--home ${isActive ? "is-active" : ""}`}
              end
              aria-label="Home"
              onClick={close}
            >
              <HomeIcon className="nav-link__home-icon" />
            </NavLink>
          </div>

          <div className="site-nav__center">
            <NavLink to="/" className="site-nav__brand" onClick={close} end aria-label="Sister Sister — Home">
              <span className="site-nav__wordmark">Sister Sister</span>
            </NavLink>
          </div>

          <div className="site-nav__end">
            <div className="site-nav__links">
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}>
                About
              </NavLink>
              <NavLink to="/order" className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}>
                Order
              </NavLink>
              <NavLink to="/inquire" className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}>
                Email Us
              </NavLink>
            </div>

            <button
              type="button"
              className="site-nav__toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className={`site-nav__burger ${open ? "is-open" : ""}`} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <div id="mobile-menu" className={`site-nav__overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="site-nav__overlay-inner" aria-label="Mobile">
          <NavLink to="/" className="site-nav__overlay-link" onClick={close} end>
            Home
          </NavLink>
          <NavLink to="/about" className="site-nav__overlay-link" onClick={close}>
            About
          </NavLink>
          <NavLink to="/order" className="site-nav__overlay-link" onClick={close}>
            Order
          </NavLink>
          <NavLink to="/inquire" className="site-nav__overlay-link" onClick={close}>
            Contact us
          </NavLink>
        </nav>
      </div>
    </>
  )
}
