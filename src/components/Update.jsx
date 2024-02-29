
import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        email: yup.string().required(),

    })
    .required()
function Update() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)

    return (
        <>

            <div className="container mx-auto my-10">
                <div class="grid grid-cols-2 gap-4  ">
                    <div className=''>
                        <img className='my-10' src="public/assets/email1.png" alt="" />
                        <h2 className='font-bold text-3xl mb-5'>Stay Updated !</h2>
                        <p className='text-gray-300	'>Stay updated with real-time order tracking and notifications <br />
                            on the Paaysano app, ensuring you’re always in the loop with <br />
                            your orders.</p>
                        <div className='w-100'>
                            <form onSubmit={handleSubmit(onSubmit)} className='my-5' >
                                <div className='flex'>
                                    <input {...register("email")} placeholder='Enter Your Email Address..' className='bg-[#FAFAFA] text-white ps-3 pe-10' />

                                    <input type="submit" value="Subscribe" className='mx-3 text-white p-5 bg-[#8BC63E]' />
                                </div>

                                <p>{errors.email?.message}</p>

                            </form>
                        </div>

                    </div>
                    <div className=' grid justify-end'>
                        <img src="public/assets/email2.png" alt="" />


                    </div>

                </div>


            </div>






        </>
    )
}

export default Update