// Function used to add movie in watch list (localStorage)
export const addToWatchList = (movie) => {
    let userInfo = localStorage.getItem('userInfo');
    let currentUser = localStorage.getItem('currentUser');
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        userInfo.map(user => {
            if (user.username === currentUser) {
                let isPresentInWatchList = false;
                user.watchList.length === 0 ? user.watchList.push(movie) :
                    user.watchList.map(item => {
                        if (item.id === movie.id) {
                            isPresentInWatchList = true;
                        }
                    });
                if (isPresentInWatchList) {
                    alert('Already present in watchlist!');
                } else {
                    user.watchList.push(movie)
                }
            }
        })
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

// Function used to get watch list against current user.
export const getWatchList = () => {
    let userInfo = localStorage.getItem('userInfo');
    let currentUser = localStorage.getItem('currentUser');
    let watchList = [];
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        userInfo.map(user => {
            if (user.username === currentUser) {
                watchList = user.watchList;
            }
        })
    }
    return watchList;
};

// Function used to redirect after successful login.
export const redirectTo = (location) => {
    window.location.href = '/' + location;
};
