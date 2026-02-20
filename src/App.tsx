import { Navbar, Welcome } from "./components/index.ts"


const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
    </main>
  )
}

export default App