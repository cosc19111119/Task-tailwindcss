import React from 'react'


    function Card({ date, price, itemName, discount, description ,img}) {
        return (
          <div className="border border-solid border-grey-300">
            <div className="flex flex-col justify-between p-6 h-full">
              <img src={img} alt="Top Image" className="w-full h-auto" />
              <div className="flex flex-col">
                <div className='flex justify-between'>
                  <div className='flex text-gray-400'>
                    <img className='text-gray-400' src="public/assets/Calendar.png" alt="" />
                    <span className='text-gray-400'>{date}</span>
                  </div>
                  <div className='text-green-500'>${price}/kg</div>
                </div>
                <div className='flex justify-between'>
                  <span className='text-black'>{itemName}</span>
                  <span className='text-green-500'>{discount}%</span>
                </div>
                <p className='text-gray-600'>{description}</p>
              </div>
            </div>
          </div>
        );
      }
      
  

export default Card