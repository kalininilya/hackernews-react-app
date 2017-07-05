import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <ul className="categories-list">
        <div className="categories-item-logo-wrapper">
          <img
            className="categories-item-logo"
            src={logo}
            alt="hakcer news logo"
          />
        </div>
        <li className="categories-item categories-item-hn-name">
          <strong>
            <Link to="/" className="header-link">
              Hacker News
            </Link>
          </strong>
        </li>
        <li className="categories-item">
          <Link to="/new" className="header-link">
            new
          </Link>
        </li>
        <li className="categories-item">
          <Link to="/comments" className="header-link">
            | comments
          </Link>
        </li>
        <li className="categories-item">
          <Link to="/show" className="header-link">
            | show
          </Link>
        </li>
        <li className="categories-item">
          <Link to="/ask" className="header-link">
            | ask
          </Link>
        </li>
        <li className="categories-item">
          <Link to="/jobs" className="header-link">
            | jobs
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
