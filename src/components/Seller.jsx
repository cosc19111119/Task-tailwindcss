import React from 'react'

function Seller() {

    const card = [
        {
            id: 1,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: "(9676 Reviews)",
            reviews: "sdfsdf"
        },
        {
            id: 2,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: "(9676 Reviews)",
            reviews: "sdfsdf"
        },
        {
            id: 3,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: " (9676 Reviews)",
            reviews: "sdfsdf"
        }

    ]
    return (
        <div div className=' container my-10'>
            <div className='grid justify-center text-center w-6/12		 mx-auto'>
                <h1 className='text-4xl font-medium leading-tight		'>Our Top <span className='text-[#8BC63E]'>Stores</span></h1>
                <p>Discover an enhanced search experience, personalized recommendation, streamlined ordering, and faster checkout in our latest update.Elevate yor app usage with these improvements.</p>
            </div>
            {
                <div className=' grid  gap-4 m-3 sm:grid-cols-2 lg:grid-cols-3     overflow-hidden   '>
                    {
                        card.map(item => {
                            return <div key={item.id}>
                                <div class=" dark:bg-black dark:text-white  bgg rounded-xl">
                                    <img className='mb-3' src={item.image} alt="" />
                                    <span className='px-3 mt-3 rounded-full text-gray-900 bg-green-500 py-1'>11: 30 Am- 12:30 Pm</span>
                                    <div class="font-bold text-2xl   py-3">{item.title}</div>
                                    <div className='flex '>
                                        <img src="public/assets/rating.png" alt="" />
                                        <span class=" text-base flex items-center ">     {   item.rating}</span>
                                        </div>
                                </div>


                            </div>
                        })
                    }

                </div>
            }

        </div>
    )
}

export default Seller