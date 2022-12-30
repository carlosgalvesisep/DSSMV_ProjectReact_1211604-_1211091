
import {
    FETCH_POPULARMOVIES_STARTED,
	  FETCH_POPULARMOVIES_SUCCESS,
    FETCH_POPULARMOVIES_FAILURE,
  } from './Actions'
  
  
  
  function reducer(state, action) {
    switch (action.type) {
      case FETCH_POPULARMOVIES_STARTED:
        return {
          ...state,
          movies: {
            loading: true,
            error: null,
            data: {
              results:[]}
          }
        }
      case FETCH_POPULARMOVIES_SUCCESS:
        return {
          ...state,
          movies: {
            loading: false,
            error: null,
            data: [...action.payload.data]
          }
        }
      case FETCH_POPULARMOVIES_FAILURE:
        return {
          ...state,
          movies: {
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
  