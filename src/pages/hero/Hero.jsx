import HeroForm from './HeroForm'
import HeroLeftSide from './HeroLeftSide'
import HeroRightSide from './HeroRightSide'

const Hero = () => {
  return (
    <div className='xl:w-[80%] xl:py-0 py-[50px] w-full container-padding-x relative flex lg:flex-row flex-col items-center min-h-[70vh]'>

      <HeroLeftSide/>
      <HeroRightSide/>
      <HeroForm/>


    </div>
  )
}

export default Hero