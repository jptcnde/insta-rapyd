import { createModel } from '@rematch/core';
import { default as reducers, initialState } from './reducers';
import effects from './effects';

export default createModel({
  name: 'album',
  state: initialState,
  reducers,
  effects
});
