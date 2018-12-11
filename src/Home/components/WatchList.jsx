import React, { Component } from 'react';
import { Header } from './Header';
import { getWatchList } from '../Helper';
import { RenderMovies } from './RenderMovies';

// Component used to show watch list with respected to current user.
class WatchList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            watchList : getWatchList()
        };
    }

    // This function removes movie from watch list (localStograge as well as state)
    removeFromWatchList = (movie) => {
        let userInfo = localStorage.getItem('userInfo');
        let currentUser = localStorage.getItem('currentUser');
        let sliceIndex = -1;
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            userInfo.map(user => {
                if (user.username === currentUser) {
                    for (let count = 0; count < user.watchList.length; count++) {
                        if (movie.id === user.watchList[count].id) {
                            sliceIndex = count;
                        }
                    }
                    if (sliceIndex > -1) {
                        user.watchList.splice(sliceIndex, 1);
                        this.setState({
                            watchList: user.watchList
                        });
                    }
                }
            });
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    };

    // Function used to render movie if there are any movies present in watch list.
    renderWatchListMovies(movies) {
        if (movies !== null && movies.length > 0) {
            return movies.map(movie => {
                let movieToRender = {
                    results: [movie]
                };
                return (
                    <div className="col-sm-6" key={movie.id}>
                        <RenderMovies movies={movieToRender} removeFromWatchList={this.removeFromWatchList} />
                    </div>
                )
            });
        } else {
            return (
                <div className="col-sm-12">
                    <h3 className="text-center p-2">
                        There is no item in your watch list. 
                        <br />
                        Please add to see here.
                    </h3>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                <br />
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-center p-2">
                            My Watch List
                        </h2>
                    </div>
                    {this.renderWatchListMovies(this.state.watchList)}
                </div>
                <br />
            </div>
        );
    }
};

export default WatchList;