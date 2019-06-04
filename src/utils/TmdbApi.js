import {apiKey} from '../constants/api.js'
const API_URL = 'https://api.themoviedb.org/3/search/movie'

function fetchMovie(title) {
    fetch(`${API_URL}?api_key=${apiKey}&query=${title}`)
        .then(response => response.json())
        .then(myJson => myJson);
}

export {fetchMovie}