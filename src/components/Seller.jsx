import React from 'react'

function Seller() {

    const card = [
        {
            id:1,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: "(9676 Reviews)",
            reviews: "sdfsdf"
        },
        {
            id:2,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: "(9676 Reviews)",
            reviews: "sdfsdf"
        },
        {
            id:3,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: "(9676 Reviews)",
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
                                    <img src={item.image} alt="" />
                                    <div class="font-bold text-2xl  px-4  py-3">{item.title}</div>
                                    <p class=" text-base px-4  pt-3 pb-8 ">{item.rating}</p>
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