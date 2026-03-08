import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="section hero-section" id="top">
      <div className="hero-logo-wrap">
        <img src={logo} className="hero-logo" alt="Wedding logo" />
      </div>

      <p className="section-kicker hero-meta">Saturday, 28 March 2026</p>

      <h1 className="hero-title">
        Bright <span>&</span> Deborah
      </h1>

      <h3 className="hero-kicker">A Celebration of Love, Faith & Strength</h3>

      <div className="scroll-cue" aria-hidden="true">
        {"\u2304"}
      </div>
    </section>
  );
}
