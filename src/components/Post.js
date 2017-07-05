import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import { extractRootDomain } from "../helpers";

class Post extends Component {
  render() {
    const postId = this.props.itemId + 1;
    const domainName =
      extractRootDomain(this.props.story.url) !== ""
        ? `(${extractRootDomain(this.props.story.url)})`
        : "";

    const timeFromNow = moment(this.props.story.time * 1000).fromNow();
    const { score, by } = this.props.story;
    return (
      <li className={this.props.className} key={this.props.story.id}>
        <div>
          {postId}
          {"."}
        </div>
        <div className="post-wrapper">
          <a className="post-title" href={this.props.story.url}>
            {this.props.story.title}
          </a>{" "}
          <span className="domain-title">{domainName}</span>
          <div className="post-descr">
            {this.props.story.score} points by {this.props.story.by}{" "}
            {timeFromNow}
            {" | "}
            <Link className="post-link" to={`/item/${this.props.story.id}`}>
              {this.props.story.descendants} comments
            </Link>
          </div>
        </div>
      </li>
    );
  }
}

export default Post;
