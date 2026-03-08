import { useEffect } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import InvitationCard from "./components/InvitationCard";
import Countdown from "./components/Countdown";
import GiftDonation from "./components/GiftDonation";
import Details from "./components/Details";
import Colors from "./components/Colors";
import RSVP from "./components/RSVP";
import Scripture from "./components/Scripture";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sections.forEach((section) => {
      section.classList.add("will-animate");
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Nav />
      <Hero />
      <InvitationCard />
      <Countdown />
      <Details />
      <Colors />
      <RSVP />
      <GiftDonation />
      <Scripture />
      <Footer />
    </div>
  );
}

export default App;
