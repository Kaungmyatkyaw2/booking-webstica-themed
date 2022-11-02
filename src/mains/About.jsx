import FirstSection from "../pages/About/FirstSection"
import Navbar from "../pages/About/Navbar"


const About = () => {
  return (
    <>
        <Navbar/>
        <FirstSection/>
        
        <div className="container-cus py-[60px]">
            <div className="w-full flex flex-wrap items-center">
                <div className="md:w-[50%] w-full pb-[26px] md:pr-[13px]">
                    <img className="w-full rounded-[10px]" src="https://booking.webestica.com/assets/images/about/02.jpg" alt="" />
                </div>
                <div className="md:w-[50%] w-full space-y-[26px] md:pl-[13px]">
                    <img className="md:w-[65%] w-full rounded-[10px]" src="https://booking.webestica.com/assets/images/about/03.jpg" alt="" />
                    <img className="w-full rounded-[10px]" src="https://booking.webestica.com/assets/images/about/04.jpg" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default About