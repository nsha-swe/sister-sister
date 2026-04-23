import { Link } from "react-router-dom"

const LOGO_SRC = "/ss-logo.png"
const IG = "https://www.instagram.com/sister.sister.co"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <img src={LOGO_SRC} alt="" width={48} height={48} className="site-footer__logo" loading="lazy" />
          <p className="site-footer__tagline">
            A fusion of Bangladeshi soul &amp; American sweetness — rooted. reimagined. sweet.
          </p>
        </div>
        <div className="site-footer__links">
          <p className="site-footer__label">Explore</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/inquire">General Inquiries</Link>
            </li>
          </ul>
        </div>
        <div className="site-footer__social">
          <p className="site-footer__label">Follow us</p>
          <a href={IG} target="_blank" rel="noopener noreferrer" className="site-footer__ig">
            @sister.sister.co
          </a>
        </div>
      </div>
      <p className="site-footer__copy">© 2026 Sister Sister. All rights reserved.</p>
    </footer>
  )
}
