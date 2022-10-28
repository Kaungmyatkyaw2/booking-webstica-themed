import NavIconPart from './NavIconPart'
import NavRightPart from './NavRightPart'

const Navbar = () => {
  return (

        <div className='w-full flex justify-center bg-white xl:sticky top-0 left-0 z-[999] relative'>
          <div className='xl:w-[80%] w-full container-padding-x xl:py-[28px] py-[10px] font-dm flex items-center justify-between'>

          <NavIconPart/>
          <NavRightPart/>

          </div>
        </div>

  )
}

export default Navbar