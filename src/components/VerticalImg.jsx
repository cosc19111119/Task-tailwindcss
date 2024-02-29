import React from 'react'

function VerticalImg({img,title}) {
    return (
      <div className=''>
        <div className='relative z-0'>
          <img className='' src={img} alt="image" />
          <p className='absolute ml-[-42px] text-[38px] left-0 font-bold top-44 transform rotate-90 text-center z-10 text-white'>
            {title}
          </p>
          <div className="w-14 relative top-[-62px] ml-[18px] static z-50 h-14 rounded-full flex items-center justify-center bg-white">
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }

export default VerticalImg