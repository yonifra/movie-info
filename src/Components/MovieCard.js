import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
const moviePosterBaseUrl = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'
let backdropImg;

class MovieCard extends Component {

  render() {
    let data = this.props.movie

        let posterIMG = moviePosterBaseUrl + data.poster_path;
        backdropImg = 'https://image.tmdb.org/t/p/original' + data.backdrop_path;

        console.log('data is: ' + JSON.stringify(data))

        if(data.poster_path === null){
            posterIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
        }

        return (
          <Box>
        <div className="col-xs-12 nopadding modal-dialog-centered">
          <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5 card">
            <h1 className="card-header">{data.original_title}</h1>

            <span className="tagline">{data.tagline}</span>
            <p>{data.overview}</p>
            <div className="additional-details">
              <div className="row nopadding release-details">
              <div className="col-sm-6"> Original Release: <span className="meta-data">{data.release_date}</span></div>
                <div className="col-sm-6"> Vote Average: <span className="meta-data">{data.vote_average ? data.vote_average : 'N/A'}</span></div>
              </div>
            </div>
          </div>
          <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
            <img id="postertest" className='img-thumbnail' src={posterIMG} alt="Poster"/>
          </div>
        </div>
        </Box>
        );
    }

    componentDidUpdate() {
        document.body.style.backgroundImage = 'url(' + backdropImg + ')';
    }
}

export default MovieCard;