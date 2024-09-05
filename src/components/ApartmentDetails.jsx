import { useParams } from 'react-router-dom'
import apartmentList from '../datas/ApartmentList'
import TitleAndLocation from './TitleAndLocation'
import Tags from './Tags'
import Collapse from './Collapse'
import '../sass/ApartmentDetails.sass'
import HostAndRating from './HostAndRating'

function ApartmentDetails() {
  const { id } = useParams()

  // Trouver l'appartement correspondant à l'id
  const apartment = apartmentList.find((apartment) => apartment.id === id)

  return (
    <div>
      <div className="apartment-details">
        <div className="apartment-pictures">
          {apartment.pictures.map((picture, index) => (
            <img
              src={picture}
              alt={apartment.title}
              key={index}
              className="apartment-img"
            />
          ))}
        </div>
        <div className="apartment-text-container">
          {/* Passer le titre et l'ID au composant TitleAndLocation */}
          <TitleAndLocation
            title={[apartment.title]}
            location={apartment.location}
            id={id}
          />
          <Tags tags={apartment.tags} />
        </div>
        <HostAndRating
          host={apartment.host.name}
          picture={apartment.host.picture}
        />
        <Collapse title="Description" content={apartment.description} />
        <Collapse title="Équipments" content={apartment.equipments} />
      </div>
    </div>
  )
}

export default ApartmentDetails