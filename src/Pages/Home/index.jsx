// import { useState } from 'react'
import Footer from '../../Components/Footer'
import Gallery from '../../Components/Gallery'
import { Link } from 'react-router-dom'
import SectionOne from '../../Components/SectionOne'
import '../../Utils/Style/home.css'

function Home() {
  return (
    <div className="HomeContainer">
      <div className="HomeMain">
        <Link to="/">
          <SectionOne src={SectionOne} />
        </Link>

        <Link to="/">
          <Gallery src={Gallery} />
        </Link>
      </div>
      <div className="HomeFooter">
        <Footer src={Footer} />
      </div>
    </div>
  )
}

export default Home
