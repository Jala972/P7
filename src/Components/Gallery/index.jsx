// import DefaultPicture from '../../Assets/profile.png'
import Card from '../../Components/Card'
// import colors from '../../Utils/Style/colors'
import apartmentProfiles from '../../Utils/Logements/logements.json'
import '../../Utils/Style/gallery.css'

function Gallery() {
  return (
    <div className="GalleryContainer">
      {apartmentProfiles.map((logements, index) => (
        <Card
          //key={`${profile.name}-${index}`}
          //label={profile.jobTitle}
          id={logements.id}
          title={logements.title}
          cover={logements.cover}
          // pictures={logements.pictures}
          // description={logements.description}
          // hostName={logements.host.name}
          // hostPicture={logements.host.picture}
          // rating={logements.rating}
          // equipments={logements.equipments}
          // tags={logements.tags}
        />
      ))}
    </div>
  )
}

export default Gallery
