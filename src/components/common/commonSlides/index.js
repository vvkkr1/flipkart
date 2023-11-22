import React from 'react'
import './commonItems.css';

//carousel library react-slick
import Slider from 'react-slick'
import CommonItemSlides from './commonSlidesItem';

const commonSlides =[
    {
        id:1,
        slide:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ab11f518b2101663.jpeg?q=20",
    },
    {
        id:2,
        slide:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2da33c1238c11b6f.jpg?q=20"
    },
    {
        id:3,
        slide:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f842e209a3be4c4d.jpeg?q=20"
    },
    {
        id:4,
        slide:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e7b836f743099e05.jpg?q=20"
    },
    {
        id:5,
        slide:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/537c6ef6554072c1.jpg?q=20"
    },
    {
        id:6,
        slide:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d5a2a6481656bb58.jpeg?q=20"
    },
    {
        id:7,
        slide:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6de299fee86ffd28.jpg?q=20"
    }

]


const CommonItems = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='common-items'>
        <div className='wrap'>
          <Slider {...settings}>
            {/* {commonSlides && commonSlides.map((item)=>{
                return <CommonItemSlides item = {item}/>
            })} */}
          </Slider>  
        </div>
    </div>
  )
}

export default CommonItems