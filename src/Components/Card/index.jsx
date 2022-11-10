import PropTypes from 'prop-types'
// import DefaultPicture from '../../Assets/profile.png'

// import colors from '../../Utils/Style/colors'
import { Link } from 'react-router-dom'
import '../../Utils/Style/card.css'

// Fonction Card
function Card({
  id,
  title,
  cover,
  pictures,
  description,
  hostName,
  hostPicture,
  rating,
  equipments,
  tags,
}) {
  return (
    <div className="ContainerCard">
      <Link to={`/accommodation/${id}`}>
        <div className="CardWrapper">
          <h3 className="CardTitle">{title}</h3>
          <div className="Rectangle2"></div>
          <img className="CardImage" src={cover} alt={description} />

          {/* <span src={pictures} alt="Photos de l'appartement" />
      <span>{description}</span>
      <span>{hostName}</span>
      <span src={hostPicture} alt="Photo du propriétaire de l'appartement" />
      <span>{rating}</span>
      <span>{equipments}</span>
      <span>{tags}</span> */}
        </div>
      </Link>
    </div>
  )
}

// Définition des Props
Card.propTypes = {
  // label: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // picture: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // pictures: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  description: PropTypes.string,
  // hostName: PropTypes.string.isRequired,
  // hostPicture: PropTypes.string.isRequired,
  // rating: PropTypes.string.isRequired,
  // equipments: PropTypes.string.isRequired,
  // tags: PropTypes.string.isRequired,
}

// Card.defaultProps = {
//   label: '',
//   title: '',
//   picture: DefaultPicture,
// }

export default Card
