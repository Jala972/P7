import '../../Utils/Style/footer.css'
import KazaLogo from '../../Assets/LOGO.png'

function Footer() {
  return (
    <div className="FooterContainer">
      <img className="FooterLogo" src={KazaLogo} alt="Logo Kaza" />
      <h5 className="FooterTitle">© 2020 KAZA All rights reserved</h5>
    </div>
  )
}

export default Footer
