import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getItemsByIds} from '../api/hn-api'
import moment from 'moment'

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      kids: []
    }
  }

  componentDidMount() {
    if (this.props.kids) {
      getItemsByIds(this.props.kids).then(kids => this.setState({kids}))
    }
  }

  createMarkup(text) {
    return {__html: text}
  }

  render() {
    if (this.state.kids.length !== 0) {
      return (
        <div className="comment">
          <div className="comment-title">
            <span className="toggle-comment">
              [-]
            </span>
            {" "}{this.props.item.by}{" "}{moment(this.props.item.time * 1000).fromNow()}
          </div>
          <div dangerouslySetInnerHTML={this.createMarkup(this.props.item.text)}></div>
          {this
            .state
            .kids
            .map(item => <Comment key={item.id} item={item} kids={item.kids}/>)}
        </div>
      );
    } else {
      return null
    }
  }
}

Comment.propTypes = {}

export default Comment
