import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getTopStoriesIds, getItemsByIds} from '../api/hn-api'
import Post from './Post'

class TopStories extends Component {

  constructor(props) {
    super(props);

    this.state = ({topStories: []})
  }

  componentDidMount() {
    getTopStoriesIds()
      .then(ids => getItemsByIds(ids.slice(0, 30)))
      .then(topStories => this.setState({topStories}))
  }

  render() {
    return (
      <div>
        <ol className="stories-list">
          {this
            .state
            .topStories
            .map(story => {
              return <Post className="post" story={story} key={story.id}/>
            })}
        </ol>
        More
      </div>
    );
  }
}

TopStories.propTypes = {}

export default TopStories