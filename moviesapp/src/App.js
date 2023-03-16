import { useState } from 'react';

import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

import './App.css';


function App() {
  // store the data about a movie
  const [movie, setMovie] = useState(null);

  // fetch data from API
  const getMovie = async (searchTerm) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=2c22418&t=${searchTerm}`)
    const data = await response.json();
    setMovie(data);
  }
  
  return (
    <div className="App">
     <Form movieSearch={getMovie} />

     {movie && <MovieDisplay movie={movie} />}
    </div>
  );
}

export default App;
