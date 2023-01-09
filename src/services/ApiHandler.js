export const API_KEY = 'c00290b42e3c3344955a088c479e1c0f'
export const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGE_URL = 'http://image.tmdb.org/t/p/w500'

export function makeHTTPRequest(url, request, success, failure) {
    fetch(url, request)
      .then(res => res.json())
      .then(res => success(res))
      .catch(err => failure(err.message))
      ;
  }