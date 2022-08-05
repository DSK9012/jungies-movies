const { fetchMovieData } = require('../controller');
const movie = async (params) => {
  try {
    return await fetchMovieData(params);
  } catch (error) {
    throw error;
  }
};

const searchedMovies = async (params) => {
  try {
    return await fetchMovieData(params);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  movie,
  searchedMovies,
};
