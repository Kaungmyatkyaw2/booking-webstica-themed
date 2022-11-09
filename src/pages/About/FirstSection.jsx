import hand from '../../assets/hand.svg'
import happy from '../../assets/happy.svg'
import noti from '../../assets/noti.svg'

const FirstSection = () => {
    const data = [
        {
            img : hand,
            title : '14K+ Global Customers'
        },
        {
            img : happy,
            title : '10K+ Happy Customers'
        },
        {
            img : noti,
            title : '1M+ Subscribers'
        }
    ]
  return (
    <div className="container-cus pt-[50px] flex flex-col items-center">
            <h1 className="xl:text-[3.5rem] lg:text-[3rem] sm:text-[2.6rem] text-[2rem] font-bold text-center">If You Want To See The World <span className="sm:block mt-[-10px]">We Will Help You</span></h1>
            <p className="text-center text-gray-500 text-[18px] sm:w-[90%] w-[100%] sm:py-[10px] py-[12px]">Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</p>
            <div className="w-full flex justify-center items-center sm:space-x-[20px] md:space-y-0 space-y-[20px] pt-[10px] sm:flex-row flex-col flex-wrap md:mt-0 mt-[-20px]">
                {
                    data.map((i,index) => (
                        <div key={index} className="lg:px-[25px] px-[13px] py-[7px] shadow-blurest rounded-[10px] md:w-fit sm:w-[45%] w-fit flex items-center justify-center space-x-[10px] md:first-of-type:mt-0 mt-[20px] dark:bg-[#191B1D]">
                            <img className="w-[20px]" src={i.img} alt="" />
                            <h1 className="font-[500] lg:text-[16px] text-[15.5px]">{i.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default FirstSection