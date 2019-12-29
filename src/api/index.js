import faker from 'faker';
import { checkStatus, parseJSON } from './utils';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const ALBUMS_LIMIT = 25; // hardcoded as per requirement
const PHOTOS_LIMIT = 12; // hardcoded as per requirement

export function getAlbums() {
  return fetch(`${API_ENDPOINT}/albums?_limit=${ALBUMS_LIMIT}`)
  .then(checkStatus)
  .then(parseJSON);
}

export async function getPhotosByAlbumId(albumId) {
  // return fetch(`${API_ENDPOINT}/albums/${albumId}/photos`)
  const data = await fetch(`${API_ENDPOINT}/albums/${albumId}/photos?_limit=${PHOTOS_LIMIT}`)
  .then(checkStatus)
  .then(parseJSON);

  return data.map(x => ({
    ...x,
    // for design purpose
    headline: faker.commerce.productName()
  }))
}