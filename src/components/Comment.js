import React, { Component } from "react";
import moment from "moment";
import { getItemsByIds } from "../api/hn-api";

class Comment extends Component {
  state = {
    kids: [],
    showComment: true
  };

  componentDidMount() {
    if (this.props.kids) {
      getItemsByIds(this.props.kids).then(kids =>
        this.setState({
          kids
        })
      );
    }
  }

  createMarkup(text) {
    return {
      __html: text
    };
  }

  toggleComment(e) {
    this.setState({
      showComment: !this.state.showComment
    });
  }

  render() {
    const replyUrl = `https://news.ycombinator.com/reply?id=${this.props.item
      .id}`;
    const commentWrapperClass = this.state.showComment
      ? "comment-wrapper active"
      : "comment-wrapper";
    const commentButtonClass = this.state.showComment
      ? "toggle-comment active"
      : "toggle-comment";
    const toggleButton = this.state.showComment ? "[-]" : `[+]`;

    return (
      <div className="comment">
        <div className="comment-title">
          {this.props.item.by} {moment(
            this.props.item.time * 1000
          ).fromNow()}{" "}
          <span
            className={commentButtonClass}
            onClick={e => this.toggleComment(e)}
          >
            {" "}{toggleButton}{" "}
          </span>
        </div>
        <div className={commentWrapperClass}>
          <div
            className="comment-content"
            dangerouslySetInnerHTML={this.createMarkup(this.props.item.text)}
          />
          <a className="reply-link" href={replyUrl}>
            reply
          </a>
          {this.state.kids.map(item =>
            <Comment key={item.id} item={item} kids={item.kids} />
          )}{" "}
        </div>
      </div>
    );
  }
}

export default Comment;
