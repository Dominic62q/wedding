import Hero from "./components/Hero";
import InvitationCard from "./components/InvitationCard";
import Countdown from "./components/Countdown";
import GiftDonation from "./components/GiftDonation";
import Details from "./components/Details";
import Colors from "./components/Colors";
import RSVP from "./components/RSVP";
import Scripture from "./components/Scripture";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <InvitationCard />
      <Countdown />
      <Details />
      <Colors />
      <RSVP />
      <GiftDonation />
      <Scripture />
    </div>
  );
}

export default App;
