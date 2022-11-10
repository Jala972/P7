import BlockAbout from '../../Components/BlockAbout'
import SectionAbout from '../../Components/SectionAbout'
import Footer from '../../Components/Footer'

// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import '../../Utils/Style/about.css'

function About() {
  return (
    <div classeName="AboutContainer">
      <div classename="SectionAboutContainer">
        <SectionAbout src={SectionAbout} />
      </div>
      <div className="AboutTextContainer">
        <BlockAbout src={BlockAbout} />
      </div>
      <div className="AboutFooter">
        <Footer src={Footer} />
      </div>
    </div>
  )
}

export default About
