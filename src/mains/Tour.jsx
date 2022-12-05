
import Navbar from '../pages/Home/navbr/Navbar'
import TourFirst from '../pages/Tour/TourFirst'
import TourFourth from '../pages/Tour/TourFourth'
import TourSecond from '../pages/Tour/TourSecond'
import TourThird from '../pages/Tour/TourThird'
import TourFifth from '../pages/Tour/TourFifth'
import TourSixth from '../pages/Tour/TourSixth'
import TourFooter from '../pages/Tour/TourFooter'


const Tour = () => {




  return (
    <div className='w-full flex justify-center items-center flex-col'>
        
        <Navbar/>
        <TourFirst/>
        <TourSecond/>
        <TourThird/>
        <TourFourth/>
        <TourFifth/>
        <TourSixth/>
        <TourFooter/>       

    </div>
  )
}

export default Tour