import { useState, useEffect } from 'react';

import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17';

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log('response', responseJson);
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Popular Movies" />
      </div>
      <div className="row">
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </>
  );
};

export default App;
