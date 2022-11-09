import hero from '../../../assets/hero.jpg'
import circle1 from '../../../assets/circle1.jpg'
import circle2 from '../../../assets/circle2.jpg'
import {BsHeadset} from "react-icons/bs"
import HeroCircle from '../../../components/Circle/HeroCircle'

const HeroRightSide = () => {
  return (
    <div className='lg:w-[50%] w-full  h-full relative xl:translate-y-[30px] z-[-8] dark:z-[0]'>
        <div className='lg:w-[100%] md:w-[90%] w-full relative'>
          <img className='w-full h-full rounded-[10px] object-cover' src={hero} alt="" />
          <div className='py-[10px] px-[15px] rounded-[10px] absolute dark:border dark:border-black top-0 right-0 xl:translate-x-[15%] translate-x-[10%] translate-y-[-20%] flex flex-col items-center space-y-[5px] glass'>
                <BsHeadset className='text-[#D6293E] text-[40px]'/>
                <h1 className='font-bold text-[20px] dark:text-dark'>24 / 7</h1>
                <p className='text-[14px] text-gray-800'>Guide Supports</p>
          </div>
    
        </div>
        <HeroCircle img={circle1} check={true}/>
        <HeroCircle img={circle2} check={false}/>

        
    </div>
  )
}

export default HeroRightSide