import React, { useEffect } from 'react';
import AppBar from '../../domain-components/AppBar'
import AppFooter from '../../domain-components/AppFooter'
import { useSelector, useDispatch } from 'react-redux';
import { getAlbums } from './models/selectors';
import { Container, Typography } from '@material-ui/core';
import AlbumList from './AlbumList';

function Album() {
  const {
    album: { configure }
  } = useDispatch();

  const albums = useSelector(getAlbums);

  useEffect(() => {
    configure();
  }, [configure]);

  return (
    <>
      <AppBar />
      <br />
      <Container maxWidth="lg">
        <Typography variant="h5">
          Browse Albums
        </Typography>
        <br />
        <AlbumList albums={albums} />
      </Container>
      <AppFooter />
    </>
  );
}

export default Album;