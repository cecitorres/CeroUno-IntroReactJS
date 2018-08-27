// import movies from './movies.json';

export default class MovieService {
  static getMovies(searchTerm) {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=d5a19dab`
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.Response === 'False') {
          return [];
        }
        return data.Search;
      });
    // return movies.Search;
  }
}