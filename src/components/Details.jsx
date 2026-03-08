export default function Details() {
  return (
    <section className="section details-section" id="details">
      <h2 className="details-heading">Wedding Venue</h2>

      <div className="card venue-card">
        <div className="venue-icon" aria-hidden="true">
          {"\u26EA"}
        </div>

        <p className="venue-eyebrow">Ceremony Location</p>
        <h3 className="venue-title">PROVE JESUS ALIVE MINISTRY</h3>

        <p className="venue-location">Adjacent Ebenezer School, Taifa, Accra, Ghana</p>

        <div className="venue-meta-grid">
          <div className="venue-meta-item">
            <span className="venue-meta-label">Date</span>
            <span className="venue-meta-value">Saturday, 28 March 2026</span>
          </div>
          <div className="venue-meta-item">
            <span className="venue-meta-label">Time</span>
            <span className="venue-meta-value">11:00 AM</span>
          </div>
          <div className="venue-meta-item">
            <span className="venue-meta-label">Occasion</span>
            <span className="venue-meta-value">Holy Matrimony Service</span>
          </div>
        </div>

        <a
          className="btn btn-outline venue-btn"
          href="https://www.google.com/maps/search/?api=1&query=Prove+Jesus+Alive+Ministry+Adjacent+Ebenezer+School+Taifa+Accra+Ghana"
          target="_blank"
          rel="noreferrer"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
