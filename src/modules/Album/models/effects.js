import * as api from '../../../api';
import logger from '../../../utiils/logger';

export default dispatch => ({
  async configure() {
    try {
      dispatch.app.setFetching(true);
      const albums = await api.getAlbums();
      this.configureAlbums(albums);
    } catch (e) {
      logger(e.message, 'err');
    } finally {
      dispatch.app.setFetching(false);
    }
  }
});