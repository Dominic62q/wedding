export default function Colors() {
  const palette = [
    {
      name: "Ivory",
      hex: "#FFFFF0",
      border: "#e5e7de",
      meaning: "Purity, elegance, and new beginnings.",
    },
    {
      name: "Lilac",
      hex: "#C8A2C8",
      meaning: "First love, romance, and tranquility.",
    },
    {
      name: "Sage Green",
      hex: "#9CAF88",
      meaning: "Nature, harmony, and growth.",
    },
  ];

  return (
    <section className="section colors-section">
      <h2 className="colors-heading">Wedding Colors</h2>
      <p className="colors-subtitle">Our palette of love and promise</p>

      <div className="palette-grid">
        {palette.map((color, index) => (
          <div key={index} className="card palette-card">
            <div
              className="palette-swatch"
              style={{ background: color.hex, border: color.border ? `1px solid ${color.border}` : "none" }}
            />

            <h3 className="palette-name">{color.name}</h3>

            <p className="palette-meaning">{color.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
