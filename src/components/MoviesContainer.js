import React from 'react'
import MoviesForm from './MoviesForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'
import { Container } from 'react-bootstrap'

const MoviesContainer = (props) => {


    return (
        <div style={{
            display: 'block',
            width: 800, padding: 50
        }}>

            <Container>
                <MoviesForm />
                <MovieStats />
                <MoviesList />
            </Container>
        </div>


    )

}

export default MoviesContainer