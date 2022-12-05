import { AiOutlineDown } from 'react-icons/ai'

const FlightSelect = ({children,className,check}) => {
  return (
    <div className={`py-[10px] px-[20px] rouded-[10px] bg-[#F5F5F6] text-[15px] rounded-[5px] text-gray-400 font-medium ${className}`} id="">
                    <div className='flex justify-between items-center w-full relative'>
                        <div className='w-[90%]'>
                        <p className=''>{children}</p>
                        </div>
                        <div className='w-[10%]'>
                        <AiOutlineDown className={`text-[12px] ${check && 'hidden'}`}/>
                        </div>
                    </div>
    </div>
  )
}

export default FlightSelect