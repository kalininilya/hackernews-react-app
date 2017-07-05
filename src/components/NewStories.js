import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getNewStories } from "../api/hn-api";
import Post from "./Post";
import Loading from "./Loading";
import Pagination from "./Pagination";

class TopStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      loaded: false
    };
  }

  componentDidMount() {
    const itemsPerPage = 30;
    const page = parseInt(this.props.match.params.page) || 1;
    getNewStories(page, itemsPerPage).then(topStories =>
      this.setState({ topStories, loaded: true })
    );
  }

  componentWillReceiveProps(nextProps) {
    const page = parseInt(this.props.match.params.page) || 1;
    const itemsPerPage = 30;

    this.setState({ loaded: false });
    getNewStories(page, itemsPerPage).then(topStories =>
      this.setState({ topStories, loaded: true })
    );
  }

  render() {
    const itemsPerPage = 30;
    const page = parseInt(this.props.match.params.page) || 1;
    if (this.state.loaded === true) {
      return (
        <div>
          <ul className="stories-list">
            {this.state.topStories.map((story, index, arr) => {
              return (
                <Post
                  className="post"
                  story={story}
                  key={story.id}
                  itemId={page * itemsPerPage - (arr.length - index)}
                />
              );
            })}
          </ul>
          <Pagination page={page} category="/new/" />
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

TopStories.propTypes = {};

export default TopStories;
