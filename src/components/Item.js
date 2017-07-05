import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getItemById, getItemsByIds} from '../api/hn-api'
import Post from '../components/Post'
import Comment from '../components/Comment'

class Item extends Component {
  constructor() {
    super()
    this.state = {
      item: {},
      items: []
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    getItemById(id).then(item => getItemsByIds(item.kids).then(items => this.setState({items, item})))
  }

  render() {
    return (
      <div>
        <Post className="item-post" story={this.state.item} key={this.state.item.id}/> {this
          .state
          .items
          .map(item => <Comment key={item.id} item={item} kids={item.kids}/>)}
        Loader here
      </div>
    );
  }
}

Item.propTypes = {}

export default Item