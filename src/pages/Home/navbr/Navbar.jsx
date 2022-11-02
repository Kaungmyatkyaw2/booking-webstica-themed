import { useSelector } from 'react-redux'
import NavIconPart from './NavIconPart'
import NavRightPart from './NavRightPart'

const Navbar = () => {

  const view = useSelector(state => state.userAction.view);

  console.log(view)

  return (

        <div className={`w-full flex justify-center bg-white xl:sticky top-0 left-0 z-[999] relative`}>
          <div className='container-cus xl:py-[10px] py-[10px] font-dm flex items-center justify-between'>

          <NavIconPart/>
          <NavRightPart/>

          </div>
        </div>

  )
}

export default Navbar