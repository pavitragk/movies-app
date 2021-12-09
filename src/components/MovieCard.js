import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost } from '../actions/movieActions'
import { Grid } from '@material-ui/core'
import ImageCard from './ImageCard'

const MovieCard = (props) => {
    const dispatch = useDispatch()
    const { search } = props
    const movies = useSelector((state) => {
        return state.movieList
    })

    const filteredData = movies.filter((movie) => {
        return movie.movieName.includes(search)
    })

    const handleDelete = (id) => {
        dispatch(deletePost(id))
    }

    const styleProp = {
        padding: "10px"
    }



    return (
        <Grid container spacing={4} style={{ margin: "10px" }} >
            {filteredData.map((ele) => {
                return (
                    <ImageCard movie={ele} key={ele.id} handleDelete={handleDelete} />
                )
            })}

        </Grid>

    )

}

export default MovieCard