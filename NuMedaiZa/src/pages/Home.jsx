import '../styles/home.css'
import NuMediaStockPhoto from '../assets/NuMediaStockPhoto.png'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Nav />

      <div className="Hero">

        <div className="heroHeadingContainer">
          <h3 className="headingTag">DIGITAL AGENCY</h3>
          <h1 className="heroHeading">Create an Online Presence</h1>
          <p className="heroText">We design, build, and grow websites that turn visitors into clients without the generic template feel. </p>
          <div className="heroButtonsContainer">
            <button className="getStartedBtn">Get Started</button>
            <button className="ViewPortfolioBtn">View Portfolio</button>
          </div>
        </div>

        <div className="heroImageContainer">
          <img className="heroImage" src={NuMediaStockPhoto} alt="NuMedia Stock Photo" />
        </div>

      </div>

      <div id='aboutSection' className="about">
        
        <div className="about-leftSide">
          <p className="about-leftSide-text-small">Who is NuMedia?</p>
          <p className='about-heading'>NuMedia</p>
          <p className="about-leftSide-text">NuMedia is media company that specializes in creating websites for small businesses and medium sized businesses.</p>
          <p>We help businesses establish an online presence and grow their brand. <br /> We also offer graphic design services and video editing services.</p>
        </div>

        <div className="about-rightSide">
          <div className="about-grid">
            <div className="about-grid-item"></div>
            <div className="about-grid-item"></div>
            <div className="about-grid-item"></div>
            <div className="about-grid-item"></div>
            <div className="about-grid-item"></div>
            <div className="about-grid-item"></div>
            <div className="about-grid-item"></div>
            <div className="about-grid-item"></div>
            <div className="about-grid-item"></div>
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  )
}

export default Home