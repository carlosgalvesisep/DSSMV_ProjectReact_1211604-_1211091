
import {
    FETCH_POPULARMOVIES_STARTED,
	  FETCH_POPULARMOVIES_SUCCESS,
    FETCH_POPULARMOVIES_FAILURE,
    FETCH_UPCOMINGMOVIES_STARTED,
    FETCH_UPCOMINGMOVIES_SUCCESS,
    FETCH_UPCOMINGMOVIES_FAILURE,
    FETCH_POPULARSERIES_STARTED,
    FETCH_POPULARSERIES_SUCCESS,
    FETCH_POPULARSERIES_FAILURE,
    FETCH_TOPRATEDSERIES_STARTED,
    FETCH_TOPRATEDSERIES_SUCCESS,
    FETCH_TOPRATEDSERIES_FAILURE,
  } from './Actions'
  
  
  
  function reducer(state, action) {
    switch (action.type) {
      case FETCH_POPULARMOVIES_STARTED:
        return {
          ...state,
          popularMovies: {
            loading: true,
            error: null,
            data: {
              results:[]}
          }
        }
      case FETCH_POPULARMOVIES_SUCCESS:
        return {
          ...state,
          popularMovies: {
            loading: false,
            error: null,
            data: [...action.payload.data]
          }
        }
      case FETCH_POPULARMOVIES_FAILURE:
        return {
          ...state,
          popularMovies: {
            loading: false,
            error: action.payload.error,
            data: [],
          }
        }
        case FETCH_UPCOMINGMOVIES_STARTED:
        return {
          ...state,
          upcomingMovies: {
            loading: true,
            error: null,
            data: {
              results:[]}
          }
        }
      case FETCH_UPCOMINGMOVIES_SUCCESS:
        return {
          ...state,
          upcomingMovies: {
            loading: false,
            error: null,
            data: [...action.payload.data]
          }
        }
      case FETCH_UPCOMINGMOVIES_FAILURE:
        return {
          ...state,
          upcomingMovies: {
            loading: false,
            error: action.payload.error,
            data: [],
          }
        }
        case FETCH_POPULARSERIES_STARTED:
        return {
          ...state,
          popularSeries: {
            loading: true,
            error: null,
            data: {
              results:[]}
          }
        }
      case FETCH_POPULARSERIES_SUCCESS:
        return {
          ...state,
          popularSeries: {
            loading: false,
            error: null,
            data: [...action.payload.data]
          }
        }
      case FETCH_POPULARSERIES_FAILURE:
        return {
          ...state,
          popularSeries: {
            loading: false,
            error: action.payload.error,
            data: [],
          }
        }
        case FETCH_TOPRATEDSERIES_STARTED:
          return {
            ...state,
            TopRatedSeries: {
              loading: true,
              error: null,
              data: {
                results:[]}
            }
          }
        case FETCH_TOPRATEDSERIES_SUCCESS:
          return {
            ...state,
            TopRatedSeries: {
              loading: false,
              error: null,
              data: [...action.payload.data]
            }
          }
        case FETCH_TOPRATEDSERIES_FAILURE:
          return {
            ...state,
            TopRatedSeries: {
              loading: false,
              error: action.payload.error,
              data: [],
            }
          }
      default:
        return state
    }

  }
  
  export default reducer;
  