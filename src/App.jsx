import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageShell from "./components/PageShell"
import Home from "./pages/Home"
import Order from "./pages/Order"
import About from "./pages/About"
import Inquire from "./pages/Inquire"

export default function App() {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquire" element={<Inquire />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  )
}
