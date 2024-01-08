import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import { bannerData } from "../../constants/data";

// import "./styles.scss";
import "./styles.css";
// import {styled} from "@mui/material";



const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
    return(
      <div className="carousel-wrap">
        <Carousel 
            responsive={responsive}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            swipeable={false}
            draggable={false}
            // showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed= {4000}
            keyBoardControl={true}
            slidesToSlide={1}
        >
              {bannerData.map((item)=>{
                return(
                    <img  className = "slide-img" src={item.url} alt="img"/>
                )
                })}
        </Carousel>
      </div>
    )

}
export default Banner;