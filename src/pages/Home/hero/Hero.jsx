import { BsArrowUp } from 'react-icons/bs'
import HeroForm from './HeroForm'
import HeroLeftSide from './HeroLeftSide'
import HeroRightSide from './HeroRightSide'

const Hero = () => {
  return (
    <div className='xl:py-[20px] pt-[50px] pb-0 container-cus relative flex lg:flex-row flex-col items-center min-h-[70vh]'>

      <HeroLeftSide/>
      <HeroRightSide/>
      <HeroForm/>




    </div>
  )
}

export default Hero