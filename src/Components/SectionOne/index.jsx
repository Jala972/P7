import IMG from '../../Assets/IMG.png'
import Background from '../../Assets/Background.png'
import '../../Utils/Style/SectionOne.css'

function SectionOne() {
  return (
    <div className="SectionOneContainer">
      <h1 className="SectionOneTitle">Chez vous, partout et ailleurs</h1>
      <div className="SectionOneMaskGroup">
        <img
          className="BackgroundSectionOne1"
          src={Background}
          alt="Effet graphique de masque"
        />

        <img
          className="ImgSectionOne"
          src={IMG}
          alt="Chez vous, partout et ailleurs"
        />

        <img
          className="BackgroundSectionOne2"
          src={Background}
          alt="Effet graphique de masque"
        />
      </div>
    </div>
  )
}

export default SectionOne
