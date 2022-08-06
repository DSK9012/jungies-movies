import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query SearchMovies($s: String) {
    searchedMovies(s: $s) {
      Search {
        Title
        Year
        Type
        Poster
        imdbID
      }
      totalResults
      Response
      Error
    }
  }
`;

export const GET_MOVIE_INFO = gql`
  query Movie($i: String!) {
    movie(i: $i) {
      Title
      Plot
      Year
      Runtime
      Poster
      Released
      Genre
      imdbRating
      imdbVotes
      Director
      Writer
      Actors
      Response
      Error
    }
  }
`;
