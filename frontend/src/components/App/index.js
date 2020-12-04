import { useState } from 'react';
import {apiSearchByTitle, apiSearchByImdbId } from './../../callAPI'
import './App.css';
import Navigation from './../Navigation'
import SearchBar from '../SearchBar';
import List from '../List';
import MovieDetails from '../MovieDetails';
import movieDat from './movieData';

function App() {
  const INITIAL_STATE = {q:''}
  const [movieList, setMovieList] = useState(undefined)
  const [formData, setFormData] = useState(INITIAL_STATE)
  // const [movieData, setMovieData] = useState(undefined)
  const [movieData, setMovieData] = useState(movieDat)

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

  return (
    <div className="App">
      <Navigation />
      <section className="section one">
        {movieData && <MovieDetails data={movieData}/>}
      </section>
      < SearchBar handleSubmit={handleSubmit} handleChange={handleChange}/>
      {movieList ? <List listData={movieList} getMovieDetails={getMovieDetails} /> : <h1>Search for a movie</h1>}
  </div>
  );
}

export default App;
