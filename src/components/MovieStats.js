import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findMovie } from '../actions/movieActions'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'



const MovieStats = (props) => {
    const dispatch = useDispatch()
    // const [topMovie, setTopMovie] = useState({})
    const movies = useSelector((state) => {
        return state.movieList
    })

    const maxValue = [...movies].length > 0 && [...movies].sort((a, b) => b.ranking - a.ranking)

    const useStyles = makeStyles({
        title: {
            fontSize: 40,
            fontFamily: "Montserrat",
        },
        card: {
            borderRadius: 0,
            backgroundColor: "#1b1b1b",
            color: "white",
            boxShadow: "none"
        }
    })

    const classes = useStyles();

    return (
        <Card style={{ marginBottom: "160px", marginRight: "30px" }} classes={{ root: classes.card }} >
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} variant="h3">Movie stats</Typography>
                <Typography variant="h4">Total movies - {movies.length}</Typography>
                {movies.length > 0 && <Typography variant="h5">Top ranked movie: #{maxValue[0].movieName}</Typography>}
            </CardContent>

        </Card >
        // <div style={{ margin: "60px" }} class="position-absolute top-50 start-50 translate-middle">
        //     <h1>Movie stats</h1>
        //     <h2>Total movies - {movies.length}</h2>

        //     {movies.length > 0 && <h3> Top ranked movie: #{maxValue[0].movieName}</h3>}
        // </div>
    )
}


export default MovieStats