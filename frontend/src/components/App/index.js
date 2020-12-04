import { useState } from 'react';
import {apiSearchByTitle, apiSearchByImdbId } from './../../callAPI'
import './App.css';
import Navigation from './../Navigation'
import SearchBar from '../SearchBar';
import List from '../List';
import movieProjector from './movie-projector.jpg'
import MovieDetails from '../MovieDetails';
import { movieDat, mockList} from './movieData';

function App() {
  const INITIAL_STATE = {q:''}
  const [movieList, setMovieList] = useState(undefined)
  // const [movieList, setMovieList] = useState(mockList)
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [movieData, setMovieData] = useState(undefined)
  // const [movieData, setMovieData] = useState(movieDat)

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const movies = await apiSearchByTitle(formData.q);
    setMovieList(movies.results);
}

  const getMovieDetails = async (id) => {
    const result = await apiSearchByImdbId(id);
    const movie = result.movie;
    setMovieData(movie);
  }

  function landingMessage(){
    return(
    <div>
      <h1>Search for a movie</h1>
      <img src={movieProjector} alt="movie projector" />
    </div>)
  }

  return (
    <div className="App">
      <Navigation />
      < SearchBar handleSubmit={handleSubmit} handleChange={handleChange}/>
        {movieData && <MovieDetails data={movieData}/>}
      {/* {movieList ? <List classProp={'search-result'} listData={movieList} getMovieDetails={getMovieDetails} /> : <h1>Search for a movie</h1>} */}
      {movieList ? <List classProp={'search-result'} listData={movieList} getMovieDetails={getMovieDetails} /> : landingMessage()}
    </div>
  );
}

export default App;
