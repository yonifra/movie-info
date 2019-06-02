import {apiKey} from '../constants/api.js'

function fetchMovie(title) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`)
        .then(response => response.json())
        .then(myJson => myJson);
}

export {fetchMovie}