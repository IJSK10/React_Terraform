import Navbar from "./components/Navbar"
import { AppRoutes } from "./routes"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar/>
        <main className="flex-grow pt-4">
          <AppRoutes />
        </main>
      </div>
    </>
  )
}

export default App
