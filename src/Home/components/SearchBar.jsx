import React from 'react';

// This component is used for searching movies.
export const SearchBar = (props) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <form onSubmit={props.searchMovies}>
                    <div className="form-group p-3">
                        <div className="active-cyan-4 mb-4">
                            <input className="form-control" type="text" placeholder="Search movies (Type name and hit enter)" aria-label="Search"
                                value={props.searchTerm}
                                onChange={e => props.onChangeSearch(e.target.value)}
                            />
                            <input className="hidden" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};