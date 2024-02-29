import React from 'react'
import { IoIosStar } from "react-icons/io";


function Seller() {

    const card = [
        {
            id: 1,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: <IoIosStar />,
            reviews: "(9676 Reviews)"
        },
        {
            id: 2,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: <IoIosStar />,
            reviews: "(9676 Reviews)"
        },
        {
            id: 3,
            image: "public/assets/frame1.png",
            title: "Live Healthy Organics",
            rating: <IoIosStar />,
            reviews: "(9676 Reviews)"
        }

    ]
    return (
        <div div className=' container mx-auto my-10'>
            <div className='grid justify-center text-center w-6/12		 mx-auto'>
                <h1 className='text-4xl font-medium leading-tight		'>Our Top <span className='text-[#8BC63E]'>Stores</span></h1>
                <p>Discover an enhanced search experience, personalized recommendation, streamlined ordering, and faster checkout in our latest update.Elevate yor app usage with these improvements.</p>
            </div>
            {
                <div className=' grid  gap-4 m-3 sm:grid-cols-2 lg:grid-cols-3     overflow-hidden   '>
                   
                    {
                        card.map(item => {
                            return <div key={item.id}>
                                <div class="    rounded-xl">
                                    <img src={item.image} alt="" />
                                    <div class="font-bold text-2xl  px-4  py-3">{item.title}</div>
                                    <div className="card-body flex justify-between px-6">
                                        <div className='flex items-center'>
                                            <p class="     text-yellow-400">{item.rating} </p>
                                            <p class=" text-yellow-400">{item.rating}</p>
                                            <p class="     text-yellow-400">{item.rating}</p>
                                            <p class="      text-yellow-400">{item.rating}</p>
                                            <p class="  text-gray-400">{item.rating}</p>
                                            <span className='text-black'>4.0</span>
                                        </div>
                                        <p className='text-base'>{item.reviews}</p>
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