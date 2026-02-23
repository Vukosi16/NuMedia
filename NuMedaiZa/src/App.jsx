import Nav from "./Components/Nav"
import "./styles/appStyles.css"

function App() {
  return (
    <>
      <Nav />
      <div className="Hero">

        <div className="heroHeadingContainer">
          <h1 className="heroHeading">Create an Online Presence</h1>
        </div>

        <div className="heroImageContainer">
          <img className="heroImage" src="../src/assets/NuMediaStockPhoto.png" alt="NuMedia Stock Photo" />
        </div>

      </div>
    </>
  )
}

export default App
