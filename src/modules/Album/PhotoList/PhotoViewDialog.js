import React from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Photo from './Photo';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root.MuiDialog-paper': {
      maxWidth: 'none',
    }
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
}));

function PhotoViewDialog(props) {
  const { open, url, onClose } = props;
  const classes = useStyles();

  return (
    <Dialog className={classes.root} open={open}>
      <DialogTitle>
        View Photo
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Photo url={url} />
      </DialogContent>
    </Dialog>
  );
}

PhotoViewDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PhotoViewDialog;
