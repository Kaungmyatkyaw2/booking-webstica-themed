import {FaHotel,FaPlane,FaGlobeAmericas,FaCarAlt} from 'react-icons/fa'
import ServiceCard from '../../components/service-card/ServiceCard'

const Services = () => {
    const card = [
        {
            icon : <FaHotel/>,
            title : 'Hotel Booking',
            des : 'A pleasure exertion if believed provided to. All led out world this music while asked.        ',
            color : 'text-orange-500 bg-orange-300'
        },
        {
            icon : <FaPlane/>,
            title : 'Flight Booking',
            des : 'Warrant private blushes removed an in equally totally Objection do Mr prevailed.',
            color : 'text-green-500 bg-green-300'
        },
        {
            icon : <FaGlobeAmericas/>,
            title : 'Tour Booking',
            des : 'Dashwood does provide stronger is. But discretion frequently sir she instruments.',
            color : 'text-violet-500 bg-violet-300'
        },
        {
            icon : <FaCarAlt/>,
            title : 'Car Booking',
            des : 'Imprudence attachment him his for sympathize. Large above be to means.',
            color : 'text-blue-500 bg-blue-300'
        },
    ]
    
  return (
    <div className="container-cus flex flex-wrap justify-between">
    <ServiceCard card={card} width="lg:!w-[25%] sm:!w-[50%] !w-full !pr-[10px]" classes='rounded-[5px] text-[23px]' />
  </div>  )
}

export default Services