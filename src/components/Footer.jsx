import React from 'react'
import  './footer.css'

function Footer() {
    return (
        <div div className='my-10 '>
            <div className="container mx-auto">
                <div className="grid  grid-cols-5 gap-7">
                    <div className='col-span-2 '>
                        <img src="public/assets/logo.png"  className='w-16' alt="logo" />
                        <h3 className='leading-8	'>PAY<span className='textcolor font-normal'>SANO</span></h3>
                        <span className='my-3 block '>
                            This app seamlessly integrates local restaurants <br />
                             and stores, allowing users to explore nearby <br /> 
                             restaurants for online food orders with detailed <br />
                              menu information.
                        </span>
                    </div>

                    <div className=''>
                        <ul>
                            <li className='leading-8'><a href="#"><span className='font-bold'>Support</span></a></li>
                            <li className='leading-8'><a href="#">Home</a></li>
                            <li className='leading-8'><a href="#">About</a></li>
                            <li className='leading-8'><a href="#">FAQs</a></li>
                            <li className='leading-8'><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='leading-8'><a href="#"><span className='font-bold'>Trending</span></a></li>
                            <li className='leading-8'><a href="#">Shop</a></li>
                            <li className='leading-8'><a href="#">Portfolio</a></li>
                            <li className='leading-8'><a href="#">Blog</a></li>
                            
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className='leading-8'><a href="#"><span className='font-bold'>Features</span></a></li>
                            <li className='leading-8'><a href="#">Help Center</a></li>
                            <li className='leading-8'><a href="#">Paid with Mobile</a></li>
                            <li className='leading-8'><a href="#">Status</a></li>
                            <li className='leading-8'><a href="#">Contact Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t-2 py-4'>
                <div className='container mx-auto'>

                    <p className='text-zinc-400'>Copyrights © 2023 All Rights Reserved by SemiColonWeb </p>
                    
                </div>

            </div>
            
           
        </div>
    )
}

export default Footer