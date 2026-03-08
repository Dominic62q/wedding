export default function InvitationCard() {
  const invitationPdf = `${import.meta.env.BASE_URL}favouredbd-invitation.pdf`;

  return (
    <section className="section invitation-section invitation-section-compact" id="invitation">
      <a
        href={invitationPdf}
        download="favouredbd-invitation.pdf"
        className="invitation-download-cta"
        aria-label="Download invitation"
      >
        <span className="invitation-download-cta-title">Download Invitation</span>
        <span className="invitation-download-cta-arrow" aria-hidden="true">
          -&gt;
        </span>
      </a>
    </section>
  );
}
