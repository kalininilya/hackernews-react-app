import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import TopStories from "./TopStories";
import Newest from "./Newest";

class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      itemsPerPage: 30
    };
  }

  _onClick(e) {
    window.scrollTo(0, 0);
  }

  render() {
    let currentPage = parseInt(this.props.match.params.page) || this.state.page;

    let nextPage =
      parseInt(this.props.match.params.page) + 1 ||
      parseInt(this.state.page) + 1;
    let prevPage = currentPage - 1;

    if (currentPage < 1) {
      currentPage = 1;
      nextPage = 2;
    }

    if (currentPage === 1) {
      return (
        <div>
          {console.log(this.props.route)}
          <Switch>
            <Route path="/">
              <TopStories
                page={currentPage}
                itemsPerPage={this.state.itemsPerPage}
              />
            </Route>
            <Route path="/new" component={Newest} />
          </Switch>
          <div className="nav-links-wrapper">
            <Link
              className="nav-link"
              to={`/stories/${nextPage}`}
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
          <TopStories
            page={currentPage}
            itemsPerPage={this.state.itemsPerPage}
          />
          <div className="nav-links-wrapper">
            <Link
              className="nav-link"
              to={`/stories/${prevPage}`}
              onClick={this._onClick()}
            >
              Prev
            </Link>
            <Link
              className="nav-link"
              to={`/stories/${nextPage}`}
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
