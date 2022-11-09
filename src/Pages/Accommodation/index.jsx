// import PropTypes from 'prop-types'
// import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import apartmentProfiles from '../../Utils/Logements/logements.json'
import ImageSlider from '../../Components/ImageSlider'
import '../../Utils/Style/accommodation.css'
import '../../Utils/Style/imageSlider.css'
import Stars from '../../Components/Rating'
import Tags from '../../Components/Tags'

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
    <section class="logementContainer">
      <div class="slideshowContainer">
        <ImageSlider slides={slides} />
      </div>
      <div class="titleNameContainer">
        <div class="titleCityTagContainer">
          <h2 className="titleLogement">{Logement.title}</h2>
          <p className="locationLogement">{Logement.location}</p>
          <Tags src={Tags} />
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
            <Stars src={Stars} />
          </div>
        </div>
      </div>
      <div class="descriptionEquipementContainer">
        <div class="menu-deroulant">
          <h5 class="titleSectionAbout">Description</h5>
          <div class="sous-menu">
            <p>{Logement.description}</p>
          </div>
        </div>
        <div class="menu-deroulant">
          <h5 class="titleSectionAbout">Equipements</h5>
          <div class="sous-menu">
            <p>{Logement.equipments}</p>
          </div>
        </div>
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
