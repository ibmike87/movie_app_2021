import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({ title, year, summary, poster, score, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <h5 className="movie_score"> Score: {score}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, idx) => {
                        return <li key={idx} className="movie_genre">{genre}</li>;
                    })}
                </ul>
                <p className="movie_summary">{summary}</p>
                {/*<p className="movie_summary">{summary.slice(0, 180)}...</p>*/}
            </div>
        </div>
    );
}

//프로퍼티의 타입을 미리 선언
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,     //img url
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;