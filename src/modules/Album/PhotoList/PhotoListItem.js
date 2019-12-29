import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/CancelRounded';


import Photo from './Photo';
import PhotoDescriptionBar from './PhotoDescriptionBar';
import PhotoViewDialog from './PhotoViewDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  closeBtn: {
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 1,

  },
  imgContainer: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

function PhotoListItem(props) {
  const {
    desc,
    url,
    thumbnailUrl,
    headline,
    onCloseClick,
    id,
    onDrop,
    onDragStart
  } = props;

  const classes = useStyles();

  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [descBarOpen, setDescBarOpen] = useState(false);

  function handlePhotoMouseEnter() {
    setDescBarOpen(true)
  }

  function handlePhotoMouseLeave() {
    setDescBarOpen(false)
  }

  function handlePhotoClick() {
    setViewDialogOpen(true);
  }

  return (
    <>
      <div
        draggable
        onDragOver={(e) => e.preventDefault()}
        onDragStart={onDragStart}
        onDrop={onDrop}
        className={classes.root}>
        <IconButton
          onClick={() => onCloseClick(id)}
          className={classes.closeBtn}>
          <CancelIcon color="inherit" />
        </IconButton>
        <Photo
          url={thumbnailUrl}
          title={headline}
          ContainerProps={{ className: classes.imgContainer }}
          onMouseEnter={handlePhotoMouseEnter}
          onMouseLeave={handlePhotoMouseLeave}
          onClick={handlePhotoClick}
        />
        <PhotoDescriptionBar desc={`${desc}-${id}`} open={descBarOpen} />
      </div>
      <PhotoViewDialog onClose={() => setViewDialogOpen(false)} url={url} open={viewDialogOpen} />
    </>
  );
}

PhotoListItem.propTypes = {
  desc: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default PhotoListItem;