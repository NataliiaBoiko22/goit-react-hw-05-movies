import axios from 'axios';

const API_KEY = `0f347322078f7ab31991a46962bbff3a`;
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrendingMovies = async () => {
  const res = await axios.get(`/trending/movie/day`);
  return res.data.results;
};

export const getMovieDetails = async id => {
  try {
    const res = await axios.get(`/movie/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async id => {
  try {
    const res = await axios.get(`/movie/${id}/credits`);
    return res.data.cast;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieReview = async id => {
  try {
    const res = await axios.get(`/movie/${id}/reviews`);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async query => {
  const config = {
    params: {
      query: query,
      page: 1,
    },
  };

  try {
    const res = await axios.get(`/search/movie`, config);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
