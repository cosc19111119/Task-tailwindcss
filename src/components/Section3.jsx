import React from 'react';

function Section3() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* First Column */}
      <div className="relative row-span-2">
  <div className="absolute   inset-0 bg-[url('public/assets/bgImage.png')] bg-cover  z-0 overflow-hidden">
  </div>
  <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
    <p class="text-white text-2xl font-bold">Vegetables</p>
    <button className="bg-green-500 mt-5 hover:bg-green-300 text-white py-2 px-8 rounded-full">
  view all
</button>

  </div>
</div>


      {/* Second Column */}
      <div className="">
        <div className="flex flex-col justify-between h-full">
          {/* Top Image */}
          <img src="public/assets/image1.png" alt="Top Image" className="w-full h-auto" />
          {/* Bottom Text */}
          <div className="flex flex-col items-center">
            <p className='text-black'>Text 1</p>
            <p className='text-black'>Text 2</p>
            <p className='text-black'>Text 3</p>
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="">
        <div className="flex flex-col justify-between h-full">
          {/* Top Image */}
          <img src="public/assets/image1.png" alt="Top Image" className="w-full h-auto" />
          {/* Bottom Text */}
          <div className="flex flex-col items-center">
            <p className='text-black'>Text 1</p>
            <p className='text-black'>Text 2</p>
            <p className='text-black'>Text 3</p>
          </div>
        </div>
      </div>

      {/* Fourth Column */}
      <div className="">
        <div className="flex flex-col justify-between h-full">
          {/* Top Image */}
          <img src="public/assets/image1.png" alt="Top Image" className="w-full h-auto" />
          {/* Bottom Text */}
          <div className="flex flex-col items-center">
            <p className='text-black'>Text 1</p>
            <p className='text-black'>Text 2</p>
            <p className='text-black'>Text 3</p>
          </div>
        </div>
      </div>

      {/* Merge 1st and 5th Columns */}
      <div className="">
        <div className="flex flex-col justify-between h-full">
          {/* Top Image */}
          <img src="public/assets/image1.png" alt="Top Image" className="w-full h-auto" />
          {/* Bottom Text */}
          <div className="flex flex-col items-center">
            <p className='text-black'>Text 4</p>
            <p className='text-black'>Text 2</p>
            <p className='text-black'>Text 3</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-between h-full">
          {/* Top Image */}
          <img src="public/assets/image1.png" alt="Top Image" className="w-full h-auto" />
          {/* Bottom Text */}
          <div className="flex flex-col items-center">
            <p className='text-black'>Text 1</p>
            <p className='text-black'>Text 2</p>
            <p className='text-black'>Text 3</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col justify-between h-full">
          {/* Top Image */}
          <img src="public/assets/image1.png" alt="Top Image" className="w-full h-auto" />
          {/* Bottom Text */}
          <div className="flex flex-col items-center">
            <p className='text-black'>Text 1</p>
            <p className='text-black'>Text 2</p>
            <p className='text-black'>Text 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
