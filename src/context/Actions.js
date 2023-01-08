import { makeHTTPRequest } from "../services/ApiHandler";

export const FETCH_POPULARMOVIES_STARTED = 'FETCH_POPULARMOVIES_STARTED';
export const FETCH_POPULARMOVIES_SUCCESS = 'FETCH_POPULARMOVIES_SUCCESS';
export const FETCH_POPULARMOVIES_FAILURE = 'FETCH_POPULARMOVIES_FAILURE';
export const FETCH_LATESTMOVIES_STARTED = 'FETCH_LATESTMOVIES_STARTED';
export const FETCH_LATESTMOVIES_SUCCESS = 'FETCH_LATESTMOVIES_SUCCESS';
export const FETCH_LATESTMOVIES_FAILURE = 'FETCH_LATESTMOVIES_FAILURE';
export const FETCH_UPCOMINGMOVIES_STARTED = 'FETCH_UPCOMINGMOVIES_STARTED';
export const FETCH_UPCOMINGMOVIES_SUCCESS = 'FETCH_UPCOMINGMOVIES_SUCCESS';
export const FETCH_UPCOMINGMOVIES_FAILURE = 'FETCH_UPCOMINGMOVIES_FAILURE';
export const FETCH_TOPRATEDMOVIES_STARTED = 'FETCH_TOPRATEDMOVIES_STARTED';
export const FETCH_TOPRATEDMOVIES_SUCCESS = 'FETCH_TOPRATEDMOVIES_SUCCESS';
export const FETCH_TOPRATEDMOVIES_FAILURE = 'FETCH_TOPRATEDMOVIES_FAILURE';

export const FETCH_POPULARSERIES_STARTED = 'FETCH_POPULARSERIES_STARTED';
export const FETCH_POPULARSERIES_SUCCESS = 'FETCH_POPULARSERIES_SUCCESS';
export const FETCH_POPULARSERIES_FAILURE = 'FETCH_POPULARSERIES_FAILURE';
export const FETCH_TODAYSERIES_STARTED = 'FETCH_TODAYSERIES_STARTED';
export const FETCH_TODAYSERIES_SUCCESS = 'FETCH_TODAYSERIES_SUCCESS';
export const FETCH_TODAYSERIES_FAILURE = 'FETCH_TODAYSERIES_FAILURE';
export const FETCH_TOPRATEDSERIES_STARTED = 'FETCH_TOPRATEDSERIES_STARTED';
export const FETCH_TOPRATEDSERIES_SUCCESS = 'FETCH_TOPRATEDSERIES_SUCCESS';
export const FETCH_TOPRATEDSERIES_FAILURE = 'FETCH_TOPRATEDSERIES_FAILURE';
export const FETCH_ONAIRSERIES_STARTED = 'FETCH_ONAIRSERIES_STARTED';
export const FETCH_ONAIRSERIES_SUCCESS = 'FETCH_ONAIRSERIES_SUCCESS';
export const FETCH_ONAIRSERIES_FAILURE = 'FETCH_ONAIRSERIES_FAILURE';

export const FETCH_DETAILS_STARTED = 'FETCH_DETAILS_STARTED';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_FAILURE = 'FETCH_DETAILS_FAILURE';

export const FETCH_SERIESDETAILS_STARTED = 'FETCH_SERIESDETAILS_STARTED';
export const FETCH_SERIESDETAILS_SUCCESS = 'FETCH_SERIESDETAILS_SUCCESS';
export const FETCH_SERIESDETAILS_FAILURE = 'FETCH_SERIESDETAILS_FAILURE';

export const CREATE_REQUESTTOKEN_STARTED = 'CREATE_REQUESTTOKEN_STARTED';
export const CREATE_REQUESTTOKEN_SUCCESS = 'CREATE_REQUESTTOKEN_SUCCESS';
export const CREATE_REQUESTTOKEN_FAILURE = 'CREATE_REQUESTTOKEN_FAILURE';

