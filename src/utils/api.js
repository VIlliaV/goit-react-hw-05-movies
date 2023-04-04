import axios from 'axios';

const END_POINT = 'https://api.themoviedb.org/3/';
const API_KEY = 'ab2980764464f0ed10df4f090768c3c1';
const TRENDING_CATEGORIES = 'movie';
const TRENDING_PERIOD = 'day';

export function getResponseTrending() {
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

// adult
// :
// false
// backdrop_path
// :
// "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"
// belongs_to_collection
// :
// {id: 87096, name: 'Avatar Collection', poster_path: '/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg', backdrop_path: '/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg'}
// budget
// :
// 460000000
// genres
// :
// (3) [{…}, {…}, {…}]
// homepage
// :
// "https://www.avatar.com/movies/avatar-the-way-of-water"
// id
// :
// 76600
// imdb_id
// :
// "tt1630029"
// original_language
// :
// "en"
// original_title
// :
// "Avatar: The Way of Water"
// overview
// :
// "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
// popularity
// :
// 8951.259
// poster_path
// :
// "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
// production_companies
// :
// (2) [{…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2022-12-14"
// revenue
// :
// 2310416014
// runtime
// :
// 192
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "Return to Pandora."
// title
// :
// "Avatar: The Way of Water"
// video
// :
// false
// vote_average
// :
// 7.75
// vote_count
// :
// 6491
