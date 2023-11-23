import { RootState } from '../slices';
import { Movie, addToLiked, removeFromLiked } from '../slices/liked';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { nanoid } from '@reduxjs/toolkit';

const image_url = 'https://image.tmdb.org/t/p/w185';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = (props: MovieListProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.liked);

  const handleLikeClick = (movie: Movie) => {
    dispatch(addToLiked(movie));
  };

  const handleUnlikeClick = (movie: Movie) => {
    dispatch(removeFromLiked(movie));
  };

  const isMovieLiked = (state: Movie[], movie: Movie) =>
    state.some((liked) => liked.id === movie.id);

  return (
    <>
      {props.movies.map((movie) => (
        <div
          key={nanoid(6)}
          className="image-container d-flex justify-content-start m-2"
        >
          <div className="d-flex  flex-column">
            <img src={`${image_url}/${movie.poster_path}`} alt="movie"></img>

            <div className="like">
              <IconButton
                onClick={() => {
                  return isMovieLiked(state, movie)
                    ? handleUnlikeClick(movie)
                    : handleLikeClick(movie);
                }}
              >
                <FavoriteIcon
                  color={isMovieLiked(state, movie) ? 'error' : 'inherit'}
                />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
