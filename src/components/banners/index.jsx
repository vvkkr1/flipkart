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
        <Carousel responsive={responsive}>
            {/* <h2>hello</h2> */}
            {bannerData.map((item)=>{
                return(
                    <img  className = "slide-img" src={item.url} alt="img"/>
                )
            })}
        </Carousel>
    )

}
export default Banner;