import { makeHTTPRequest } from "../services/ApiHandler";

export const FETCH_POPULARMOVIES_STARTED = 'FETCH_POPULARMOVIES_STARTED';
export const FETCH_POPULARMOVIES_SUCCESS = 'FETCH_POPULARMOVIES_SUCCESS';
export const FETCH_POPULARMOVIES_FAILURE = 'FETCH_POPULARMOVIES_FAILURE';
export const FETCH_UPCOMINGMOVIES_STARTED = 'FETCH_UPCOMINGMOVIES_STARTED';
export const FETCH_UPCOMINGMOVIES_SUCCESS = 'FETCH_UPCOMINGMOVIES_SUCCESS';
export const FETCH_UPCOMINGMOVIES_FAILURE = 'FETCH_UPCOMINGMOVIES_FAILURE';
export const FETCH_POPULARSERIES_STARTED = 'FETCH_POPULARSERIES_STARTED';
export const FETCH_POPULARSERIES_SUCCESS = 'FETCH_POPULARSERIES_SUCCESS';
export const FETCH_POPULARSERIES_FAILURE = 'FETCH_POPULARSERIES_FAILURE';
export const FETCH_TOPRATEDSERIES_STARTED = 'FETCH_TOPRATEDSERIES_STARTED';
export const FETCH_TOPRATEDSERIES_SUCCESS = 'FETCH_TOPRATEDSERIES_SUCCESS';
export const FETCH_TOPRATEDSERIES_FAILURE = 'FETCH_TOPRATEDSERIES_FAILURE';

export function fetchPopularMovies(url, request, dispatch) {
    //função ser executado em caso de sucesso
    const success = (res) => dispatch(fetchPopularMoviesSuccess(res));
    //função ser executado em caso de falha
    const failure = (err) => dispatch(fetchPopularMoviesFailure(err.message));
    makeHTTPRequest(url, request, success, failure);
}

export function fetchUpcomingMovies(url, request, dispatch) {
    //função ser executado em caso de sucesso
    const success = (res) => dispatch(fetchUpcomingMoviesSuccess(res));
    //função ser executado em caso de falha
    const failure = (err) => dispatch(fetchUpcomingMoviesFailure(err.message));
    makeHTTPRequest(url, request, success, failure);
}

export function fetchPopularSeries(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchPopularSeriesSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchPopularSeriesFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchTopRatedSeries(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchTopRatedSeriesSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchTopRatedSeriesFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}






export function fetchPopularMoviesStarted() {
    return {
      type: FETCH_POPULARMOVIES_STARTED,
    }
}
  
export function fetchPopularMoviesSuccess(popularMovies) {
    return {
      type: FETCH_POPULARMOVIES_SUCCESS,
      payload: {
        data: popularMovies.results
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

export function fetchUpcomingMoviesSuccess(upcomingMovies) {
  return {
    type: FETCH_UPCOMINGMOVIES_SUCCESS,
    payload: {
      data: upcomingMovies.results
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
export function fetchPopularSeriesStarted() {
	return {
    	type: FETCH_POPULARSERIES_STARTED,
  	}
}

export function fetchPopularSeriesSuccess(popularSeries) {
  return {
    type: FETCH_POPULARSERIES_SUCCESS,
    payload: {
      data: popularSeries.results
    }
  }
}
export function fetchPopularSeriesFailure(message) {
  return {
    type: FETCH_POPULARSERIES_FAILURE,
    payload: {
      error: message
    }
  }
}

export function fetchTopRatedSeriesStarted() {
	return {
    	type: FETCH_TOPRATEDSERIES_STARTED,
  	}
}

export function fetchTopRatedSeriesSuccess(TopRatedSeries) {
  return {
    type: FETCH_TOPRATEDSERIES_SUCCESS,
    payload: {
      data: TopRatedSeries.results
    }
  }
}
export function fetchTopRatedSeriesFailure(message) {
  return {
    type: FETCH_TOPRATEDSERIES_FAILURE,
    payload: {
      error: message
    }
  }
}