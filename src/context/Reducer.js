
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
    FETCH_TOPRATEDMOVIES_STARTED,
    FETCH_TOPRATEDMOVIES_SUCCESS,
    FETCH_TOPRATEDMOVIES_FAILURE,
    FETCH_SEARCHMOVIES_STARTED,
    FETCH_SEARCHMOVIES_SUCCESS,
    FETCH_SEARCHMOVIES_FAILURE,
    FETCH_USERRATEDMOVIES_STARTED,
    FETCH_USERRATEDMOVIES_SUCCESS,
    FETCH_USERRATEDMOVIES_FAILURE,


    FETCH_POPULARSERIES_STARTED,
    FETCH_POPULARSERIES_SUCCESS,
    FETCH_POPULARSERIES_FAILURE,
    FETCH_TODAYSERIES_STARTED,
    FETCH_TODAYSERIES_SUCCESS,
    FETCH_TODAYSERIES_FAILURE,
    FETCH_ONAIRSERIES_STARTED,
    FETCH_ONAIRSERIES_SUCCESS,
    FETCH_ONAIRSERIES_FAILURE,
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

    CREATE_LOGINSESSION_STARTED,
    CREATE_LOGINSESSION_SUCCESS,
    CREATE_LOGINSESSION_FAILURE,
    CREATE_GUESTSESSION_STARTED,
    CREATE_GUESTSESSION_SUCCESS,
    CREATE_GUESTSESSION_FAILURE,

    POST_MOVIERATING_STARTED,
    POST_MOVIERATING_SUCCESS,
    POST_MOVIERATING_FAILURE,

    POST_SERIESRATING_STARTED,
    POST_SERIESRATING_SUCCESS,
    POST_SERIESRATING_FAILURE,

    
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

        case FETCH_USERRATEDMOVIES_STARTED:
          return {
            ...state,
            userRatedMovies: {
              loading: true,
              error: null,
              data: {
                results:[]}
            }
          }
        case FETCH_USERRATEDMOVIES_SUCCESS:
          return {
            ...state,
            userRatedMovies: {
              loading: false,
              error: null,
              data: [...action.payload.data]
            }
          }
        case FETCH_USERRATEDMOVIES_FAILURE:
          return {
            ...state,
            userRatedMovies: {
              loading: false,
              error: action.payload.error,
              data: [],
            }
          }
        case FETCH_LATESTMOVIES_STARTED:
          return {
            ...state,
            latestMovies: {
              loading: true,
              error: null,
              data: {
                results:[]}
            }
          }
        case FETCH_LATESTMOVIES_SUCCESS:
          return {
            ...state,
            latestMovies: {
              loading: false,
              error: null,
              data: [...action.payload.data]
            }
          }
        case FETCH_LATESTMOVIES_FAILURE:
          return {
            ...state,
            latestMovies: {
              loading: false,
              error: action.payload.error,
              data: [],
            }
          }
          case FETCH_SEARCHMOVIES_STARTED:
            return {
              ...state,
                searchMovies: {
                loading: true,
                error: null,
                data: {
                  results:[]}
              }
            }
          case FETCH_SEARCHMOVIES_SUCCESS:
            return {
              ...state,
                searchMovies: {
                loading: false,
                error: null,
                data: [...action.payload.data]
              }
            }
          case FETCH_SEARCHMOVIES_FAILURE:
            return {
              ...state,
                searchMovies: {
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
        case FETCH_TOPRATEDMOVIES_STARTED:
          return {
            ...state,
            topRatedMovies: {
              loading: true,
              error: null,
              data: {
                results:[]}
            }
          }
        case FETCH_TOPRATEDMOVIES_SUCCESS:
          return {
            ...state,
            topRatedMovies: {
              loading: false,
              error: null,
              data: [...action.payload.data]
            }
          }
        case FETCH_TOPRATEDMOVIES_FAILURE:
          return {
            ...state,
            topRatedMovies: {
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

        case FETCH_TODAYSERIES_STARTED:
        return {
          ...state,
          todaySeries: {
            loading: true,
            error: null,
            data: {
              results:[]}
          }
        }
      case FETCH_TODAYSERIES_SUCCESS:
        return {
          ...state,
          todaySeries: {
            loading: false,
            error: null,
            data: [...action.payload.data]
          }
        }
      case FETCH_TODAYSERIES_FAILURE:
        return {
          ...state,
          todaySeries: {
            loading: false,
            error: action.payload.error,
            data: [],
          }
        }
        case FETCH_ONAIRSERIES_STARTED:
          return {
            ...state,
            onairSeries: {
              loading: true,
              error: null,
              data: {
                results:[]}
            }
          }
        case FETCH_ONAIRSERIES_SUCCESS:
          return {
            ...state,
            onairSeries: {
              loading: false,
              error: null,
              data: [...action.payload.data]
            }
          }
        case FETCH_ONAIRSERIES_FAILURE:
          return {
            ...state,
            onairSeries: {
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
          case CREATE_REQUESTTOKEN_STARTED:
				return {
					...state,
					requestToken: {
					loading: true,
					error: null,
					data: {}
					}
				}
			case CREATE_REQUESTTOKEN_SUCCESS:
				return {
					...state,
					requestToken: {
					loading: false,
					error: null,
					data: {...action.payload.data}
					}
				}
			case CREATE_REQUESTTOKEN_FAILURE:
				return {
					...state,
					requestToken: {
					loading: false,
					error: action.payload.error,
					data: {},
					}
				}
        case CREATE_LOGINSESSION_STARTED:
          return {
            ...state,
            loginSession: {
            loading: true,
            error: null,
            data: {}
            }
          }
        case CREATE_LOGINSESSION_SUCCESS:
          return {
            ...state,
            loginSession: {
            loading: false,
            error: null,
            data: {...action.payload.data}
            }
          }
        case CREATE_LOGINSESSION_FAILURE:
          return {
            ...state,
            loginSession: {
            loading: false,
            error: action.payload.error,
            data: {},
            }
          }
			case CREATE_GUESTSESSION_STARTED:
				return {
					...state,
					guestSession: {
					loading: true,
					error: null,
					data: {}
					}
				}
			case CREATE_GUESTSESSION_SUCCESS:
				return {
					...state,
					guestSession: {
					loading: false,
					error: null,
					data: {...action.payload.data}
					}
				}
			case CREATE_GUESTSESSION_FAILURE:
				return {
					...state,
					guestSession: {
					loading: false,
					error: action.payload.error,
					data: {},
					}
				}

        case POST_MOVIERATING_STARTED:
          return {
            ...state,
            movieRating: {
            loading: true,
            error: null,
            data: {}
            }
          }
        case POST_MOVIERATING_SUCCESS:
          return {
            ...state,
            movieRating: {
            loading: false,
            error: null,
            data: {...action.payload.data}
            }
          }
        case POST_MOVIERATING_FAILURE:
          return {
            ...state,
            movieRating: {
            loading: false,
            error: action.payload.error,
            data: {},
            }
          }

          case POST_SERIESRATING_STARTED:
            return {
              ...state,
              seriesRating: {
              loading: true,
              error: null,
              data: {}
              }
            }
          case POST_SERIESRATING_SUCCESS:
            return {
              ...state,
              seriesRating: {
              loading: false,
              error: null,
              data: {...action.payload.data}
              }
            }
          case POST_SERIESRATING_FAILURE:
            return {
              ...state,
              seriesRating: {
              loading: false,
              error: action.payload.error,
              data: {},
              }
            }


      default:
        return state
    }

  }
  
  export default reducer;
  