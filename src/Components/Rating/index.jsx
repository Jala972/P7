import React from 'react'

import '../../Utils/Style/rating.css'
// Importation de react-rating-stars-component
import ReactStars from 'react-rating-stars-component'
import { useParams } from 'react-router-dom'
import apartmentProfiles from '../../Utils/Logements/logements.json'

function Stars() {
  // Déclaration de la constante Id avec useParams
  const { id } = useParams()

  // Récupération de la liste des attributs du logement avec .find
  const Logement = apartmentProfiles.find((logement) => logement.id === id)

  // Déclaration de la constante pour récupérer la note du logment
  const starRating = {
    size: 30,
    value: Logement.rating,
    edit: false,
  }

  return (
    <div class="Stars">
      <ReactStars class="StarsClass" {...starRating} />
    </div>
  )
}
export default Stars
