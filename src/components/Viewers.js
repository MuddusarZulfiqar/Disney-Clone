import React from 'react'
import styled from 'styled-components'
function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="viewers-disney" />
                <video src="/videos/1564674844-disney.mp4"  autoPlay={true} loop={true} />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="viewers-disney" />
                <video src="/videos/1564676714-pixar.mp4"  autoPlay={true} loop={true} />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="viewers-disney" />
                <video src="/videos/1564676115-marvel.mp4"  autoPlay={true} loop={true} />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="viewers-disney" />
                <video src="/videos/1608229455-star-wars.mp4"  autoPlay={true} loop={true} />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="viewers-disney" />
                <video src="/videos/1564676296-national-geographic.mp4"  autoPlay={true} loop={true} />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top:30px;
    padding: 30px 0 26px;
    display: grid;
    grid-template-columns: repeat(5,minmax(0,1fr));
    grid-gap: 25px;
    @media screen and (max-width:991px){
        grid-template-columns: repeat(4,minmax(0,1fr));
    }
    @media screen and (max-width:767px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`
const Wrap = styled.div`
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.49) 0s;
    box-shadow:rgba(0,0,0,0.69) 0px 26px 30px -10px,
                rgba(0,0,0,0.73) 0px 16px 10px -10px;
    position: relative;
    video{
        position: absolute;
        top: 0;
        left:0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        z-index:-1;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.49) 0s;
    }
    &:hover{
        box-shadow:rgba(0,0,0,0.80) 0px 26px 30px -10px,
                rgba(0,0,0,0.72) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        video{
            opacity:1;
        }
    }
`