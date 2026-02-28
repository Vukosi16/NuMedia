import '../styles/home.css'
import NuMediaStockPhoto from '../assets/NuMediaStockPhoto.png'

const Home = () => {
  return (
    <>
      <div className="Hero">

        <div className="heroHeadingContainer">
          <h1 className="heroHeading">Create an Online Presence</h1>
        </div>

        <div className="heroImageContainer">
          <img className="heroImage" src={NuMediaStockPhoto} alt="NuMedia Stock Photo" />
        </div>

      </div>

      <div className="about">
        
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
    </>
  )
}

export default Home