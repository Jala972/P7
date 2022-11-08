import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Accommodation from './Pages/Accommodation'
import About from './Pages/About'
// import Apartment from './Components/Apartment'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Components/Error'
// import Card from './Components/Card'

// Importation de createGlobalStyle
import { createGlobalStyle } from 'styled-components'

// Importation du style
import '../src/Utils/Style/card.css'
import '../src/Utils/Style/gallery.css'
import '../src/Utils/Style/home.css'
import '../src/Utils/Style/about.css'
import '../src/Utils/Style/header.css'
// import your route components too

const GlobalStyle = createGlobalStyle`
    div {
        font-family: Montserrat, 'Trebuchet MS', Helvetica, sans-serif;
    }
`

// Switch est remplacé par Routes dans la V6 de ReactRouterDom
render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      {/* Route pour la page d'acceuil */}
      <Route path="/" exact element={<Home />} />
      {/* Route pour la page A Propos */}
      <Route path="/about" element={<About />} />
      {/* <Route path="card" element={<Card />} /> */}
      <Route path="/accommodation/:id" element={<Accommodation />}></Route>
      {/* you can render a "not found" route using path="*" */}
      <Route path="*" element={<Error />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
