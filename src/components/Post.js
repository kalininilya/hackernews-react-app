import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {extractRootDomain} from '../helpers'

class Post extends Component {
  render() {
    return (
      <li className={this.props.className} key={this.props.story.id}>
        <a className="post-title" href={this.props.story.url}>{this.props.story.title}</a>
        {" "}
        <span>({extractRootDomain(this.props.story.url)})</span>
        <div className="post-descr">
          {this.props.story.score}
          {" "}
          points by {this.props.story.by}
          {" "}{moment(this.props.story.time * 1000).fromNow()}{" | "}
          <Link className="post-link" to={`/item/${this.props.story.id}`}>
            {this.props.story.descendants}
            {" "}comments</Link>
        </div>
      </li>
    )
  }
}

// Post.propTypes = {
//     todos: React.PropTypes.array.isRequired };

export default Post