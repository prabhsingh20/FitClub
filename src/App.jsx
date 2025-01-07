import "./App.css";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Reasons from "./components/reasons/Reasons";

function App() {
  return (
    <div className="app">
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}

export default App;
