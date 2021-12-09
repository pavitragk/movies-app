import axios from 'axios'
export const movieLists = (movieData) => {
    return (dispatch) => {
        axios.get((`https://www.omdbapi.com/?s=${movieData.movieName}&apikey=ad1c94df`))
            .then((response) => {
                const image = response.data.Search[0].Poster
                dispatch(movieList({ ...movieData, img: image }))
            })


    }
}

export const movieList = (movieData) => {

    return {
        type: 'MOVIE_LIST',
        payload: movieData
    }

}

export const sortingData = (value) => {
    return {
        type: 'SORTED_DATA',
        payload: value
    }
}

export const deletePost = (value) => {
    return {
        type: 'DELETE_POST',
        payload: value
    }
}

export const findMovie = (movie) => {
    return {
        type: 'FIND_MOVIE',
        payload: movie

    }
}

