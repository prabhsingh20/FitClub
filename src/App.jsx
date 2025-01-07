import "./App.css";
import Hero from "./components/hero/Hero";
import Plans from "./components/plans/Plans";
import Programs from "./components/programs/Programs";
import Reasons from "./components/reasons/Reasons";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="app">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
