import React from 'react';
import { addToWatchList } from '../Helper';

// This component render a particular card for a movies.
export const RenderMovies = (props) => {
    let { movies, removeFromWatchList } = props;
    if (movies !== null && movies.results.length > 0) {
        return movies.results.map(movie => {
            let parts = movie.release_date.split('-');
            let release_date = new Date(parts[0], parts[1] - 1, parts[2]);
            return (
                <div className="card flex-md-row mb-4 shadow-sm h-md-250" key={movie.id}>
                    <div className="card-body d-flex flex-column align-items-start">
                        <h5 className="mb-0">
                            <span className="text-dark">{movie.title}</span>
                        </h5>
                        <div className="mb-1 text-muted">
                            <strong className="d-inline-block mb-2 text-primary">Rating : {movie.vote_average} </strong>
                            <br />Release Date: {release_date.toDateString()}
                        </div>
                        <div className="card-text mb-auto">
                            <p>{movie.overview}</p>
                        </div>
                        <button type="button" className="btn btn-outline-primary" onClick={removeFromWatchList ? () => removeFromWatchList(movie) : () => addToWatchList(movie)}>{removeFromWatchList ? 'Remove from ' : 'Add to '}Watch List</button>
                    </div>
                    <img className="card-img-right flex-auto d-none d-lg-block" alt="POSTER" src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path} data-holder-rendered="true" />
                </div>
            )
        });
    }

    return '';
};