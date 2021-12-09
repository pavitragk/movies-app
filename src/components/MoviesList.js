import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from './MovieCard'
import { sortingData } from '../actions/movieActions'

const MoviesList = (props) => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleDropDown = (e) => {
        dispatch(sortingData(e.target.value))
    }

    return (
        <div>
            <input type="text" value={search} placeholder="search by name" onChange={handleSearch} />
            <select style={{ margin: "10px" }} onChange={handleDropDown}>
                <option >---order by----</option>
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>

            </select>

            <MovieCard search={search} />

        </div>

    )

}

export default MoviesList