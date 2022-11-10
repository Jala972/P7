import '../../Utils/Style/error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="ErrorContainer">
      <h2 className="TitleError">404</h2>
      <p className="textError">Oups! La page que vous demandez n'existe pas.</p>
      <p className="textErrorMobil">
        Oups! La page que <br></br>vous demandez n'existe pas.
      </p>
      <div className="linkHome">
        <Link to="/">
          <p className="textLinkError">Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </div>
  )
}

export default Error
