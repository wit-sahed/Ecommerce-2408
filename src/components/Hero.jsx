import React from 'react'
import HeroImg from "../assets/promotional.png"
import Slider from "react-slick";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <section>
        <div className="container mx-auto">
            <Slider {...settings}>
                <div className="">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="">
                    <div className="">
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
                <div className="">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="">
                    <img src={HeroImg} alt="" />
                </div>
            </Slider>
        </div>
    </section>
  )
}

export default Hero
