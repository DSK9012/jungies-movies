const axios = require("axios");



const getQueryString = (params = []) => {

  let queryString = "";

  Object.keys(params).map((key) => {

    const newParam = params[key] ? `&${key}=${params[key]}` : "";

    queryString = `${queryString}${newParam}`;

  });

  return queryString;

};



const fetchMovieData = async (params) => {

  const queryParams = getQueryString(params);

  try {

    const { data } = await axios(

      `https://www.omdbapi.com/?apikey=6971809d${queryParams}`

    );

    return data;

  } catch (error) {

    return error;

  }

};



module.exports = { fetchMovieData };