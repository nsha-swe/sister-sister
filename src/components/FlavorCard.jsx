export default function FlavorCard({ name, description, toneClass, imageSrc, imageAlt }) {
  return (
    <article className={`flavor-card ${toneClass}`}>
      <div className="flavor-card__visual">
        <img src={imageSrc} alt={imageAlt} width={240} height={240} loading="lazy" decoding="async" />
      </div>
      <h3 className="flavor-card__title">{name}</h3>
      <p className="flavor-card__desc">{description}</p>
      <span className="flavor-card__accent" aria-hidden="true" />
    </article>
  )
}
