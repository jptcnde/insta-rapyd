import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PhotoListItem from './PhotoListItem';
import { getPhotosByAlbumId } from '../../../api';
import { useDispatch } from 'react-redux';

function PhotoList(props) {
  const { albumId } = props;
  const [photos, setPhotos] = useState([]);

  const {
    app: { setFetching }
  } = useDispatch();


  function handleCloseClick(id) {
    console.log(photos.filter(x => x.albumId !== id))
    setPhotos(photos.filter(x => x.id !== id));
  }

  useEffect(() => {
    async function loadPhotos() {
      try {
        if (!albumId) {
          throw new Error('Missing "AlbumId" param');
        }
        setFetching(true);
        const photoData = await getPhotosByAlbumId(albumId);
        setPhotos(photoData);
      } catch(e) {
        // recommendation is to handle by utility logger in real world app
        console.error(e.message);
      } finally {
        setFetching(false);
      }
    }
    loadPhotos();

    // clear data on unmount
    return () => setPhotos([]);

  }, [setFetching, albumId]);


  return (
    <Grid
      container
      alignItems="baseline"
      spacing={2}
    >
      {photos.map(({ title: desc, url, thumbnailUrl, headline, id }) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <PhotoListItem
            desc={desc}
            url={url}
            thumbnailUrl={thumbnailUrl}
            headline={headline}
            id={id}
            onCloseClick={handleCloseClick}
          />
        </Grid>
      ))}
    </Grid>
  );
}

PhotoList.propTypes = {
  albumId: PropTypes.string.isRequired,
}

export default memo(PhotoList);