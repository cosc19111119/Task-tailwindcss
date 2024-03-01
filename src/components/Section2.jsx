import React from 'react'


function Section2() {
  const verticalimages = [
    {
      id: "1",
      title: "chinese",
      path: "public/assets/image1.jpg"
    },
    {
      id: "2",
      title: "chinese",
      path: "public/assets/image2.jpg"
    },
    {
      id: "3",
      title: "chinese",
      path: "public/assets/image3.jpg"
    },
    {
      id: "4",
      title: "chinese",
      path: "public/assets/image4.jpg"
    },
    {
      id: "5",
      title: "chinese",
      path:"public/assets/image5.jpg"
    },
    {
      id: "6",
      title: "chinese",
      path: "public/assets/image5.jpg"

    },
    {
      id: "7",
      title: "chinese",
      path: "public/assets/image1.jpg"
    },
    {
      id: "8",
      title: "chinese",
      path: "public/assets/image2.jpg"
    },
  ]
  return (
    <>
      <div className='mx-auto'>


        <div className='bg-white text-center px-12 pt-10'>
          <div className='text-[55px] font-bold '>Hello & Welcome</div>
          <p className='text-[#A1A3A0]'>Explore nearby restaurants and shops, discover enticing menus, read reviews, and effortlessly place orders.<span className='text-green-500'> Welcome to Paaysano-</span>where convenience meets local delights.</p>
        </div>
        <div className='text-center pt-6 mr-20'>
          <span className='relative z-20 rounded-full font-bold inline-block px-16 py-3 bg-green-400'>Restaurants</span>
          <span className='absolute ml-[-35px] z-10 mr-8 font-bold text-[#A1A3A0] rounded-r-full inline-block px-16 py-3 bg-gray-300'>Store</span>
        </div>
        <div className='px-16 py-10'>
          <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-1 lg:gap-0'>
            {
              verticalimages.map((item) => {
                return <div className='relative z-0 '>
                  <img className='h-[380px] w-[60px] rounded-full object-cover' src={item.path} alt="image" />
                  <p className='absolute ml-[-30px] text-[38px] left-0 font-bold top-44 transform rotate-90 text-center z-10 text-white inline-block'>
                    {item.title}
                  </p>
                  <div className="w-10 h-10 relative top-[-62px] text-center z-50  rounded-full flex items-center justify-center bg-white ml-[10px]">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                </div>
              })

            }

          </div>
        </div>

      </div>
    </>
  );
}

export default Section2