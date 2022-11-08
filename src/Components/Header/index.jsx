import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import colors from '../../Utils/Style/colors'
import KazaLogo from '../../Assets/LOGO.png'
import '../../Utils/Style/header.css'

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderLogo">
        <Link to="/">
          <img class="Logo" src={KazaLogo} alt="Logo Kaza" />
        </Link>
      </div>
      <div className="NavContainer">
        <Link to="/">
          <h2 className="AcceuilStyle">Accueil</h2>
        </Link>
        <Link to="/about">
          <h2 className="AboutStyle">A Propos</h2>
        </Link>
        {/* <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
      <StyledLink to="/">Appartement</StyledLink> */}
      </div>
    </div>
  )
}

export default Header
