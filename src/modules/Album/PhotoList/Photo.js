/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  imgContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },

  img: {
    width: '100%',
    height: '100%',
    display: 'inline-block',
    objectFit: 'cover',
    objectPosition: 'right top'
  }
}));

function Photo(props) {
  const { url, title, ContainerProps, ...otherProps } = props;
  const classes = useStyles();
  return (
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...ContainerProps}
    >
      <img
        src={url}
        alt={title}
        className={classes.img}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </div>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ContainerProps: PropTypes.shape({})
};

Photo.defaultProps = {
  ContainerProps: {}
};

export default Photo;
