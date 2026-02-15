export default function GiftDonation() {
  return (
    <section className="section donation-section">
      <h2 className="donation-heading">Gift Donation</h2>

      <div className="card donation-card">
        <p className="donation-kicker">In lieu of gifts</p>
        <p className="donation-message">
          We would appreciate it if you bless us with a cash gift.
        </p>

        <div className="donation-divider" />

        <div className="donation-grid">
          <div className="donation-item">
            <span className="donation-label">Account Type</span>
            <span className="donation-value">Telecel Cash</span>
          </div>
          <div className="donation-item">
            <span className="donation-label">Name</span>
            <span className="donation-value">Deborah Adiasani</span>
          </div>
          <div className="donation-item donation-item-wide">
            <span className="donation-label">Number</span>
            <a className="donation-number" href="tel:0509808835">
              0509808835
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
