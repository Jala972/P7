import styled from 'styled-components'
import KazaLogo from '../../Assets/LOGO.png'

const FooterContainer = styled.div`
  margin: auto;
  height: 209px;
  width: 100%;

  top: 2933px;
  border-radius: 0px;
  position: relative;
  background: #000000;
`

const FooterTitle = styled.h5`
bottom : auto;
height: 200px
 width: 100%;
 color: red;
`
const FooterLogo = styled.img`
  height: 39.444419860839844px;
  width: 122px;
  left: 659px;
  top: 66px;
  border-radius: 0px;
  position: absolute;
  left: 45.76%;
  right: 45.76%;
  top: 31.58%;
  bottom: 49.55%;
  filter: invert(50%);
  -webkit-filter: invert(50%);
`
function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={KazaLogo} />
      <FooterTitle>© 2020 KAZA All rights reserved</FooterTitle>
    </FooterContainer>
  )
}

export default Footer
