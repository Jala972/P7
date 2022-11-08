// import { useState } from 'react'
import styled from 'styled-components'
import Gallery from '../../Components/Gallery'
import { Link } from 'react-router-dom'
import SectionOne from '../../Components/SectionOne'
import '../../Utils/Style/home.css'

function Home() {
  // const [size, setSize] = useState(1)
  return (
    <div className="HomeContainer">
      {/* <div className="SectionOneContainer"> */}
      <Link to="/">
        <SectionOne src={SectionOne} />
      </Link>
      {/* </div> */}
      {/* <div className="GalleryContainer"> */}
      <Link to="/">
        <Gallery src={Gallery} />
      </Link>
      {/* </div> */}

      {/* <h1 onClick={() => setSize(size + 0.1)}>Page d'accueil 🏡</h1>
      <Balloon size={size} /> */}
    </div>
  )
}

export default Home
