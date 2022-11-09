import FirstSection from "../pages/About/FirstSection"
import Member from "../pages/About/Member"
import Navbar from "../pages/About/Navbar"
import Pargaraph from '../pages/About/Pargaraph'
import SecondSection from "../pages/About/SecondSection"
import Services from "../pages/About/Services"
import Footer from "../pages/Home/footer/Footer"


const About = () => {



  return (
    <>
    <div className="dark:bg-dark dark:text-white flex flex-col items-center">
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
         <Pargaraph/>
         <Services/>
         <Member/>     
    </div>
      <Footer/>
    </>

  )
}

export default About