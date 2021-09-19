import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase.js'
import { useDispatch } from 'react-redux'
import { setmovies } from '../features/Movie/MovieSlice'
function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        db.collection('movies').onSnapshot((spap) =>{
            let tempMovies = spap.docs.map((doc)=>{
                return {id:doc.id,...doc.data()}
            })
            dispatch(setmovies(tempMovies))
        })
    }, [])
    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &::before{
        content:'';
        background: url('/images/home-background.png') ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center;
        background-attachment: fixed;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom:0;
        z-index: -1;
    }
`