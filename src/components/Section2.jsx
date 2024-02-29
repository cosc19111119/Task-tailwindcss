import React from 'react'
import VerticalImg from './VerticalImg';

function Section2() {
    return (
      <>
        <div className='bg-white text-center'>
          <div className='text-[55px] font-bold pt-4 '>Hello & Welcome</div>
          <p className='text-[#A1A3A0]'>Explore nearby restaurants and shops, discover enticing menus,<br /> read reviews, and effortlessly place orders.<span className='text-green-500'> Welcome to Paaysano-</span><br />where convenience meets local delights.</p>
        </div>
        <div className='text-center pt-6 mr-20'>
          <span className='relative z-20 rounded-full font-bold inline-block px-16 py-3 bg-green-400'>Restaurants</span>
          <span className='absolute ml-[-35px] z-10 mr-8 font-bold text-[#A1A3A0] rounded-r-full inline-block px-16 py-3 bg-gray-300'>Store</span>
        </div>
        <div className='flex mx-44 gap-10 mt-10'>
        <VerticalImg img="public/assets/verImage.png" title="Vegetables" /> 
        <VerticalImg  img="public/assets/verImage1.png" title="Vegetables"/> 
        <VerticalImg img="public/assets/verImage2.png" title="Vegetables"/>
        <VerticalImg img="public/assets/verImage.png" title="Vegetables"/>
        <VerticalImg img="public/assets/verImage1.png" title="Vegetables"/>
        <VerticalImg img="public/assets/verImage2.png" title="Vegetables"/>
        <VerticalImg img="public/assets/verImage.png" title="Vegetables"/>
        <VerticalImg img="public/assets/verImage1.png" title="Vegetables"/>
        </div>
        
      </>
    );
  }

export default Section2