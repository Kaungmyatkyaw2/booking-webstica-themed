import About from '../pages/Home/about/About'
import CompanyCard from '../pages/Home/company-card/CompanyCard'
import Download from '../pages/Home/download/Download'
import Feature from '../pages/Home/Feature/Feature'
import Footer from '../pages/Home/footer/Footer'
import Hero from '../pages/Home/hero/Hero'
import Navbar from '../pages/Home/navbr/Navbar'
import Places from '../pages/Home/place/Places'
import Quote from '../pages/Home/quote/Quote'
import Carousel from '../pages/Home/swiper/Carousel'

const Home = () => {
  return (
    <>
    <Navbar/>
      <Hero/>
      <Carousel/>
      <About/>
      <Feature/>
      <CompanyCard/>
      <Quote/>
      <Places/>
      <Download/>
      <Footer/></>
  )
}

export default Home