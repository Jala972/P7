import kalen from '../../Assets/kalen.png'
import Background from '../../Assets/Background.png'
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
          class="ImgSectionAbout"
          src={kalen}
          alt="Chez vous, partout et ailleurs"
        />

        <img
          class="BackgroundSectionAbout2"
          src={Background}
          alt="Effet graphique de masque"
        />
      </div>
    </div>
  )
}

export default SectionAbout
