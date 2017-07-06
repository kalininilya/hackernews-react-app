import React, { Component } from "react";
import { getItemById, getItemsByIds } from "../api/hn-api";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Loading from "./Loading";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      item: {},
      items: [],
      loaded: false
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    getItemById(id).then(item =>
      getItemsByIds(item.kids).then(items =>
        this.setState({ items, item, loaded: true })
      )
    );
  }

  createMarkup(text) {
    return {
      __html: text
    };
  }

  render() {
    const text = this.state.item.text || "";

    if (!this.state.loaded) return <Loading />;
    return (
      <div>
        <Post
          className="item-post"
          story={this.state.item}
          key={this.state.item.id}
          itemId={this.state.item.id}
          showId={false}
        />
        <div
          className="comment"
          dangerouslySetInnerHTML={this.createMarkup(text)}
        />
        {this.state.items.map(item =>
          <Comment key={item.id} item={item} kids={item.kids} />
        )}
      </div>
    );
  }
}

export default Item;
