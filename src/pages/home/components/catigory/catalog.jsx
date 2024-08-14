import React from 'react'
import { useCatalogGet } from './service/query/useCatalogGet'
import { CatalogCard } from '../../../../components/catalog-card';
export const Catigory = () => {
    const {data} = useCatalogGet()
  return (
    <div>
        <div className='w-[100%] h-auto  flex items-center justify-around mt-5'>
        {data?.map((item) => (
            <CatalogCard key={item.id} {...item}/>
        ))}
        </div>
    </div>
  )
}
