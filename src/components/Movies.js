import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { selectMovie } from '../features/Movie/MovieSlice'
import {useSelector} from 'react-redux'
function Movies() {
    const movies = useSelector(selectMovie)
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {
                    movies && movies.map(movie=>(
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.cardImg} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Movies
const Container = styled.div`
    h4{
        text-transform: uppercase;
    }
`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
    @media screen and (max-width:991px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`
const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid rgba(244,244,244,0.1);
    box-shadow:rgba(0,0,0,0.69) 0px 26px 30px -10px,
                rgba(0,0,0,0.73) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.49) 0s;
    img{
        width:100%;
        height: 100%;
        object-fit:cover;
    }
    &:hover{
        transform: scale(1.05);
        box-shadow:rgba(0,0,0,0.80) 0px 26px 30px -10px,
                rgba(0,0,0,0.72) 0px 16px 10px -10px;
        border-color: rgba(249,249,249,0.8);
    }
`