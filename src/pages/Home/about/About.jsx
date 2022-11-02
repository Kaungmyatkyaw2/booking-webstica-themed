import {AiFillStar} from 'react-icons/ai'
import {FaUtensils} from 'react-icons/fa'
import {BsStopwatchFill,BsShieldFillCheck,BsLightningFill} from 'react-icons/bs'
import Dot from '../../../components/Dot'

const About = () => {

    const img = ['https://booking.webestica.com/assets/images/avatar/01.jpg','https://booking.webestica.com/assets/images/avatar/02.jpg','https://booking.webestica.com/assets/images/avatar/03.jpg','https://booking.webestica.com/assets/images/avatar/04.jpg','1K+']
    const card = [
        {
            icon : <FaUtensils/>,
            title : 'Quality Food',
            des : 'Departure defective arranging rapturous did. Conduct denied adding worthy little.',
            color : 'text-green-500 bg-green-300'
        },
        {
            icon : <BsStopwatchFill/>,
            title : 'Quick Services',
            des : 'Supposing so be resolving breakfast am or perfectly.',
            color : 'text-red-500 bg-red-300'
        },
        {
            icon : <BsShieldFillCheck/>,
            title : 'High Security',
            des : 'Arranging rapturous did believe him all had supported.',
            color : 'text-orange-500 bg-orange-300'
        },
        {
            icon : <BsLightningFill/>,
            title : '24 Hours Alert',
            des : 'Rapturous did believe him all had supported.',
            color : 'text-blue-500 bg-blue-300'
        },
    ]

  return (
    <div className='container-cus flex lg:flex-row flex-col lg:space-y-0 space-y-[60px]'>
        <div className="lg:w-[50%] w-full relative h-full">
            <img className='md:w-[83%] sm:w-[90%] w-full max-h-full rounded-[10px]' src="https://booking.webestica.com/assets/images/about/01.jpg" alt="" />
            <svg className="fill-yellow-500 absolute top-0 left-0 translate-x-[-40%] translate-y-[-50%]" width="77px" height="77px">
				<path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"></path>
			</svg>
            <div className='bg-white absolute flex space-x-[30px] bottom-[30px] left-[30px] rounded-[20px] py-[15px] px-[20px]'>
                <div className='relative'>
                    <img className='absolute w-[45px] h-[45px] top-[-40px] left-0 translate-x-[-80%]' src="https://booking.webestica.com/assets/images/element/01.svg" alt="" />
                    <h1 className='pb-[7px]'>Client</h1>
                    <div className='flex space-x-[-15px]'>
                        {
                            img.map((i,index) => (
                                i !== "1K+" ? <img key={index} className='w-[40px] h-[40px] rounded-full' src={i} alt="" /> 
                                :
                                <h1 key={index} className='w-[40px] h-[40px] flex items-center justify-center bg-primary rounded-full text-white text-[14px]'>{i}</h1> 
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className='pb-[7px]'>Rating</h1>
                    <p className='font-bold flex items-center h-[40px]'><span>4.5</span><AiFillStar className='text-yellow-400 text-[20px]'/></p>
                </div>
            </div>
            <div className='absolute bottom-[-20%] right-[20px] z-[-1] sm:block hidden'>
              <Dot/>
            </div>
        </div>
        <div className='lg:w-[50%] w-full h-full'>
            <h1 className='font-bold sm:text-[48px] text-[33px]'>The Best Holidays Start Here!</h1>
            <p className='text-[15px] text-gray-500 py-[30px]'>Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
            <div className='w-full flex flex-wrap'>
               {
                card.map((i,index) => (
                    <div key={index} className='sm:w-[50%] w-full space-y-[10px] lg:pr-[10px] sm:pt-[25px] pt-[40px]'>
                        <div className={`w-[50px] h-[50px] text-[20px] ${i.color} bg-opacity-[0.3] rounded-full grid place-items-center`}>
                        {i.icon}
                        </div>
                        <h1 className='font-bold text-[21px]'>{i.title}</h1>
                        <p className='text-gray-500 text-[15px]'>{i.des}</p>

                    </div>
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default About