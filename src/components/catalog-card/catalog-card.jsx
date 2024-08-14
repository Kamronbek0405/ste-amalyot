import React from 'react'

export const CatalogCard = ({img, text, name}) => {
  return (
    <div className='w-[241px] h-[124px]  bg-slate-300 flex items-center justify-between px-7 gap-2'>
        <img className='w-[90] h-[90px]' src={img} alt="img" />
        <h1>{text}</h1>
    </div>
  )
}
