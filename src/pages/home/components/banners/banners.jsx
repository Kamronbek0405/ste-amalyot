import React from 'react'
import { useBannersGet } from './service/query/useBannersGet'
import { BannersCard } from '../../../../components/banners'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export const Banners = () => {
    const {data} = useBannersGet()

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,           
        autoplaySpeed: 3000,
        arrows: false, 
      };
      
  return (
    <div className='mt'>
        <Slider {...settings}>
      <div>
      {data?.slice(0, 1).map((item)=> <BannersCard key={item.id} {...item}/>) }
      </div>
      <div>
      {data?.slice(1, 2).map((item)=> <BannersCard key={item.id} {...item}/>) }

      </div>
      <div>
      {data?.slice(2, 3).map((item)=> <BannersCard key={item.id} {...item}/>) }

      </div>
    </Slider>
        
        
    </div>
  )
}
