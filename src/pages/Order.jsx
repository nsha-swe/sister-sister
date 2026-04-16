import { useId, useState } from "react"
import ScrollReveal from "../components/ScrollReveal"

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSc6VVOm6sh4oucZ6pxoBm0njZaWXyGcDDLii5ZV9hz0apyn3w/viewform?embedded=true"

export default function Order() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="page-order">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <ScrollReveal>
            <h1 className="page-hero__title">Let&apos;s Make Something Beautiful</h1>
            <p className="page-hero__lede">
              We&apos;d love to hear about your vision. Fill out the form below and we&apos;ll be in touch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section order-form-section">
        <div className="section__inner section__inner--narrow">
          <ScrollReveal>
            <div className="form-embed">
              <iframe
                title="Sister Sister order inquiry form"
                src={FORM_SRC}
                width="100%"
                height="1400"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading form…
              </iframe>
            </div>
            <p className="order-notes">
              Questions? Email us at{" "}
              <a href="mailto:j_nazreen04@yahoo.com">j_nazreen04@yahoo.com</a>
            </p>
            <p className="order-notes order-notes--muted">
              Delivery includes a $20 base fee + $1 per mile.
            </p>
          </ScrollReveal>

          <ScrollReveal className="accordion-block">
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={open}
              aria-controls={panelId}
              id={`${panelId}-label`}
              onClick={() => setOpen((v) => !v)}
            >
              Cancellation policy
              <span className="accordion__icon" aria-hidden="true">
                {open ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={`${panelId}-label`}
              className={`accordion__panel ${open ? "is-open" : ""}`}
              aria-hidden={!open}
            >
              <p>
                We understand that plans change. Please note that cancellations made less than 72 hours before your
                event may be subject to a partial or full charge depending on the stage of preparation. We
                appreciate your understanding and will always do our best to work with you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
