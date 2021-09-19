import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'
function ImageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
    padding-top: 20px;
    .slick-list{
        overflow:visible;
    }
    ul li button::before{
        font-size: 10px;
        color: rgb(150,158,171);
    }
    li.slick-active button::before{
        color: #fff;
    }
    button{
        z-index: 1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        width:100%;
        height:100%;
        border-radius: 4px;
        box-shadow:rgba(0,0,0,0.69) 0px 25px 30px -10px,
                    rgba(0,0,0,0.73) 0px 16px 10px -10px;
                    
        border: 4px solid transparent;
        transition: 300ms;
        &:hover{
            border-color: rgba(249,249,249,0.8);
        }
    }
`