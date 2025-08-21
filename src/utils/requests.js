
 const baseURL = "https://api.themoviedb.org/3";
 export const imageURL = "https://image.tmdb.org/t/p/original";
const APIKEY = "14cd6032ceacfa873bdd5e8a35fa9d5b"

 const requests ={
    fetchNetflixOriginals:`${baseURL}/discover/tv?with_networks=213&language=en-US&page=1&api_key=${APIKEY}`,
    fetchTrending:`${baseURL}/movie/popular?language=en-US&page=1&api_key=${APIKEY}`,
    fetchNowPlaying:`${baseURL}/movie/now_playing?language=en-US&page=1&api_key=${APIKEY}`,
    fetchTopRated:`${baseURL}/movie/top_rated?language=en-US&page=1&api_key=${APIKEY}`,

}

export default requests;
