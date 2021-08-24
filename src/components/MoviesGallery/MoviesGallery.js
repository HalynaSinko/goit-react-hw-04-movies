import MoviesItem from "../MoviesItem";

const MoviesGallery = ({ movies, url, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MoviesItem
          key={movie.id}
          url={url}
          location={location}
          movieId={movie.id}
          title={movie.title}
        />
      ))}
    </ul>
  );
};

export default MoviesGallery;
