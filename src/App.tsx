import { Navbar, Welcome, Dock } from "./components/index";
import { gsap } from "gsap";
import { Draggable } from "gsap/draggable";

gsap.registerPlugin(Draggable);

const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
};

export default App;