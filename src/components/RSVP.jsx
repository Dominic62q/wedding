export default function RSVP() {
  const contacts = [
    { name: "Rockson", number: "0555198180" },
    { name: "Ernest", number: "0247867048" },
    { name: "Empress", number: "0262002180" },
  ];

  return (
    <section className="section" id="rsvp">
      <h2>R.S.V.P</h2>
      <p className="rsvp-subtitle">Kindly confirm your presence by calling our coordinators:</p>

      <div className="card rsvp-card" style={{ padding: "0" }}>
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="rsvp-row"
            style={{ borderBottom: index !== contacts.length - 1 ? "1px solid #f0f0f0" : "none" }}
          >
            <div style={{ textAlign: "left" }}>
              <div className="rsvp-name">{contact.name}</div>
              <div className="rsvp-role">Coordinator</div>
            </div>

            <a href={`tel:${contact.number}`} className="rsvp-call" aria-label={`Call ${contact.name}`}>
              {"\u260E"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
