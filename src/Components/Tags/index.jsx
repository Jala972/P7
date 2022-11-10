import React from 'react'

import '../../Utils/Style/tags.css'

import { useParams } from 'react-router-dom'
import apartmentProfiles from '../../Utils/Logements/logements.json'

function Tags() {
  // Déclaration de la constante Id avec useParams
  const { id } = useParams()

  // Récupération de la liste des attributs du logement avec .find
  const Logement = apartmentProfiles.find((logement) => logement.id === id)

  // Déclaration de la constante pour récupérer la note du logment
  const wordOfTags = Logement.tags

  // Parcourir le tableau et afficher toutes les valeurs
  for (var i = 0; i < wordOfTags.length; i++) {
    const wordOfTagsName = `
    ${wordOfTags[i]}`

    console.log(wordOfTagsName)
  }
  return <p className="tagsLogement">{wordOfTags}</p>
}

export default Tags
