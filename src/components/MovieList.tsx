const image_url = 'https://image.tmdb.org/t/p/w185';
const MovieList = (props: any) => {
  const FavoriteComponent = props.favoriteComponent;

  return (
    <>
      {props.movies.map((movie: any, index: any) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={`${image_url}/${movie.poster_path}`} alt="movie"></img>
          <div
            onClick={() => props.handleFavoritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
