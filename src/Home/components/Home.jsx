import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Titles } from './Header';
import { RenderMovies } from './RenderMovies';
import { SearchBar } from './SearchBar';
import { getTopRatedMovies, getRecentlyReleasedMovies, performSearch, onChangeSearch } from '../Actions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.renderSearchedMovies = this.renderSearchedMovies.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
    }

    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
            if (this.props.searchedMovies.results.length === 0) {
                this.props.getTopRatedMovies(this.props.topRated.page + 1);
                this.props.getRecentlyReleasedMovies(this.props.recentlyReleased.page + 1);
            } else {
                this.props.performSearch(this.props.searchTerm, this.props.searchedMovies.page + 1);
            }
        }
    }

    componentDidMount() {
        this.props.getTopRatedMovies(1);
        this.props.getRecentlyReleasedMovies(1);
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    searchMovies(event) {
        event.preventDefault();
        this.props.performSearch(this.props.searchTerm, 1);
    }

    renderSearchedMovies(movies) {
        if (movies !== null && movies.results.length > 0) {
            return movies.results.map(movie => {
                let movieToRender = {
                    results: [movie]
                };
                return (
                    <div className="col-sm-6" key={movie.id}>
                        <RenderMovies movies={movieToRender} />
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SearchBar
                    searchMovies={this.searchMovies}
                    searchTerm={this.props.searchTerm}
                    onChangeSearch={this.props.onChangeSearch}
                />
                {
                    this.props.searchedMovies.results.length === 0 ?
                        <div>
                            <Titles />
                            <div className="row">
                                <div className="col-sm-6">
                                    <RenderMovies movies={this.props.topRated} />
                                </div>
                                <div className="col-sm-6">
                                    <RenderMovies movies={this.props.recentlyReleased} />
                                </div>
                            </div>
                        </div> :
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="text-center p-2">
                                    Searched Results
                                </h2>
                            </div>
                            {this.renderSearchedMovies(this.props.searchedMovies)}
                        </div>
                }
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        topRated: state.home.topRated,
        recentlyReleased: state.home.recentlyReleased,
        searchedMovies: state.home.searchedMovies,
        searchTerm: state.home.searchTerm
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTopRatedMovies,
        getRecentlyReleasedMovies,
        performSearch,
        onChangeSearch
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)