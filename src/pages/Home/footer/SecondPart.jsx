import React from 'react'

const SecondPart = () => {
    const data = ['Flights','Hotels','Tours','Cabs','About','Blogs','Services','Policy','Testimonials','Newsletters','Podcasts','Protests','NewsCyber','Education','Sports','Tech and Auto','Opinion','Share Market','Contact us',"Details Page"]

  return (
    <div className="w-full">
    <h1 className="text-white text-[21px] font-bold pb-[7px]">Top Links</h1>
    <div className=" w-full flex flex-wrap">
        {
            data.map((i,index) => (
                <a href="#" key={index} className="text-[15px] mt-[10px] mr-[12px] block hover:text-primary duration-500">{i}</a>
            ))
        }
    </div>
  </div>
)
}

export default SecondPart