export const CREATE_LOGINSESSION_STARTED = 'CREATE_LOGINSESSION_STARTED';
export const CREATE_LOGINSESSION_SUCCESS = 'CREATE_LOGINSESSION_SUCCESS';
export const CREATE_LOGINSESSION_FAILURE = 'CREATE_LOGINSESSION_FAILURE';

export const CREATE_GUESTSESSION_STARTED = 'CREATE_GUESTSESSION_STARTED';
export const CREATE_GUESTSESSION_SUCCESS = 'CREATE_GUESTSESSION_SUCCESS';
export const CREATE_GUESTSESSION_FAILURE = 'CREATE_GUESTSESSION_FAILURE';

export const POST_MOVIERATING_STARTED = 'POST_MOVIERATING_STARTED';
export const POST_MOVIERATING_SUCCESS = 'POST_MOVIERATING_SUCCESS';
export const POST_MOVIERATING_FAILURE = 'POST_MOVIERATING_FAILURE';


export function fetchPopularMovies(url, request, dispatch) {
    //função ser executado em caso de sucesso
    const success = (res) => dispatch(fetchPopularMoviesSuccess(res));
    //função ser executado em caso de falha
    const failure = (err) => dispatch(fetchPopularMoviesFailure(err.message));
    makeHTTPRequest(url, request, success, failure);
}

