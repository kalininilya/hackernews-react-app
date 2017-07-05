import React from 'react'
import logo from '../logo.svg';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="main-header">
            <ul className="categories-list">
                <div className="categories-item-logo-wrapper">
                    <img className="categories-item-logo" src={logo} alt="hakcer news logo"/>
                </div>
                <li className="categories-item categories-item-hn-name">
                    <strong>
                        <Link to="/" className="header-link">
                            Hacker News
                        </Link>
                    </strong>
                </li>
                <li className="categories-item">
                    new
                </li>
                <li className="categories-item">
                    | comments
                </li>
                <li className="categories-item">
                    | show
                </li>
                <li className="categories-item">
                    | ask
                </li>
                <li className="categories-item">
                    | jobs
                </li>
            </ul>
        </header>
    );
}

export default Header