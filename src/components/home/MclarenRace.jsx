import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MCLAREN_RACE_LIST } from "../../utils/helper";

const MclarenRace = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,  
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <div className='bg-gray'>
            <div className="container max-w-[1180px] w-full mx-auto xl:pt-[63px] lg:pt-[53.17px] pt-[42.36px] xl:pb-[68px] lg:pb-[59.62px] pb-[44.84px]">
                <Slider {...settings}>
                    {MCLAREN_RACE_LIST.map((obj, i) => (
                        <div className="flex justify-center item-center" key={i}>
                            <img className="w-full rounded overflow-hidden" src={obj.image} alt="car-img" />
                            <h4 className="xl:text-2xl lg:text-xl text-lg text-center mx-auto text-black max-w-[270px] lg:mt-3 md:mt-2 mt-1">{obj.heading}</h4>
                            <p className="lg:text-base text-sm text-black max-w-[290px] mb-3 text-center mx-auto"> {obj.para}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MclarenRace;
