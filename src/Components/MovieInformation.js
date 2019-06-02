import React, { Component } from 'react';
import {fetchMovie} from '../utils/TmdbApi'

class MovieInformation extends Component {
    render() {
        fetchMovie('get out')
        return (
            <div>
                fetchMovie('get out')
            </div>
        );
    }
}

export default MovieInformation;