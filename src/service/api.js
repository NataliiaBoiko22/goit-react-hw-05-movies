import axios from 'axios';


const instance = axios.create({
    baseURL:  "https://api.themoviedb.org/3/",
    params: {
        api_key: '0f347322078f7ab31991a46962bbff3a',
    }
});

export const getTrendingMovies = async () => {
    const {data} = await instance.get('trending/movie/day', {
        params: {
            page: 1,
        }
    });

    return data.results;
}



