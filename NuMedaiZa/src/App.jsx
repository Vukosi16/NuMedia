import "./styles/home.css"
import Home from "./pages/Home"
import Nav from "./Components/Nav"
import Layout from "./Components/Layout"
import { Route, Routes } from "react-router"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route index element={<Home />} />
        
    </Routes>
    </>
  )
}

export default App
