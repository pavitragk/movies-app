import React from 'react'
import MoviesContainer from './components/MoviesContainer'
import { createTheme } from '@material-ui/core/styles'



import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {

  return (
    <div className="body" >
      <h1 style={{ margin: "30px" }}>My big movie list</h1>
      <MoviesContainer />

    </div>
  )
}

export default App