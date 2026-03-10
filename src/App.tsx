import { Navbar, Welcome, Dock } from "./components";
import { Terminal, Safari, Resume, Finder, Text, Contact } from "./windows";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable"
gsap.registerPlugin(Draggable)


gsap.registerPlugin(Draggable);

const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Contact />
    </main>
  );
};

export default App;