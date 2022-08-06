import client from 'graphql/apollo-client';

import { GET_MOVIE_INFO, GET_MOVIES } from 'graphql/queries';

import styles from 'styles/home.module.css';

import Head from 'next/head';

export default function MovieDetails({ movie }) {
  if (!movie) return 'Loading...';

  if (movie?.Response.toLowerCase() === 'false') return movie.Error;

  return (
    <>
      <Head>
        <title>{movie.Title}</title>

        <meta name='description' content='Search and get movie info' />
      </Head>
      <main className={styles.movieDetailsContainer}>
        <span className={styles.leftBall} />

        <span className={styles.rightBall} />

        <span className={styles.middleBall} />

        <div className={styles.movieInfoContainer}>
          <div
            style={{
              height: '90%',

              zIndex: '99',

              borderRadius: '10px',

              padding: '8px',

              border: '2px solid #f63513',
            }}
          >
            <img
              loading='lazy'
              src={movie.Poster}
              alt='movie-image'
              width='100%'
              height='100%'
              style={{ borderRadius: '10px' }}
            />
          </div>

          <div className={styles.movieDetails}>
            <h3 className={styles.movieTitle}>{movie.Title}</h3>

            <br />
            <p
              style={{
                opacity: '.99',

                textTransform: 'full-width',

                textAlign: 'justify',

                fontFamily: 'cursive',
              }}
            >
              {movie.Plot}
            </p>

            <div style={{ margin: '16px auto', width: '90%' }}>
              <ul className={styles.movieData}>
                <li>
                  <p>Rating</p>

                  <p>
                    {movie.imdbRating} / 10 ({movie.imdbVotes})
                  </p>
                </li>

                <li>
                  <p>Genre</p>

                  <p>{movie.Genre}</p>
                </li>

                <li>
                  <p>Released on</p>

                  <p>{movie.Released}</p>
                </li>
              </ul>

              <br />

              <p
                style={{
                  fontWeight: 'bold',

                  textAlign: 'left',

                  fontFamily: 'cursive',
                }}
              >
                &#9977; DIRECTOR
              </p>

              <p
                style={{
                  textAlign: 'left',

                  paddingBottom: '8px',

                  fontFamily: 'cursive',
                }}
              >
                {movie.Director}
              </p>

              <p
                style={{
                  fontWeight: 'bold',

                  textAlign: 'left',

                  fontFamily: 'cursive',
                }}
              >
                &#9977; WRITERS
              </p>

              <p
                style={{
                  textAlign: 'left',

                  paddingBottom: '8px',

                  fontFamily: 'cursive',
                }}
              >
                {movie.Writer}
              </p>

              <p
                style={{
                  fontWeight: 'bold',

                  textAlign: 'left',

                  fontFamily: 'cursive',
                }}
              >
                &#9977; ACTORS
              </p>

              <p style={{ textAlign: 'left', fontFamily: 'cursive' }}>{movie.Actors}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const { data } = await client.query({
    query: GET_MOVIE_INFO,

    variables: {
      i: params.movieId,
    },
  });

  return {
    props: {
      movie: data?.movie,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_MOVIES,
  });

  const paths = data?.searchedMovies?.Search?.map((movie) => ({
    params: { movieId: movie.imdbID },
  }));

  return {
    paths,

    fallback: 'blocking',
  };
}
