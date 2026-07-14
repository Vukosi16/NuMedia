import { useState } from 'react'
import '../styles/home.css'

const services = [
  { title: 'Software Design', desc: 'Custom-built software that caters for you needs and functionality.' },
  { title: 'Business Marketing', desc: 'Robust website marketing solutions to grow your business\' online presence.' },
  { title: 'Creative Portfolio', desc: 'Showcase your all your creative or professional work in a visually appealing way.' },
  { title: 'Personal Profile', desc: 'Showcase your personality and creativity to a wider audience.' },
  { title: 'SEO Support', desc: 'Get your site found by the people already searching for your services.' },
]

const AccordianWWD = () => {
  const [openIndex, setOpenIndex] = useState(0)   // ← moved inside the component

  return (
    <div className="wwdAccordion">                 {/* ← added wrapper class for width control */}
      {services.map((service, i) => (
        <div
          key={service.title}
          className={`list-item ${openIndex === i ? 'active' : ''}`}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <div className="item-header">
            <h3>{service.title}</h3>
            <div className="plus">{openIndex === i ? '−' : '+'}</div>
          </div>
          <p className="item-desc">{service.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default AccordianWWD