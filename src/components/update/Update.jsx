import React from 'react'
import email from '../../assets/email.png'
import update from '../../assets/update.png'

function Update() {
    return (
        <>

            <div className="container mx-auto my-10">
                <div class="grid grid-cols-2 gap-4  ">
                    <div className=''>
                        <img className='my-10' src={email} alt="" />
                        <h2 className='font-bold text-3xl mb-5'>Stay Updated !</h2>
                        <p className='text-gray-300	'>Stay updated with real-time order tracking and notifications <br />
                         on the Paaysano app, ensuring you’re always in the loop with <br />
                          your orders.</p>
                    </div>
                    <div className=' grid justify-end'>
                        <img src={update} alt="" />
                        

                    </div>

                </div>
            </div>






        </>
    )
}

export default Update