export function fetchLatestMovies(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchLatestMoviesSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchLatestMoviesFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchUpcomingMovies(url, request, dispatch) {
    //função ser executado em caso de sucesso
    const success = (res) => dispatch(fetchUpcomingMoviesSuccess(res));
    //função ser executado em caso de falha
    const failure = (err) => dispatch(fetchUpcomingMoviesFailure(err.message));
    makeHTTPRequest(url, request, success, failure);
}

export function fetchTopRatedMovies(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchTopRatedMoviesSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchTopRatedMoviesFailure(err.message));
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

export function fetchOnAirSeries(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchOnAirSeriesSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchOnAirSeriesFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchTodaySeries(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchTodaySeriesSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchTodaySeriesFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}
export function fetchDetails(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchDetailsSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchDetailsFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchSeriesDetails(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchSeriesDetailsSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchSeriesDetailsFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function createRequestToken(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(createRequestTokenSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(createRequestTokenFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function createLoginSession(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(createLoginSessionSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(createLoginSessionFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function createGuestSession(url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(createGuestSessionSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(createGuestSessionFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function postMovieRating (url, request, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(createMovieRatingSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(createMovieRatingFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}




//Movies
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
      	type: FETCH_LATESTMOVIES_FAILURE,
      	payload: {
        	error: message
      	}
    }
}
export function fetchLatestMoviesStarted() {
  return {
    type: FETCH_LATESTMOVIES_STARTED,
  }
}

export function fetchLatestMoviesSuccess(latestMovies) {
  return {
    type: FETCH_LATESTMOVIES_SUCCESS,
    payload: {
      data: latestMovies.results
    }
  }
}

export function fetchLatestMoviesFailure(message) {
  return {
      type: FETCH_LATESTMOVIES_FAILURE,
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

export function fetchTopRatedMoviesStarted() {
	return {
    	type: FETCH_TOPRATEDMOVIES_STARTED,
  	}
}

export function fetchTopRatedMoviesSuccess(topRatedMovies) {
  return {
    type: FETCH_TOPRATEDMOVIES_SUCCESS,
    payload: {
      data: topRatedMovies.results
    }
  }
}
export function fetchTopRatedMoviesFailure(message) {
  return {
    type: FETCH_TOPRATEDMOVIES_FAILURE,
    payload: {
      error: message
    }
  }
}

//TV Series
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
export function fetchTodaySeriesStarted() {
	return {
    	type: FETCH_TODAYSERIES_STARTED,
  	}
}

export function fetchTodaySeriesSuccess(todaySeries) {
  return {
    type: FETCH_TODAYSERIES_SUCCESS,
    payload: {
      data: todaySeries.results
    }
  }
}
export function fetchTodaySeriesFailure(message) {
  return {
    type: FETCH_TODAYSERIES_FAILURE,
    payload: {
      error: message
    }
  }
}
export function fetchOnAirSeriesStarted() {
	return {
    	type: FETCH_ONAIRSERIES_STARTED,
  	}
}

export function fetchOnAirSeriesSuccess(onairSeries) {
  return {
    type: FETCH_ONAIRSERIES_SUCCESS,
    payload: {
      data: onairSeries.results
    }
  }
}
export function fetchOnAirSeriesFailure(message) {
  return {
    type: FETCH_ONAIRERIES_FAILURE,
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

export function fetchTopRatedSeriesSuccess(topRatedSeries) {
  return {
    type: FETCH_TOPRATEDSERIES_SUCCESS,
    payload: {
      data: topRatedSeries.results
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

//Movie Details
export function fetchDetailsStarted(id) {
	return {
    	type: FETCH_DETAILS_STARTED,
      id: id,
  	}
}

export function fetchDetailsSuccess(details) {
  return {
    type: FETCH_DETAILS_SUCCESS,
    data: {...details}
  }
}
export function fetchDetailsFailure(message) {
  return {
    type: FETCH_DETAILS_FAILURE,
    error: message,
    data: {},
  }
}

//TV Details
export function fetchSeriesDetailsStarted(id) {
	return {
    	type: FETCH_SERIESDETAILS_STARTED,
      id: id,
  	}
}

export function fetchSeriesDetailsSuccess(details) {
  return {
    type: FETCH_SERIESDETAILS_SUCCESS,
    data: {...details}
  }
}
export function fetchSeriesDetailsFailure(message) {
  return {
    type: FETCH_SERIESDETAILS_FAILURE,
    error: message,
    data: {},
  }
}


//Token
export function createRequestTokenStarted() {
	return {
    	type: CREATE_REQUESTTOKEN_STARTED,
  	}
}

export function createRequestTokenSuccess(requestToken) {
  return {
    type: CREATE_REQUESTTOKEN_SUCCESS,
    payload: {
      data: {...requestToken}
    }
  }
}
export function createRequestTokenFailure(message) {
  return {
    type: CREATE_REQUESTTOKEN_FAILURE,
    payload: {
      error: message
    }
  }
}

//Session with login
export function createLoginSessionStarted() {
	return {
    	type: CREATE_LOGINSESSION_STARTED,
  	}
}

export function createLoginSessionSuccess(loginSession) {
  return {
    type: CREATE_LOGINSESSION_SUCCESS,
    payload: {
      data: {...loginSession}
    }
  }
}
export function createLoginSessionFailure(message) {
  return {
    type: CREATE_LOGINSESSION_FAILURE,
    payload: {
      error: message
    }
  }
}

//Guest Session
export function createGuestSessionStarted() {
	return {
    	type: CREATE_GUESTSESSION_STARTED,
  	}
}

export function createGuestSessionSuccess(guestSession) {
  return {
    type: CREATE_GUESTSESSION_SUCCESS,
    payload: {
      data: {...guestSession}
    }
  }
}
export function createGuestSessionFailure(message) {
  return {
    type: CREATE_GUESTSESSION_FAILURE,
    payload: {
      error: message
    }
  }
}


//Ratings
export function postMovieRatingStarted() {
	return {
    	type: POST_MOVIERATING_STARTED,
  	}
}

export function postMovieRatingSuccess(movieRating) {
  return {
    type: POST_MOVIERATING_SUCCESS,
    payload: {
      data: {...movieRating}
    }
  }
}
export function postMovieRatingFailure(message) {
  return {
    type: POST_MOVIERATING_FAILURE,
    payload: {
      error: message
    }
  }
}