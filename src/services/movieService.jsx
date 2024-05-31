const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
  trending: `${baseUrl}/trending/all/day?api_key=${key}&language=en-US&page=2`,
  comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  search: (query) => `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`, // Dynamic endpoint function
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};


export function createImageUrl(filename, size) {
  return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endpoints;
