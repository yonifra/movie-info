import React, { Component } from 'react';
import * as moment from 'moment';

const TMDBLogo = "../img/tmdb.png";
const moviePosterBaseUrl = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'

class MovieCard extends Component {
    render() {
        return (
            <div class="wrapper-cols" style={{ backgroundImage: `url(${moviePosterBaseUrl}${this.props.movie.backgroundImage})` }}>
                <div class="box a">
                    <img src={`${moviePosterBaseUrl}${this.props.movie.poster_path}`} alt='Poster'/>
                </div>
                <div class="wrapper-rows">
                    <div class="box b"><b>{this.props.movie.title}</b></div>
                    <div class="box b"><b>Synopsis:</b><br/> {this.props.movie.overview}</div>
                    <div class="box b"><b>Released:</b><br/> {moment(this.props.movie.release_date).format('MMM Do YYYY')}</div>
                    <div class="box b"><img src="{TMDBLogo}" alt=''/> {this.props.movie.vote_average}</div>
                </div>
            </div>
        );
    }
}

export default MovieCard;