import { FirstPart } from "./FirstPart"
import LastPart from "./LastPart"
import SecondPart from "./SecondPart"
import ThirdPart from "./ThirdPart"

const Footer = () => {


    

  return (
    <div className='w-full bg-[#0B0A12] flex justify-center pt-[40px]'>
        <div className='container-cus text-[#ACABAE] space-y-[50px]'>

              <FirstPart/>
              <SecondPart/>
              <ThirdPart/>
              <LastPart/>


            </div>
        </div>
  )
}

export default Footer