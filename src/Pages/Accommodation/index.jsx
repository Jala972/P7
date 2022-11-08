// import PropTypes from 'prop-types'
// import apartmentProfiles from '../../Utils/Logements/logements.json'
// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router'

import { useParams } from 'react-router-dom'
import apartmentProfiles from '../../Utils/Logements/logements.json'
import ImageSlider from '../../Components/ImageSlider'
import '../../Utils/Style/accommodation.css'
import '../../Utils/Style/imageSlider.css'
import Star from '../../Assets/Vector.png'

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

    // // Déclaration de la constante pour récupérer la note du logment
    //     const starRating = Logement.rating

    //     const Rating = []
    //     for (let star of starRating) {
    //       Rating.push({ nb: star })
    //     }
    //     console.log(Rating)
  }
  return (
    <section class="logementContainer">
      <div class="slideshowContainer">
        <ImageSlider slides={slides} />
      </div>
      <div class="titleNameContainer">
        <div class="titleCityTagContainer">
          <h2>{Logement.title}</h2>
          <p>{Logement.location}</p>
          <p>{Logement.tags}</p>
        </div>
        <div class="nameProfilStarContainer">
          <div class="nameProfilContainer">
            <div class="nameProfil">
              <p class="pProfil">{Logement.host.name}</p>
            </div>
            <div class="imgProfilContainer">
              <img
                class="imgProfil"
                src={Logement.host.picture}
                alt="Photos de Profil"
              />
            </div>
          </div>
          <div class="starContainer">
            <img class="star" src={Star} alt="Etoile" />
            <img class="star" src={Star} alt="Etoile" />
            <img class="star" src={Star} alt="Etoile" />
            <img class="star" src={Star} alt="Etoile" />
            <img class="star" src={Star} alt="Etoile" />
          </div>
        </div>
      </div>
      <div class="descriptionEquipementContainer">
        <div class="descriptionContainer">
          <h5>Description</h5>
          <p>{Logement.description}</p>
        </div>
        <div class="equipementContainer">
          <h5>Equipements</h5>
          <p>{Logement.equipments}</p>
        </div>
      </div>
    </section>
  )
}

// const AccommodationSheetWrapper = styled.div`
//   height: 643px;
//   width: 1240px;
//   left: 100px;
//   top: 128px;
//   border-radius: 0px;
// `

// const LogementTitle = styled.h1`
//   width: 200px;
//   height: 200px;
//   font-family: Montserrat;
//   font-size: 36px;
//   font-weight: 500;
//   line-height: 51px;
//   letter-spacing: 0em;
//   text-align: left;
//   color: red;
// `
// const Accommodation = ({ match }) => {
//   useEffect(() => {
//     getAccommadation()
//   }, [])
//   const [accommodation, setAccommodation] = useState({})
//   const getAccommadation = async () => {
//     console.log(match)
//   }
//   return (
//     <div>
//       <h1>Blog Article d'id : {match.params.id}</h1>
//     </div>
//   )
// }

// function Accommodation() {
//   //   // const params = useParams()
//   //   // const accommodation = logements.find(logement => logement.id === params.id)

//   return <h1>Blog numero:</h1>
// }

//     <div className="container-AccommodationSheet" key={logement.id}>
//   <div className="container-slideshow">
//   <Slideshow/>
//     </div>
// <div className="title">
// <h1>{logements.title}</h1>
// <p>{logements.location}</p>
// </div>

// </div>

// //   )}
//     <div>
//       <AccommodationSheetWrapper>
//         {apartmentProfiles.map((logements, index) => (
//           <AccommodationSheet
//             // key={`${profile.name}-${index}`}
//             // label={profile.jobTitle}
//             id={logements.id}
// title={logements.title}
//             cover={logements.cover}
//             pictures={logements.pictures}
//             description={logements.description}
//             hostName={logements.host.name}
//             hostPicture={logements.host.picture}
//             rating={logements.rating}
//             equipments={logements.equipments}
//             tags={logements.tags}
//           />
//         ))}
//       </AccommodationSheetWrapper>
//     </div>
// )
// }

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
