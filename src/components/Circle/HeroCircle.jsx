import React from 'react'

const HeroCircle = ({img,check}) => {
  return (
    <div className={`shadow-lg ${check ? 'w-[55px] h-[55px] translate-y-[100%]' : 'w-[80px] h-[80px] translate-y-[200%]'} md:block hidden rounded-full overflow-hidden absolute top-[0] translate-x-[-50%] left-0 border-[3px] border-white`}>
    <img className='w-full h-full object-cover' src={img} alt="" />
   </div>
     )
}

export default HeroCircle