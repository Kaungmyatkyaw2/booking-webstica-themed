
const FlightLast = () => {
    const data = [
        {
          img : 'https://booking.webestica.com/assets/images/blog/02.jpg',
          autor : 'Jacqueline Miller',
          title : 'Story of water world adventure'
        },
        {
          img : 'https://booking.webestica.com/assets/images/blog/03.jpg',
          autor : 'France Gueereo',
          title : 'How Hotel Technology Can Help Small Hotel Business'
        },
        {
          img : 'https://booking.webestica.com/assets/images/blog/04.jpg',
          autor : 'Louis Ferguson',
          title : 'Hotel Service - Become a Guide for Your Guests'
        }
      ]
  return (
<div className='container-cus space-y-[50px] pb-[90px]'>
          <h1 className='sm:text-[48px] text-[30px] font-bold text-center'>Latest Blogs & News</h1>
          <div className='w-full flex flex-wrap justify-between lg:space-y-0 space-y-[50px]'>
            <div className='lg:w-[48%] w-full'>
              <div className='w-full space-y-[20px] group cursor-pointer'>
                <img src="https://booking.webestica.com/assets/images/blog/01.jpg" className='w-full rounded-[10px]' alt="" srcset="" />
                <div className='pl-[10px]'>
                  <a href='#' className='lg:text-[30px] text-[21px] font-bold group-hover:text-primary duration-300'>10 Ways on How to Improve your Hotel Operations</a>
                </div>
              </div>
            </div>
            <div className='lg:w-[48%] w-full space-y-[50px]'>
              {
                data.map((i,index) => (
                  <div key={index} className='w-full flex sm:flex-row flex-col sm:justify-start justify-center sm:items-center sm:space-x-[20px] sm:space-y-0 space-y-[20px] cursor-pointer group'>
                    <img className='sm:w-[30%] w-full rounded-[10px]' src={i.img} alt="" sizes=""/>
                    <div className='space-y-[10px] sm:pl-0 pl-[10px]'>
                      <h1 className='font-bold sm:text-[20px] text-[21px] group-hover:text-primary duration-300'>{i.title}</h1>
                      <p className='text-gray-500 sm:text-[14.5px]'>{i.autor}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>  )
}

export default FlightLast