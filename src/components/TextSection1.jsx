import React from 'react'

function TextSection1() {
  return (
    <div className='px-12 grid pb-6'>
      <div className=" md:text-7xl font-bold pt-24 text-5xl md:text-start text-center">
        <span className="text-black ">Unveiling the Finest <br /> </span>
        <span className="text-green-500">Restaurants </span>
        <span className="text-black">and </span>
        <span className="text-green-500">Stores</span>
      </div>
      <div className='pt-4'>
        <span className='text-black  md:text-3xl text-2xl'>
          Savor culinary wonders and explore curated retail gems on our platform. Indulge in diverse restaurant menus and discover unique store products, all in one place.
        </span>
      </div>
      <div className='text-center md:text-start '>
      <button className="bg-green-500 mt-5 hover:bg-green-300 font-medium text-black py-3 px-6 rounded-3xl md:rounded-none">
        Start Your Exploration
      </button>
      </div>
     

    </div>

  )
}

export default TextSection1