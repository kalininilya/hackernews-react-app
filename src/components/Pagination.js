import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pagination extends Component {
  _onClick(e) {
    window.scrollTo(0, 0);
  }

  render() {
    let currentPage = this.props.page;

    let nextPage = currentPage + 1;
    let prevPage = currentPage - 1;

    if (currentPage < 1) {
      currentPage = 1;
      nextPage = 2;
    }

    if (currentPage === 1) {
      return (
        <div>
          <div className="nav-links-wrapper">
            <Link
              className="nav-link"
              to={`${this.props.category}${nextPage}`}
              onClick={this._onClick()}
            >
              More
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="nav-links-wrapper">
            <Link
              className="nav-link"
              to={`${this.props.category}${prevPage}`}
              onClick={this._onClick()}
            >
              Prev
            </Link>
            <Link
              className="nav-link"
              to={`${this.props.category}${nextPage}`}
              onClick={this._onClick()}
            >
              More
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Pagination;
