import { useState } from "react"

const HeroSecInput = ({icon,placeholder,value,label,check}) => {

  const [format,setFormat] = useState(value);


  const handleChange = (e) => {
    setFormat(e.target.value)
  }

  return (
    <div className='flex items-center space-x-[10px] lg:w-[30%] w-[95%] '>
        <div BsGeoAlt className='text-gray-500 text-[35px]'>{icon}</div>
        <div className="w-full relative">
           <label className="absolute top-[0] z-[88] translate-y-[-50%] translate-x-[15px] bg-white dark:bg-[#191B1D] text-[15px] left-0 text-gray-400 px-[5px]" htmlFor="">{label}</label>
           <input onChange={handleChange} value={format} className={`px-[10px] py-[10px] pt-[20px] border border-[#C5C5C7] rounded-[10px] outline-none placeholder:text-[#999999] text-[15px] font-[500] w-full relative placeholder:font-[500] dark:bg-[#191B1D] dark:text-gray-300`} type={check ? 'date' : 'text'} placeholder={placeholder} />
        </div>
    </div>

  )
}

export default HeroSecInput