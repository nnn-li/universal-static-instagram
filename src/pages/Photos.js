'use strict';

import React, {PropTypes} from 'react';
import PageContainer from '../components/PageContainer';
import PhotosBy from '../components/photos/PhotosBy';
import PhotosStore from '../stores/PhotosStore';
import PhotosActions from '../actions/PhotosActions';

const Photos = React.createClass({
  propTypes: {
    loading: PropTypes.bool.isRequired,
    photos: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    error: PropTypes.instanceOf(Error)
  },

  statics: {
    getStores () {
      return [PhotosStore];
    }
  },

  componentDidMount () {
    PhotosActions.fetch(this.props.location.pathname);
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      PhotosActions.fetch(nextProps.location.pathname);
    }
  },

  render () {
    const {loading, error, photos, params} = this.props;
    return (
      <PageContainer
        loading={loading}
        error={error}
        component={PhotosBy}
        data={{photos}}
        type='thumbnail'
        {...params}
      />
    );
  }
});

export default Photos;