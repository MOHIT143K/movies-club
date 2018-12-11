import React from 'react';
import logo from '../../logo.svg';

// Main header used at home, search and watch list page
export const Header = (props) => {
    return (
        <div className="row header">
            <div className="col-sm-1">
                <a href="/home"><img className="p-2" src={logo} alt="logo" /></a>
            </div>
            <div className="col-sm-7">
                <h1>Welcome to Movies Club</h1>
            </div>
            <div className="col-sm-4 p-2">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="/watch-list">My Watch List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Title row for two sections top rated and recently released.
export const Titles = (props) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <h2 className="text-center p-2">
                    Top Rated
                </h2>
            </div>
            <div className="col-sm-6">
                <h2 className="text-center p-2">
                    Recently Released
                </h2>
            </div>
        </div>
    );
};

