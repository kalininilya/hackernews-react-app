import React, { Component } from "react";
import { getNewStories } from "../api/hn-api";
import Post from "./Post";
import Loading from "./Loading";
import Pagination from "./Pagination";

class NewStories extends Component {
  state = {
    topStories: [],
    loaded: false
  };

  componentDidMount() {
    const itemsPerPage = 30;
    const page = parseInt(this.props.match.params.page, 10) || 1;
    getNewStories(page, itemsPerPage).then(topStories =>
      this.setState({ topStories, loaded: true })
    );
  }

  componentWillReceiveProps() {
    const page = parseInt(this.props.match.params.page, 10) || 1;
    const itemsPerPage = 30;
    this.setState({ loaded: false });
    getNewStories(page, itemsPerPage).then(topStories =>
      this.setState({ topStories, loaded: true })
    );
  }

  render() {
    const itemsPerPage = 30;
    const page = parseInt(this.props.match.params.page, 10) || 1;

    if (!this.state.loaded) return <Loading />;
    return (
      <div>
        <ul className="stories-list">
          {this.state.topStories.map((story, index, arr) =>
            <Post
              className="post"
              story={story}
              key={story.id}
              itemId={page * itemsPerPage - (arr.length - index)}
              showId
            />
          )}
        </ul>
        <Pagination page={page} category="/new/" />
      </div>
    );
  }
}

export default NewStories;
