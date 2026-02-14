export default function Scripture() {
  return (
    <section className="section scripture-section">
      <div className="scripture-hearts" aria-hidden="true">
        {"\u2661 \u2726 \u2661"}
      </div>

      <h2 style={{ color: "white" }}>Scripture</h2>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p className="scripture-quote">"The beams of our house are cedar, and our rafters of fir."</p>

        <div className="scripture-divider" />

        <p className="scripture-reference">Songs of Solomon 1:17</p>
      </div>
    </section>
  );
}
