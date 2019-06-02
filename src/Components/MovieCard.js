import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        return (
            <div>
                <div><img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${this.props.movie.poster_path}`}/></div>
                <div>{JSON.stringify(this.props.movie.title)}</div>
                <div><b>Synopsis:</b> {JSON.stringify(this.props.movie.overview)}</div>
                <div><b>Released:</b> {JSON.stringify(this.props.movie.release_date)}</div>
                <div><b>Rating:</b> {JSON.stringify(this.props.movie.vote_average)}</div>
            </div>
        );
    }
}

export default MovieCard;