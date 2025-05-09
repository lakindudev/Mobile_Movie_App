export const TMDB_CONFIG = {
    BASE_URL : 'https://api.themoviedb.org/3',
    API_KEY : process.env.EXPO_PUBLIC_Movie_API_KEY,
    HEADERS : {
        accept: 'application/json',
        Authorization : `Bearer ${process.env.EXPO_PUBLIC_Movie_API_KEY}`
    }
}

export const fetchMovies = async ({ query}: {query: string}) =>{
    const endpoint = query
            ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
            :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.HEADERS,

    });

    if(!response.ok){
        //@ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();

    return data.results;
}



// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmZkOWIxOTMxOTQ5NDNmMDMyODEzMTdlMGFmMTk2OSIsIm5iZiI6MTc0Njc1OTMyNi40NjgsInN1YiI6IjY4MWQ2ZTllOWNkMjZiOTNhZTkzYjFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T1qe_nCqjsAPtMvwJ5SAGxeiW5jQgydXX6QsPwvpIm8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));