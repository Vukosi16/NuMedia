import '../styles/Contact.css'

const Contact = () => {
  return (
    <>
            <div className='contactPageContainer'>
                <div className="textSection">
                    <h1 className="contactHeading">
                        Thank you for your interest in NuMedia! We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.
                    </h1>
                    <p className="textContact">Phone: +27 60 429 1658</p>
                    <p className="textContact">Email: info@numedia.tech</p>
                </div>

                <div className="formContainer">
                    <form className="contactForm" action="https://formspree.io/f/xrenraek" method="POST">
                        <div className="inputColumn">
                            <input className="formInput" type="text" id="name" name="name" placeholder="YOUR NAME *" required />
                            <input className="formInput" type="email" id="email" name="email" placeholder="YOUR EMAIL *" required />
                            <input className="formInput" type="tel" id="phone" name="phone" placeholder="YOUR PHONE *" required />
                        </div>

                        <div className="messageColumn">
                            <textarea className="formMessage" id="message" name="message" placeholder="YOUR MESSAGE *" required />
                        </div>

                        <button className="sendButton" type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
    </>
  )
}

export default Contact