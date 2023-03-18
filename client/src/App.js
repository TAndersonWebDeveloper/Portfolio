import "./App.css";
import Hero from "./components/hero/Hero";
import Skill from "./components/skills/Skill";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skill />
    </div>
  );
}

export default App;
