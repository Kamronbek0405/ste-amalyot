import React from 'react';
import { usePhoneGet } from './service/query/usePhoneGet';
import { PhonesCard } from '../../../../components/phones-card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Phones = () => {

    const { data } = usePhoneGet();
    console.log(data);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return (
        <div >

            <div  >
                <Slider {...settings}>
                    <div className='h-[450px] '>
                        {data?.slice(0, 1).map((item) => <PhonesCard key={item.id} {...item} />)}
                    </div>
                    <div>
                        {data?.slice(1, 2).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(2, 3).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(3, 4).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(4, 5).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(5, 6).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(7, 8).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(8, 9).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(9, 10).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(10, 11).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                    <div>
                        {data?.slice(11, 12).map((item) => <PhonesCard key={item.id} {...item} />)}

                    </div>
                </Slider>
            </div>
        </div>
    )
}
