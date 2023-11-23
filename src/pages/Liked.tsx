import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../slices';
import MovieListHeading from '../components/MovieListHeading';
import MovieList from '../components/MovieList';

export default function Liked() {
  const movies = useSelector((state: RootState) => state.liked);
  return (
    <>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Liked Movies" />
      </div>
      <div className="row">
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </>
  );
}
