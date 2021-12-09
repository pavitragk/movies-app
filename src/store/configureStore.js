import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import movieListReducer from '../reducers/movieListReducer'



const configureStore = () => {
    const store = createStore(combineReducers({
        movieList: movieListReducer


    }), applyMiddleware(thunk))

    return store
}

export default configureStore