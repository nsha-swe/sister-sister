const TEXT =
  "Handcrafted · Fusion-Forward · Made with Love · Small Batch · Bangladeshi Soul · American Sweetness · "

export default function Marquee() {
  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        <p className="marquee__text">{TEXT}</p>
        <p className="marquee__text" aria-hidden="true">
          {TEXT}
        </p>
      </div>
    </div>
  )
}
