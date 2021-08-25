import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

Movie.prototype = {};

function Movie({ key, idx, title, year, summary, poster, score}) {
    return (
        <div className="movie_data">
            <img src={poster} alt={title} title={title}/>
            <div >
                <h3 className="movie_idx">{idx}.</h3>
                <h4 className="movie_title"> {title} [{year}]</h4>
            </div>
            <h5 className="movie_score"> Score: {score}</h5>
            <p className="movie_summary">{summary}</p>
            <br/><br/><br/>
        </div>
    );
}

//프로퍼티의 타입을 미리 선언
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired     //img url
};

export default Movie;