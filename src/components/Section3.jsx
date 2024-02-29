import React from 'react';
import Card from './Card';

function Section3() {
    return (
      <div className="grid grid-cols-4">
        <div className="relative row-span-2">
          <div className="absolute inset-0 bg-[url('public/assets/bgImage.png')] bg-cover z-0 overflow-hidden"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
            <p class="text-white text-2xl font-bold">Vegetables</p>
            <button className="bg-green-500 mt-5 hover:bg-green-300 text-white py-2 px-8 rounded-full">
              view all
            </button>
          </div>
        </div>
  
        <Card
        img="public/assets/image1.png"
          date="Dec 26, 2021"
          price="19"
          itemName="CUCUMBER"
          discount="4"
          description="Fresh, Vibrant, locally sourced ..."
        />
        <Card
        img="public/assets/image1.png"
          date="Dec 26, 2021"
          price="19"
          itemName="CUCUMBER"
          discount="4"
          description="Fresh, Vibrant, locally sourced ..."
        />
        <Card
        img="public/assets/image1.png"
          date="Dec 26, 2021"
          price="19"
          itemName="CUCUMBER"
          discount="4"
          description="Fresh, Vibrant, locally sourced ..."
        />
        <Card
        img="public/assets/image1.png"
          date="Dec 26, 2021"
          price="19"
          itemName="CUCUMBER"
          discount="4"
          description="Fresh, Vibrant, locally sourced ..."
        />
        <Card
        img="public/assets/image1.png"
          date="Dec 26, 2021"
          price="19"
          itemName="CUCUMBER"
          discount="4"
          description="Fresh, Vibrant, locally sourced ..."
        />
        <Card
        img="public/assets/image1.png"
          date="Dec 26, 2021"
          price="19"
          itemName="CUCUMBER"
          discount="4"
          description="Fresh, Vibrant, locally sourced ..."
        />
      </div>
    );
  }

export default Section3;
