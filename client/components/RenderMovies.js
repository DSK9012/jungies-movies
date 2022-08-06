import Link from 'next/link';
import styles from 'styles/home.module.css';

export default function RenderMovies(props) {
  const { movies, loading, error } = props;

  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;
  if (movies?.Response.toLowerCase() === 'false') return movies.Error;

  return movies?.Search?.map((movie) => {
    return (
      <div className={styles.card} key={movie.imdbID}>
        <Link href={`/${movie.imdbID}`}>
          <a>
            <img
              loading='lazy'
              src={movie.Poster}
              alt='movie-image'
              width='100%'
              height='100%'
              className={styles.movieImage}
            />
            <div className={styles.movieInfo}>
              <h3>{movie.Title}</h3>
              <p>Year : {movie.Year}</p>
              <p>Type : {movie.Type}</p>
            </div>
          </a>
        </Link>
      </div>
    );
  });
}
