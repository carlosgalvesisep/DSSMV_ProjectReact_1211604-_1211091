
import {
    FETCH_POPULARMOVIES_STARTED,
	FETCH_POPULARMOVIES_SUCCESS,
    FETCH_POPULARMOVIES_FAILURE,
    FETCH_LATESTMOVIES_STARTED,
    FETCH_LATESTMOVIES_SUCCESS,
    FETCH_LATESTMOVIES_FAILURE,
    FETCH_UPCOMINGMOVIES_STARTED,
    FETCH_UPCOMINGMOVIES_SUCCESS,
    FETCH_UPCOMINGMOVIES_FAILURE,

    FETCH_POPULARSERIES_STARTED,
    FETCH_POPULARSERIES_SUCCESS,
    FETCH_POPULARSERIES_FAILURE,
    FETCH_TOPRATEDSERIES_STARTED,
    FETCH_TOPRATEDSERIES_SUCCESS,
    FETCH_TOPRATEDSERIES_FAILURE,
    FETCH_DETAILS_STARTED,
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_FAILURE,

    FETCH_SERIESDETAILS_STARTED,
    FETCH_SERIESDETAILS_SUCCESS,
    FETCH_SERIESDETAILS_FAILURE,

    CREATE_REQUESTTOKEN_STARTED,
    CREATE_REQUESTTOKEN_FAILURE,
    CREATE_REQUESTTOKEN_SUCCESS,

    CREATE_GUESTSESSION_STARTED,
    CREATE_GUESTSESSION_SUCCESS,
    CREATE_GUESTSESSION_FAILURE,

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
            topRatedSeries: {
              loading: true,
              error: null,
              data: {
                results:[]}
            }
          }
        case FETCH_TOPRATEDSERIES_SUCCESS:
          return {
            ...state,
            topRatedSeries: {
              loading: false,
              error: null,
              data: [...action.payload.data]
            }
          }
        case FETCH_TOPRATEDSERIES_FAILURE:
          return {
            ...state,
            topRatedSeries: {
              loading: false,
              error: action.payload.error,
              data: [],
            }
          }
          case FETCH_DETAILS_STARTED:
        return {
          ...state,
          details: {
            loading: true,
            error: null,
            data: {},
          }
        }
      case FETCH_DETAILS_SUCCESS:
        return {
          ...state,
          details: {
            loading: false,
            error: null,
            data: {...action.data},
          }
        }
      case FETCH_DETAILS_FAILURE:
        return {
          ...state,
          details: {
            loading: false,
            error: action.error,
            data: {},
          }
        }
        case FETCH_SERIESDETAILS_STARTED:
          return {
            ...state,
            details: {
              loading: true,
              error: null,
              data: {},
            }
          }
        case FETCH_SERIESDETAILS_SUCCESS:
          return {
            ...state,
            details: {
              loading: false,
              error: null,
              data: {...action.data},
            }
          }
        case FETCH_SERIESDETAILS_FAILURE:
          return {
            ...state,
            details: {
              loading: false,
              error: action.error,
              data: {},
            }
          }
      default:
        return state
    }

  }
  
  export default reducer;
  