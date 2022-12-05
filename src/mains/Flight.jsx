

import FlightFifth from '../pages/flight/FlightFifth'
import FlightFooter from '../pages/flight/FlightFooter'
import FlightFourth from '../pages/flight/FlightFourth'
import FlightFrist from '../pages/flight/FlightFrist'
import FlightLast from '../pages/flight/FlightLast'
import FlightNav from '../pages/flight/FlightNav'
import FlightSecond from '../pages/flight/FlightSecond'
import FlightThird from '../pages/flight/FlightThird'

const Flight = () => {

 

  return (
    <div className='w-full flex-col flex justify-center items-center dark:bg-dark dark:text-white'>
        <FlightNav/>
        <FlightFrist/>
        <FlightSecond/>
        <FlightThird/>
        <FlightFourth/>
        <FlightFifth/>
        <FlightLast/>
        <FlightFooter/>
    </div>
  )
}

export default Flight