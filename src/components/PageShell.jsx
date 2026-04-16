import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"

export default function PageShell({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="page-shell page-enter">
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
