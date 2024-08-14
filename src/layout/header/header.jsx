import React from 'react'
import { LogoIcon } from '../../assets/logo-icon'
import { Button } from '../../components/ui/buttton'
import { Menu } from '../../assets/menu'
import { Input } from '../../components/ui/input'
import { Search } from '../../assets/search'
import { User } from '../../assets/user'
import { Like } from '../../assets/like'
import { Basket } from '../../assets/basket'


export const Header = () => {
  return (
    <div className='w-[100%] p-5  shadow-lg shadow-gray-300 flex items-center justify-around '>
      <LogoIcon/>
      <Button startIcon={<Menu/>} className={"flex items-center justify-around w-[150px] font-medium h-[48px] bg-yellow-300"}>Каталог</Button>
      <div className='flex items-center w-[500px] h-[48px] border-2 border-gray-300 justify-between px-5 '>
      <Input className={"w-[250px] h-[30px] rounded-full px-3 outline-none"} placeholder={"Поиск"}/>
      <Search/>
      </div>
    <div className='flex items-center'>
    <div  className='w-[80px] h-[60px] flex justify-center items-center flex-col ml-7'>
      <User/>
      <span>Войти</span>
     </div>
     <div className='w-[80px] h-[60px] flex justify-center items-center flex-col ml-7'>
      <Like/>
      <span>Избранное</span>
     </div>
     <div className='w-[80px] h-[60px] relative flex justify-center items-center flex-col ml-7'>
      <Basket/>
      <span className='w-[20px] h-[20px] absolute bottom-11 right-[17px] bg-red-600 rounded-full flex items-center justify-center text-white text-sm'>3</span>
      <span>Корзина</span>
     </div>
    </div>
    </div>
  )
}
