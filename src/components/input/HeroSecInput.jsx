
const HeroSecInput = ({icon,placeholder,value,label}) => {
  return (
    <div className='flex items-center space-x-[10px] lg:w-[30%] w-[95%] '>
        <div BsGeoAlt className='text-gray-500 text-[35px]'>{icon}</div>
        <div className="w-full relative">
           <label className="absolute top-[0] z-[88] translate-y-[-50%] translate-x-[15px] bg-white text-[15px] left-0 text-gray-400 px-[5px]" htmlFor="">{label}</label>
           <input value={value} className={`px-[10px] py-[10px] pt-[20px] border border-[#C5C5C7] rounded-[10px] outline-none placeholder:text-[#999999] text-[15px] font-[500] w-full relative placeholder:font-[500]`} type="text" placeholder={placeholder} />
        </div>
    </div>

  )
}

export default HeroSecInput