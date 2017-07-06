import React from "react";
import logo from "../logo.svg";
import { NavLink, Link } from "react-router-dom";

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
            <Link to="/" className="header-link header-link-home">
              Hacker News
            </Link>
          </strong>
        </li>
        <li className="categories-item">
          <NavLink
            to="/new"
            className="header-link"
            activeClassName="active-nav-link"
          >
            new
          </NavLink>
        </li>
        <li className="categories-item">
          |{" "}
          {/*<NavLink
            to="/comments"
            className="header-link"
            activeClassName="active-nav-link"
          >*/}
          comments
          {/*</NavLink>*/}
        </li>
        <li className="categories-item">
          |{" "}
          <NavLink
            to="/show"
            className="header-link"
            activeClassName="active-nav-link"
          >
            show
          </NavLink>
        </li>
        <li className="categories-item">
          |{" "}
          <NavLink
            to="/ask"
            className="header-link"
            activeClassName="active-nav-link"
          >
            ask
          </NavLink>
        </li>
        <li className="categories-item">
          |{" "}
          <NavLink
            to="/jobs"
            className="header-link"
            activeClassName="active-nav-link"
          >
            jobs
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
