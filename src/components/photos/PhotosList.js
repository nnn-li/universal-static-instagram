'use strict';

import React, {Component, PropTypes} from 'react';
import PhotoImage from '../photo/PhotoImage';
import PhotoDate from '../photo/PhotoDate';
import PhotoLink from '../photo/PhotoLink';
import PhotoTitle from '../photo/PhotoTitle';

export default class PhotosList extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
  }

  render () {
    return (
      <ul>
        {this.props.photos.map((photo) => {
          return (
            <li key={photo.id}>
              <PhotoLink path={photo.id}>
                <PhotoImage {...photo} type={this.props.type} />
                <PhotoDate {...photo} /> - <PhotoTitle {...photo} />
              </PhotoLink>
              <p>Comments: {photo.comments.count}</p>
              <p>Likes: {photo.likes.count}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
