import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        return (
            <div class="wrapper-cols">
                <div class="box a">
                    <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${this.props.movie.poster_path}`}/>
                </div>
                <div class="wrapper-rows">
                    <div class="box b"><b>{JSON.stringify(this.props.movie.title)}</b></div>
                    <div class="box b"><b>Synopsis:</b> {JSON.stringify(this.props.movie.overview)}</div>
                    <div class="box b"><b>Released:</b> {JSON.stringify(this.props.movie.release_date)}</div>
                    <div class="box b"><b>Rating:</b> {JSON.stringify(this.props.movie.vote_average)}</div>
                </div>
            </div>
        );
    }
}

export default MovieCard;