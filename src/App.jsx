import Hero from "./components/Hero";
import Details from "./components/Details";
import Colors from "./components/Colors";
import RSVP from "./components/RSVP";
import Scripture from "./components/Scripture";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Details />
      <Colors />
      <RSVP />
      <Scripture />
    </div>
  );
}

export default App;
