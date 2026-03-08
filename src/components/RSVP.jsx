export default function RSVP() {
  const contacts = [
    { name: "Rockson", number: "0555198180" },
    { name: "Ernest", number: "0247867048" },
    { name: "Phylis", number: "0509603333" },
  ];

  return (
    <section className="section" id="rsvp">
      <h2>R.S.V.P</h2>
      <p className="rsvp-subtitle">Kindly confirm your presence by calling our RSVP contacts:</p>

      <div className="card rsvp-card">
        {contacts.map((contact, index) => (
          <div key={index} className="rsvp-row">
            <div className="rsvp-info">
              <div className="rsvp-name">{contact.name}</div>
              <div className="rsvp-number">{contact.number}</div>
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
