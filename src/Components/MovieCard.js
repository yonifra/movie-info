import React, { Component } from 'react';
import * as moment from 'moment';
let numeral = require('numeral');

const TMDBLogo = "../img/tmdb.png";
const moviePosterBaseUrl = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'
let backdropImg

class MovieCard extends Component {
    render() {
        let data = this.props.movie

        let posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster,
          production = data.production,
          productionCountries = data.production_countries,
          genres = data.genre,
          totalRevenue = data.revenue,
          productionList = nestedDataToString(production),
          productionCountriesList = nestedDataToString(productionCountries),
          noData = '-',
          genresList = nestedDataToString(genres)
          backdropImg = 'https://image.tmdb.org/t/p/original' + data.backdrop;

          // conditional statements for no data
        if (data.vote === 'undefined' || data.vote === 0) {
            data.vote = noData
            } else {
            data.vote = data.vote + ' / 10'
        }

        if (totalRevenue === 'undefined' || totalRevenue === 0) {
            totalRevenue = noData
                } else {
            totalRevenue = numeral(data.revenue).format('($0,0)');
        }

        if(data.poster== null){
            posterIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
        }

        return (
            <div className="col-xs-12 cardcont nopadding">

          <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
            <h1>{data.original_title}</h1>

            <span className="tagline">{data.tagline}</span>
            <p>{data.overview}</p>
            <div className="additional-details">
              <span className="genre-list">{genresList}</span>
              <span className="production-list">{productionList}</span>
              <div className="row nopadding release-details">
                <div className="col-xs-6"> Original Release: <span className="meta-data">{data.release}</span></div>
                <div className="col-xs-6"> Running Time: <span className="meta-data">{data ? data.runtime : 'N/A'} mins</span> </div>
                <div className="col-xs-6"> Box Office: <span className="meta-data">{totalRevenue ? totalRevenue : 0}</span></div>
                <div className="col-xs-6"> Vote Average: <span className="meta-data">{data ? data.vote : 'N/A'}</span></div>
              </div>
            </div>
          </div>
          <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
            <img id="postertest" className='poster' src={posterIMG}/>
          </div>
        </div>
        );
    }

    componentDidUpdate() {
        document.body.style.backgroundImage = 'url(' + backdropImg + ')';
    }
}

function nestedDataToString(nestedData) {
  let nestedArray = [],
      resultString;
  if(nestedData !== undefined){
    nestedData.forEach(function(item){
      nestedArray.push(item.name);
    });
  }
  resultString = nestedArray.join(', '); // array to string
  return resultString;
};

export default MovieCard;