import React from 'react'
import '../styles/OnlinePresence.css'

const OnlinePresence = () => {
  return (
    <div className="articlePage">

        <div className="articleContent">
            <h1 className="articleHeading">Why your business needs an online presence</h1>
            <div className="articleTag">Vukosi Mohlabini &bull; 5 min read &bull; Published: July 2026</div>
            <p className="textPortion1">
              Most businesses still treat a website like a digital business card: something to point to when someone asks, but not something designed to win attention or create action. That approach leaves money on the table. A real online presence helps people discover your business, understand what makes it different, and take the next step without friction.
            </p>
            <h4 className="slogan">
              "A strong online presence is not decoration. It is the system that helps people find you, trust you, and choose you."
            </h4>
            <p className="textPortion1">
              Visibility is the first advantage. If your business does not show up when people search for your service, your competitors get the conversation before you do. Search engines, social platforms, and review sites all shape that first impression, so your brand needs to be consistent wherever people might encounter it.
            </p>
            <p className="textPortion1">
              Credibility matters just as much. A clean website, clear messaging, real testimonials, and up-to-date contact details all reduce doubt. People rarely buy from businesses they do not trust, and trust is built through small signals that show your business is active, professional, and easy to deal with.
            </p>
            <p className="textPortion1">
              The final piece is conversion. A strong online presence does not just attract people; it guides them. Whether the goal is a phone call, a booking, a quote request, or a purchase, the path should be obvious. Good design supports that path instead of getting in the way.
            </p>
            <div className="ctaContainer">
              <h5 className="ctaHeading">
                Create an online presence that works for your business.
              </h5>
              <button className="cta" onClick={() => window.location.href = '/contact'}>
                Enquire Now
              </button>
            </div>

        </div>
        
    </div>
  )
}

export default OnlinePresence