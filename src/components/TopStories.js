import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getTopStoriesIds, getItemsByIds } from "../api/hn-api";
import Post from "./Post";
import Loading from "./Loading";

class TopStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      loaded: false
    };
  }

  componentDidMount() {
    const { itemsPerPage, page } = this.props;
    getTopStoriesIds()
      .then(ids => {
        return getItemsByIds(
          ids.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
        );
      })
      .then(topStories =>
        this.setState({ topStories, page, itemsPerPage, loaded: true })
      );
  }

  componentWillReceiveProps(nextProps) {
    const { itemsPerPage, page } = nextProps;
    let topStories = [];
    const topStoriesLength =
      page * itemsPerPage - (page * itemsPerPage - itemsPerPage);
    for (let i = 0; i < topStoriesLength; i++) {
      topStories.push(" ");
    }
    this.setState({ loaded: false, topStories });
    getTopStoriesIds()
      .then(ids => {
        return getItemsByIds(
          ids.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
        );
      })
      .then(topStories =>
        this.setState({ topStories, page, itemsPerPage, loaded: true })
      );
  }

  render() {
    if (this.state.loaded === true) {
      return (
        <div>
          <ul className="stories-list">
            {this.state.topStories.map((story, index, arr) => {
              const { itemsPerPage, page } = this.props;
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
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

TopStories.propTypes = {};

export default TopStories;
