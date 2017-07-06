import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { extractRootDomain } from "../helpers";

class Post extends Component {
  render() {
    const domainName =
      extractRootDomain(this.props.story.url) &&
      `(${extractRootDomain(this.props.story.url)})`;

    const timeFromNow = moment(this.props.story.time * 1000).fromNow();
    const { score, by, title, descendants, id } = this.props.story;
    const postUrl = this.props.story.url || `/item/${id}`;
    const comments = descendants || 0;
    const commentDescr = !(comments === 0) ? `${comments} comments` : "discuss";
    const postId =
      this.props.showId === true ? `${this.props.itemId + 1}.` : "";

    return (
      <li className={this.props.className} key={id}>
        <div>
          {postId}
        </div>
        <div className="post-wrapper">
          <a className="post-title" href={postUrl}>
            {title}
          </a>
          <span className="domain-title">
            {" "}{domainName}
          </span>
          <div className="post-descr">
            {score} points by{" "}
            <Link to={`/user/${by}`} className="user-link">
              {by}
            </Link>{" "}
            <Link className="post-link" to={`/item/${id}`}>
              {timeFromNow}
            </Link>
            {" | "}
            <Link className="post-link" to={`/item/${id}`}>
              {commentDescr}
            </Link>
          </div>
        </div>
      </li>
    );
  }
}

export default Post;
