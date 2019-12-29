import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PhotoListItem from './PhotoListItem';
import { getPhotosByAlbumId } from '../../../api';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

// native css approach sample without using "Grid" design system implemented below
const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
  },
  item: {
    flex: '1 0 auto',
    width: '100%', // mobile first
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '33.33%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25%'
    },
  }
}));

function PhotoList(props) {
  const { albumId } = props;
  const [photos, setPhotos] = useState([]);

  const classes = useStyles();

  const {
    app: { setFetching }
  } = useDispatch();


  function handleCloseClick(id) {
    setPhotos(photos.filter(x => x.id !== id));
  }

  function handleDrop(e, dropzoneId) {
    const draggedId = Number(e.dataTransfer.getData("id"));
    const draggedItem = photos.find(x => x.id === draggedId);
    const dropzoneItem = photos.find(x => x.id === dropzoneId);

    const newPhotos = photos.slice();
    newPhotos[photos.indexOf(draggedItem)] = dropzoneItem;
    newPhotos[photos.indexOf(dropzoneItem)] = draggedItem;

    setPhotos([...newPhotos]);

  }

  function handleDragStart(e, id) {
    e.dataTransfer.setData('id', id);
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
            onDragStart={(e) => handleDragStart(e, id)}
            onDrop={(e) => handleDrop(e, id)}
          />
        </Grid>
      ))}
      {/*

      just to demonstrate without using a Grid system
      which to cater this clause " Don't use a table component to display photos, use css only."
      from requirement excercise

      <div className={classes.list}>
        <div className={classes.item}>
          <PhotoListItem
            desc={desc}
            url={url}
            thumbnailUrl={thumbnailUrl}
            headline={headline}
            id={id}
            onCloseClick={handleCloseClick}
            onDragStart={(e) => handleDragStart(e, id)}
            onDrop={(e) => handleDrop(e, id)}
          />
        </div>
      </div> */}
    </Grid>
  );
}

PhotoList.propTypes = {
  albumId: PropTypes.string.isRequired,
}

export default memo(PhotoList);