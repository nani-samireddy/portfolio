import Navbar from "./components/navbar";
import Contact from "./views/contact";
import Hero from "./views/hero";
import Skills from "./views/skills";
import Work from "./views/work";

function App() {
  return (
    <div className="text-black ">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
