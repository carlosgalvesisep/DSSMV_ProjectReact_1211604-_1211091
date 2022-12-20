import { makeHTTPRequest } from "../services/ApiHandler";

export const FETCH_POPULARMOVIES_STARTED = 'FETCH_POPULARMOVIES_STARTED';
export const FETCH_POPULARMOVIES_SUCCESS = 'FETCH_POPULARMOVIES_SUCCESS';
export const FETCH_POPULARMOVIES_FAILURE = 'FETCH_POPULARMOVIES_FAILURE';

export function fetchPopularMovies(url, request, dispatch) {
    console.log(JSON.stringify(url));
    //função ser executado em caso de sucesso
    const success = (res) => dispatch(fetchPopularMoviesSuccess(res));
    //função ser executado em caso de falha
    const failure = (err) => dispatch(fetchPopularMoviesFailure(err.message));
    makeHTTPRequest(url, request, success, failure);
}



export function fetchPopularMoviesStarted() {
    return {
      type: FETCH_POPULARMOVIES_STARTED,
  
    }
}
  
  export function fetchPopularMoviesSuccess(movies) {
    return {
      type: FETCH_POPULARMOVIES_SUCCESS,
      payload: {
        data:
          [...movies]
      }
  
    }
  }
  export function fetchPopularMoviesFailure(message) {
    return {
      type: FETCH_POPULARMOVIES_FAILURE,
      payload: {
        error: message
      }
    }
  }