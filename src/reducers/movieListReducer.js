const movieListInitialState = []

const usersReducer = (state = movieListInitialState, action) => {

    switch (action.type) {

        case 'MOVIE_LIST': {
            return [...state, action.payload]
        }
        case 'SORTED_DATA': {
            if (action.payload === "ascending") {
                return [...state.sort((a, b) => a.ranking - b.ranking)]

            } else if (action.payload === "descending") {

                return [...state.sort((a, b) => b.ranking - a.ranking)]

            } else {
                return [...state]
            }
        } case 'DELETE_POST': {
            const deletedData = state.filter((ele) => {
                return ele.id !== action.payload
            })
            return [...deletedData]
        }

        default: {
            return [...state]
        }
    }

}
export default usersReducer

