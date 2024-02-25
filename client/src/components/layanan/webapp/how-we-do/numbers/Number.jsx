import React from 'react';

function Number({ number, isLast, isHovered }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute flex flex-col top-0 items-center">
        <p className={`text-[22px] ${isHovered ? 'text-black' : 'text-[#B5B5B5]'}`}>{number}</p>
        {!isLast && <div className={`border border-l-[1.5px] ${isHovered ? 'border-black' : 'border-[#b5b5b5]'} h-[80px] mx-4 inline-block`} />}
      </div>
      <p className={`text-[22px] ${isHovered ? 'text-[#B5B5B5]' : 'text-black'}`}>{number}</p>
      {!isLast && <div className={`border border-l-[1.5px] border-[#b5b5b5] h-[160px] mx-4 inline-block`} />}
    </div>
  );
}

export default Number;
