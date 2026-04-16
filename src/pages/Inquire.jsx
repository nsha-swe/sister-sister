import ScrollReveal from "../components/ScrollReveal"

const MAIL_TO = "j_nazreen04@yahoo.com"

export default function Inquire() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const name = (formData.get("name") || "").toString().trim()
    const email = (formData.get("email") || "").toString().trim()
    const topicValue = (formData.get("topic") || "").toString()
    const message = (formData.get("message") || "").toString().trim()

    const topicLabelMap = {
      flavors: "flavors & menu",
      timeline: "timing & availability",
      dietary: "dietary options",
      collab: "a collaboration or event",
      other: "something else",
    }

    const topicLabel = topicLabelMap[topicValue] || "a question"

    const subject = `${name ? `${name} — ` : ""}Inquiry about ${topicLabel}`

    const lines = [
      "Hi Nahreen & Nazreen,",
      "",
      `I hope you're both doing well! I wanted to reach out about ${topicLabel}.`,
      "",
      message,
      "",
      email ? `You can reach me back at: ${email}` : "",
      "",
      "Best,",
      name || "",
    ].filter(Boolean)

    const body = lines.join("\n")

    const mailto = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div className="page-inquire">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <ScrollReveal>
            <h1 className="page-hero__title">Have a question before you order?</h1>
            <p className="page-hero__lede">
              Share what you&apos;re dreaming up — flavors, timing, ideas — and we&apos;ll respond with the same care
              we put into every dessert.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section inquire-section">
        <div className="section__inner section__inner--narrow">
          <ScrollReveal>
            <form className="inquire-form" onSubmit={handleSubmit}>
              <div className="inquire-form__grid">
                <label className="inquire-field">
                  <span className="inquire-field__label">Name</span>
                  <input type="text" name="name" required placeholder="Your name" />
                </label>

                <label className="inquire-field">
                  <span className="inquire-field__label">Email</span>
                  <input type="email" name="email" required placeholder="you@example.com" />
                </label>

                <label className="inquire-field">
                  <span className="inquire-field__label">What brings you here?</span>
                  <select name="topic" defaultValue="">
                    <option value="" disabled>
                      Choose a topic
                    </option>
                    <option value="flavors">Flavors &amp; menu</option>
                    <option value="timeline">Timing &amp; availability</option>
                    <option value="dietary">Dietary questions</option>
                    <option value="collab">Collaboration or event</option>
                    <option value="other">Something else</option>
                  </select>
                </label>

                <label className="inquire-field inquire-field--full">
                  <span className="inquire-field__label">Your note</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us as much or as little as you like — we&apos;ll take it from there."
                  />
                </label>
              </div>

              <button type="submit" className="btn btn--primary inquire-form__submit">
                Send message
              </button>
              <p className="inquire-form__hint">
                Clicking the button will open your email app. Just hit send and we'll get back to you as soon as possible!
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}