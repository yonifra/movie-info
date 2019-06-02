import {apiKey} from '../constants/api.js'

function fetchMovie(title) {
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
}

export {fetchMovie}