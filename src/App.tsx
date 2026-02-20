
import { Navbar, Welcome ,Dock} from "./components/index.ts"


const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  )
}

export default App