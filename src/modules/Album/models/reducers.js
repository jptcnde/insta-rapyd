
export const initialState = {
  albums: [],
}

export const configureAlbums = (state, albums) => ({
  ...state,
  albums
});


export default {
  configureAlbums,
}