import { Link } from 'react-router'
import '../styles/home.css'
import NuMediaStockPhoto from '../assets/NuMediaStockPhoto.png'
import upperCaseV from '../assets/letter-uppercase-square-v-svgrepo-com.svg'
import Accordian from '../components/AccordianWWD'

const Home = () => {

  const handleClick = () => {
    document.getElementById('whatwedo')?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <>
      <div className="Hero">

        <div className="heroHeadingContainer">
          <h3 className="headingTag">DIGITAL AGENCY</h3>
          <h1 className="heroHeading">Create an Online Presence</h1>
          <p className="heroText">We design, build, and grow websites that turn visitors into clients without the generic template feel. </p>
          <div className="heroButtonsContainer">
            <Link className="getStartedBtn" to="/contact">Get Started</Link>
            <button className="ViewPortfolioBtn" onClick={() => window.open('https://vukosimohlabini.me', '_blank')}>
              View Portfolio
            </button>
          </div>
        </div>

        <div className="heroImageContainer">
          <img className="heroImage" src={NuMediaStockPhoto} alt="NuMedia Stock Photo" />
          <div className="scroll-indicator" onClick={handleClick}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4v16M6 14l6 6 6-6" />
            </svg>
          </div>
        </div>

      </div>

      <div className="whatWeDo">

        <div className="wwdLeftSide">
          <p className="wwdHeading">What We Do</p>
          <h3 className="fancy-heading">
            Everyone, everybody, everybrand needs an online presence.
          </h3>
          <p className="tagText">
            All creatives, businesses, and brands need an online presence. We help businesses establish an online presence and grow their brand. We also offer graphic design services and video editing services. The same team that designs your site builds it, grows it, and keeps it running.
          </p>
        </div>

        <div className="wwdRightSide">
          <Accordian />
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
            <div className="about-grid-item about-grid-link-item">
              <a
                className="about-grid-link"
                href="https://vukosimohlabini.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Vukosi Mohlabini personal site"
              >
                <img src={upperCaseV} alt="Uppercase V icon" className="about-grid-icon" />
                <span className="about-grid-link-label">Vukosi mohlabini personal site</span>
                
              </a>
            </div>
            <div className="about-grid-item">
              <span className="about-grid-link-coming-soon">coming soon</span>
            </div>
            <div className="about-grid-item">
              <span className="about-grid-link-coming-soon">coming soon</span>
            </div>
            <div className="about-grid-item">
              <span className="about-grid-link-coming-soon">coming soon</span>
            </div>
            <div className="about-grid-item">
              <span className="about-grid-link-coming-soon">coming soon</span>
            </div>
            <div className="about-grid-item">
              <span className="about-grid-link-coming-soon">coming soon</span>
            </div>
            <div className="about-grid-item">
              <span className="about-grid-link-coming-soon">coming soon</span>
            </div>
            <div className="about-grid-item">
              <span className="about-grid-link-coming-soon">coming soon</span>
            </div>
            <div className="about-grid-item">
              <span className="about-grid-link-coming-soon">coming soon</span>
            </div>
          </div>
        </div>
        
      </div>

    </>
  )
}

export default Home