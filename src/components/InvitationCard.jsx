import logo from "../assets/logo.png";

export default function InvitationCard() {
  return (
    <section className="section invitation-section" id="invitation" aria-labelledby="invitation-heading">
      <p className="section-kicker invitation-kicker">Wedding Invitation</p>
      <h2 id="invitation-heading" className="invitation-heading">
        Join Us
      </h2>

      <div className="card invitation-card">
        <div className="invitation-shell">
          <div className="invitation-logo-wrap">
            <img src={logo} alt="Bright and Deborah monogram" className="invitation-logo" />
          </div>

          <p className="invitation-tag">#FavouredBD</p>

          <p className="invitation-family">The Oppong Family</p>
          <p className="invitation-ampersand">&amp;</p>
          <p className="invitation-family">The Adiasani Family</p>

          <p className="invitation-copy">
            Request the honour of your presence at the wedding ceremony between their son and daughter
          </p>

          <div className="invitation-couple">
            <div className="invitation-name-block">
              <span className="invitation-name">Bright</span>
              <span className="invitation-surname">Oppong</span>
            </div>
            <span className="invitation-and">and</span>
            <div className="invitation-name-block">
              <span className="invitation-name">Deborah</span>
              <span className="invitation-surname">Adiasani</span>
            </div>
          </div>

          <div className="invitation-date-grid" aria-label="Wedding date and time">
            <div className="invitation-date-panel">
              <span className="invitation-date-label">Saturday</span>
            </div>
            <div className="invitation-date-panel invitation-date-panel-main">
              <span className="invitation-date-month">March</span>
              <span className="invitation-date-day">28</span>
              <span className="invitation-date-year">2026</span>
            </div>
            <div className="invitation-date-panel">
              <span className="invitation-date-label">At 11:00 AM</span>
            </div>
          </div>

          <div className="invitation-venue">
            <p className="invitation-venue-line">Prove Jesus Alive Auditorium</p>
            <p className="invitation-venue-line">Adjacent Ebenezer School-Taifa</p>
          </div>

          <div className="invitation-rsvp">
            <p className="invitation-rsvp-title">RSVP</p>
            <p className="invitation-rsvp-copy">
              Rockson - 0555198180, Ernest - 0247867048, Phylis - 0509603333
            </p>
          </div>

          <div className="invitation-scripture">
            <p className="invitation-scripture-line">
              We enjoy a canopy of cedars enclosed by cypresses, fragrant and green.
            </p>
            <p className="invitation-scripture-line">Song of Songs 1 vs 17</p>
          </div>

          <div className="invitation-gift-banner">
            In lieu of gifts we would appreciate if you bless us with cash gift
          </div>
        </div>
      </div>
    </section>
  );
}
