import React from 'react'
import { Catigory } from './components/catigory'
import { Phones } from './components/phones/phones'
import { Banners } from './components/banners'

export const Home = () => {
  return (
    <div className='h-auto'>
      <section className='w-[100%] h-[100vh] flex flex-col justify-center'>
        <Banners/>
      </section>
      <section className='h-[250px]'>
        <Catigory/>
      </section>
      <section className='h-[100vh]'>
        <Phones/>
      </section>
    </div>
  )
}
