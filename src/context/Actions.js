import { makeHTTPRequest } from "../services/ApiHandler";

export const FETCH_POPULARMOVIES_STARTED = 'FETCH_POPULARMOVIES_STARTED';
export const FETCH_POPULARMOVIES_SUCCESS = 'FETCH_POPULARMOVIES_SUCCESS';
export const FETCH_POPULARMOVIES_FAILURE = 'FETCH_POPULARMOVIES_FAILURE';
export const FETCH_UPCOMINGMOVIES_STARTED = 'FETCH_UPCOMINGMOVIES_STARTED';
export const FETCH_UPCOMINGMOVIES_SUCCESS = 'FETCH_UPCOMINGMOVIES_SUCCESS';
export const FETCH_UPCOMINGMOVIES_FAILURE = 'FETCH_UPCOMINGMOVIES_FAILURE';

export function fetchPopularMovies(url, request, dispatch) {
    console.log(JSON.stringify(url));
    //função ser executado em caso de sucesso
    const success = (res) => dispatch(fetchPopularMoviesSuccess(res));
    //função ser executado em caso de falha
    const failure = (err) => dispatch(fetchPopularMoviesFailure(err.message));
    makeHTTPRequest(url, request, success, failure);
}

export function fetchUpcomingMovies(url, request, dispatch) {
    console.log(JSON.stringify(url));
    //função ser executado em caso de sucesso
    const success = (res) => dispatch(fetchUpcomingMoviesSuccess(res));
    //função ser executado em caso de falha
    const failure = (err) => dispatch(fetchUpcomingMoviesFailure(err.message));
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
        
        data: movies.results
        //data: [...movies]
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



export function fetchUpcomingMoviesStarted() {
	return {
    	type: FETCH_UPCOMINGMOVIES_STARTED,

  	}
}

export function fetchUpcomingMoviesSuccess(movies) {
  return {
    type: FETCH_UPCOMINGMOVIES_SUCCESS,
    payload: {
      
      data: movies.results
      //data: [...movies]
    }

  }
}
export function fetchUpcomingMoviesFailure(message) {
  return {
    type: FETCH_UPCOMINGMOVIES_FAILURE,
    payload: {
      error: message
    }
  }
}