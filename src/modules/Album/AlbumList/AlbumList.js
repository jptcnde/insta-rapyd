import React from 'react';
import PropTypes from 'prop-types';
import AlbumListItem from './AlbumListItem';

function AlbumList(props) {
  const { albums } = props;
  return (
    albums.map(({ id, title }) => (
      <AlbumListItem id={id} title={title}  />
    )
  ));
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }))
}

export default AlbumList;