import React from 'react'

export const PhonesCard = ({img, title, rame, color, brand, price}) => {
  return (
    <div className='w-[250px] border-black h-[350px] shadow-lg shadow-gray-400 hover:scale-125 p-10 flex flex-col items-start justify-center'>
        <img className='w-[165px] h-[165px] ' src={img} alt="img" />
       <div>
       <h1 className=''>{title} </h1>
        <p className=''>{rame}</p>
        <span className=''>{color}</span>
        <span className=''>{brand}</span>
       </div>
        <span className=''>{price}Сум</span>
    </div>
  )
}
