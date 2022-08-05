const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLNonNull, GraphQLString } = graphql;

const RatingType = new GraphQLObjectType({
  name: 'Ratings',
  fields: () => ({
    Source: {
      type: GraphQLString,
    },
    Value: {
      type: GraphQLString,
    },
  }),
});

const MovieInfoType = new GraphQLObjectType({
  name: 'movie',
  fields: () => ({
    Title: {
      type: GraphQLString,
    },
    Year: {
      type: GraphQLString,
    },
    Rated: {
      type: GraphQLString,
    },
    Released: {
      type: GraphQLString,
    },
    Runtime: {
      type: GraphQLString,
    },
    Genre: {
      type: GraphQLString,
    },
    Director: {
      type: GraphQLString,
    },
    Writer: {
      type: GraphQLString,
    },
    Actors: {
      type: GraphQLString,
    },
    Plot: {
      type: GraphQLString,
    },
    Language: {
      type: GraphQLString,
    },
    Country: {
      type: GraphQLString,
    },
    Awards: {
      type: GraphQLString,
    },
    Poster: {
      type: GraphQLString,
    },
    Ratings: {
      type: new GraphQLList(RatingType),
    },
    Metascore: {
      type: GraphQLString,
    },
    imdbRating: {
      type: GraphQLString,
    },
    imdbVotes: {
      type: GraphQLString,
    },
    imdbID: {
      type: GraphQLString,
    },
    Type: {
      type: GraphQLString,
    },
    DVD: {
      type: GraphQLString,
    },
    BoxOffice: {
      type: GraphQLString,
    },
    Production: {
      type: GraphQLString,
    },
    Website: {
      type: GraphQLString,
    },
    Response: {
      type: GraphQLString,
    },
    Error: {
      type: GraphQLString,
    },
  }),
});

const SortMovieType = new GraphQLObjectType({
  name: 'SortMovieType',
  fields: () => ({
    Title: {
      type: GraphQLString,
    },
    Year: {
      type: GraphQLString,
    },
    imdbID: {
      type: GraphQLString,
    },
    Type: {
      type: GraphQLString,
    },
    Poster: {
      type: GraphQLString,
    },
  }),
});

const SearchedMoviesType = new GraphQLObjectType({
  name: 'searchedMovies',
  fields: () => ({
    Search: {
      type: new GraphQLList(SortMovieType),
    },
    totalResults: {
      type: GraphQLString,
    },
    Response: {
      type: GraphQLString,
    },
    Error: {
      type: GraphQLString,
    },
  }),
});

const RootQueries = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    movie: {
      type: MovieInfoType,
      args: { i: { type: new GraphQLNonNull(GraphQLString) } },
    },
    searchedMovies: {
      type: SearchedMoviesType,
      args: { s: { type: GraphQLString, defaultValue: 'jurassic' }, type: { type: GraphQLString } },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueries,
});
