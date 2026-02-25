import { Navbar, Welcome, Dock } from "./components/index";
import { Terminal } from "./windows";
import { gsap } from "gsap";
import { Draggable } from "gsap/draggable";



gsap.registerPlugin(Draggable);

const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal
    </main>
  );
};

export default App;