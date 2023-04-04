import axios from 'axios';

const END_POINT = 'https://api.themoviedb.org/3/';
const API_KEY = 'ab2980764464f0ed10df4f090768c3c1';
const TRENDING_CATEGORIES = 'movie';
const TRENDING_PERIOD = 'day';

export function getResponseTrending(day) {
  return axios(
    `${END_POINT}trending/${TRENDING_CATEGORIES}/${TRENDING_PERIOD}?api_key=${API_KEY}`
  );
}

export function getResponseSearch(query) {
  return axios(`${END_POINT}search/movie?api_key=${API_KEY}&query=${query}`);
}

export function getResponseDetails(id, options = '') {
  return axios(`${END_POINT}movie/${id}${options}?api_key=${API_KEY}`);
}
