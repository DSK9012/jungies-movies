import { useState } from 'react';
import Head from 'next/head';
import { useLazyQuery } from '@apollo/client';
import styles from 'styles/home.module.css';
import client from 'graphql/apollo-client';
import RenderMovies from 'components/RenderMovies';
import { GET_MOVIES } from 'graphql/queries';

function Home({ searchedMovies }) {
  const [getMovies, { loading, error }] = useLazyQuery(GET_MOVIES);
  const [movies, setMovies] = useState(searchedMovies);

  const fetchMovies = async (text) => {
    const x = await getMovies({ variables: { s: text } });
    setMovies(x.data.searchedMovies);
  };

  const handleSearch = (event) => {
    fetchMovies(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Search App</title>
        <meta name='description' content='Search and get movie info' />
      </Head>
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>Search and Get Movie Info</h1>
          <input
            type='text'
            name='movie'
            placeholder='Search Movie'
            spellCheck='false'
            defaultValue='jurassic'
            className={styles.movieField}
            onChange={handleSearch}
            autoFocus={true}
          />
        </header>
        <main className={styles.main}>
          <div className={styles.moviesContainer}>
            <RenderMovies movies={movies} error={error} loading={loading} />
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_MOVIES,
  });

  return {
    props: {
      searchedMovies: data.searchedMovies,
    },
  };
}

export default Home;
