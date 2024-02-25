import React from 'react'
import Number from './Number'

function Numbers({dataCards, onHover}) {
  return (
    <div className="my-[50px]">
        {dataCards.map((number,index) => (
                    <Number key={index} number={"0"+(index+1)} isLast={index === dataCards.length - 1} onHover={onHover}/>
                    ))}
    </div>
  )
}

export default Numbers