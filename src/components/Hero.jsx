import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="section hero-section" id="top">
      <div className="hero-logo-wrap">
        <img src={logo} className="hero-logo" alt="Wedding logo" />
      </div>

      <h1 className="hero-title">
        Bright <span>&</span> Deborah
      </h1>

      <h3 className="hero-kicker">A Celebration of Love, Faith & Strength</h3>

      <a href="#rsvp" className="btn hero-cta">
        Celebrate With Us
      </a>

      <div className="scroll-cue" aria-hidden="true">
        {"\u2304"}
      </div>
    </section>
  );
}
