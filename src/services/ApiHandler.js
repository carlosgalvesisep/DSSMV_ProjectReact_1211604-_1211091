export const API_KEY = 'c00290b42e3c3344955a088c479e1c0f'
export const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGE_URL = 'http://image.tmdb.org/t/p/original'

export function makeHTTPRequest(url, request, success, failure) {
    fetch(url)
      .then(res => res.json())
      .then(res => success(res))
      .catch(err => failure(err.message))
      ;
  }
  
  


/* const createRequestToken = () => {
    const getRequestToken = async () => {
        try {
        await fetch(BASE_URL + '/authentication/token/new' +'?api_key=' + API_KEY)
            .then(response => { 
                response.json()
            .then(data => {
                Alert.alert(response.success);
            });
            })
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        Alert.alert(response.success)

        //getRequestToken
    //console.warn(response)
    //console.warn(response)

    )
}
export default createRequestToken;
 */


