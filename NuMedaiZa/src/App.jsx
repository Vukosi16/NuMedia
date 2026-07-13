import "./styles/home.css"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Layout from "./Components/Layout"
import OnlinePresence from "./pages/OnlinePresence"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/online-presence" element={<OnlinePresence />} />
      </Route>
    </Routes>
  )
}

export default App
