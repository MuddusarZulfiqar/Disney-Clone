import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import db from '../firebase'
function Detail() {
    const {id} = useParams()
    const [movies,setMovies] = useState()
    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovies(doc.data())
            }
            else{
                //redirect to the home page
            }
        })
    }, [id])
    return (
        <Container>
            {
                movies &&
                <>
                    <Background >
                        <img src={movies.backgroundImg} />
                    </Background>
                    <ImageTitle>
                        <img src={movies.titleImg} />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" />
                            <span>Play</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" />
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="Group icon" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>{movies.subTitle}</SubTitle>
                    <Description>
                        {movies.description}
                    </Description>
                </>
            }
            
        </Container>
    )
}

export default Detail

const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom:0px;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    @media screen and (min-width:767px){
        padding-top:40px;
        padding-bottom:20px;
    }
    img{
        width:100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249,249,249);
    border: none;
    padding: 0px 24px;
    margin-right:22px;
    letter-spacing:1.8px;
    cursor:pointer;
    span{
        color: #000;
        text-transform: uppercase;
    }
    &:hover{
        background: rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(244,244,244);
    span{
        color:rgb(244,244,244);
    }
`
const AddButton = styled.button`
    margin-right: 16px;
    width:44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid #fff;
    background-color:rgba(0,0,0,0.65);
    cursor:pointer;
    span{
        font-size:30px;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
`

const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:20px;`
const Description = styled(SubTitle)`
    font-size:20px;
    line-height:1.4;
    margin-top:16px;
    max-width:750px;

`