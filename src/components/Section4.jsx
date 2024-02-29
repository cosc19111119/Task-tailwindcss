import React from 'react'

function Section4() {
    return (
      <div className="flex items-center justify-center shadow-gray-500 p-10 bg-gray-100">
        <div className=" bg-white rounded-lg  p-10  flex">
          <div className=" h-80">
            <img src="public/assets/image2.png" alt="Your Image" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 px-5 pt-3">
            <h2 className="text-2xl font-bold mb-4">Fresh Organic Peas</h2>
           
           
            <p className="text-base font-medium">Fresh organic peas are a vibrant green legume celebrated for their crisp texture and sweet, delicate flavor. Bursting with nutrients, they are a rich source of vitamins, minerals, and antioxidants. Their tender pods house plump, succulent peas that add a burst of freshness to salads, stir-fries, or enjoyed on their own. </p>
            <div className='flex justify-between mt-4'>
                  <div className='text-black'>Estimated Delivery Time</div>
                  <div className='text-green-500'> 2 - 3 days </div>
                </div>
                <div className='flex justify-between mt-4'>
                  <div className='text-black'>VAT VALUE</div>
                  <div className='text-green-500'> 4% </div>
                </div>
                <h2 className='mt-5 font-bold text-green-500'>$27.00</h2>
               
         </div>
         
          
        </div>
        
      </div>
    );
  };

export default Section4