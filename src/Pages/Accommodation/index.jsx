import { useParams } from 'react-router-dom'
import apartmentProfiles from '../../Utils/Logements/logements.json'
import ImageSlider from '../../Components/ImageSlider'
import '../../Utils/Style/accommodation.css'
import '../../Utils/Style/imageSlider.css'
import Stars from '../../Components/Rating'
import Tags from '../../Components/Tags'
import Footer from '../../Components/Footer'

const Accommodation = () => {
  // Déclaration de la constante Id avec useParams
  const { id } = useParams()

  // Récupération de la liste des attributs du logement avec .find
  const Logement = apartmentProfiles.find((logement) => logement.id === id)
  // Déclaration de la constante pour récupérer les images du logement
  const picturesList = Logement.pictures

  // Déclaration de la constante slides afin récupérer les images du logement sous forme de liste
  const slides = []

  // Boucle pour récupérer toutes les images du tableau pictureList
  for (let boucle of picturesList) {
    slides.push({ url: boucle })
  }
  return (
    <section>
      <div className="logementContainer">
        <div className="slideshowContainer">
          <ImageSlider slides={slides} />
        </div>
        <div className="titleNameContainer">
          <div className="titleCityTagContainer">
            <h2 className="titleLogement">{Logement.title}</h2>
            <p className="locationLogement">{Logement.location}</p>
            <Tags src={Tags} />
          </div>
          <div className="nameProfilStarContainer">
            <div className="nameProfilContainer">
              <div className="nameProfil">
                <p className="pProfil">{Logement.host.name}</p>
              </div>
              <div className="imgProfilContainer">
                <img
                  className="imgProfil"
                  src={Logement.host.picture}
                  alt="Photos de Profil"
                />
              </div>
            </div>
            <div className="starContainer">
              <Stars src={Stars} />
            </div>
          </div>
        </div>
        <div className="descriptionEquipementContainer">
          <div className="menu-deroulant">
            <h5 className="titleSection">Description</h5>
            <div className="sous-menu">
              <p>{Logement.description}</p>
            </div>
          </div>
          <div className="menu-deroulant">
            <h5 className="titleSection">Equipements</h5>
            <div className="sous-menu">
              <p>{Logement.equipments}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="AccommodationFooter">
        <Footer src={Footer} />
      </div>
    </section>
  )
}

// // Définition des Props
// AccommodationSheet.propTypes = {
//   // label: PropTypes.string.isRequired,
//   // title: PropTypes.string.isRequired,
//   // picture: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   pictures: PropTypes.string.isRequired,
//   cover: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   hostName: PropTypes.string.isRequired,
//   hostPicture: PropTypes.string.isRequired,
//   rating: PropTypes.string.isRequired,
//   equipments: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// }

// // Card.defaultProps = {
// //   label: '',
// //   title: '',
// //   picture: DefaultPicture,
// // }

export default Accommodation
