import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { movieLists } from '../actions/movieActions'
import { TextField, Button } from '@material-ui/core'


const MoviesForm = (props) => {

    const dispatch = useDispatch()
    const [movieName, setMovieName] = useState("")
    const [rank, setRank] = useState("")
    const image = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/warr-770x433.jpeg?54Ca7.SmVmwNrlVarS3qz4.4AmY_AbOj"

    const handleChange = (e) => {
        if (e.target.name == "movie") {
            setMovieName(e.target.value)
        } else if (e.target.name == "rank") {
            setRank(e.target.value)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            movieName: movieName,
            ranking: rank,

        }

        movieName && dispatch(movieLists(formData))
        setMovieName("")
        setRank("")


    }

    return (
        <div style={{ margin: "50px", marginRight: "100px" }} class="position-absolute top-0 end-0" m>
            <h1 > Add movie</h1>
            <form onSubmit={handleSubmit} style={{ padding: "10px" }} >
                <TextField
                    color="secondary"
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Enter movie name"
                    variant="filled"
                    size="small"
                    value={movieName} onChange={handleChange} name="movie"
                    margin="dense"

                />
                <br />
                <TextField
                    color="secondary"
                    margin="10px"
                    margin="dense"
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    defaultValue="IMDB Ranking"
                    variant="filled"
                    value={rank} onChange={handleChange} name="rank"
                />
                <br />


                {/* <div class="mb-3">

                    <input type="text" placeholder="Enter movie name" value={movieName} onChange={handleChange} name="movie" />
                </div>
                <div class="mb-3">
                    <input type="text" placeholder="IMDB Ranking" value={rank} onChange={handleChange} name="rank" />

                </div> */}
                <Button variant="contained" type="submit" color="secondary">Add</Button>



            </form>

        </div>
    )
}

export default MoviesForm