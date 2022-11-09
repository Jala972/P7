import kalen from '../../Assets/kalen.png'
import gustavo from '../../Assets/gustavo.png'
import Background from '../../Assets/Background.png'
import BackgroundMobil from '../../Assets/BackgroundMobil.png'
import '../../Utils/Style/sectionAbout.css'

function SectionAbout() {
  return (
    <div className="SectionAboutContainer">
      <div className="SectionAboutMaskGroup">
        <img
          class="BackgroundSectionAbout1"
          src={Background}
          alt="Effet graphique de masque"
        />
        <img
          class="BackgroundSectionAbout1Mobil"
          src={BackgroundMobil}
          alt="Effet graphique de masque"
        />
        <img class="ImgSectionAbout" src={kalen} alt="Montagne Desktop" />
        <img class="ImgSectionAbout2" src={gustavo} alt="Montagne Desktop" />

        <img
          class="BackgroundSectionAbout2"
          src={Background}
          alt="Effet graphique de masque"
        />
        <img
          class="BackgroundSectionAbout2Mobil"
          src={BackgroundMobil}
          alt="Effet graphique de masque"
        />
      </div>
    </div>
  )
}

export default SectionAbout
