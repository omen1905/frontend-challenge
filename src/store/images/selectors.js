import {createSelector} from 'reselect';

import {moduleName} from './actions';

const storeSelector = (store) => store[moduleName];

export const imagesSelector = createSelector(storeSelector, (store) => store.images)

export const nextPageSelector = createSelector(storeSelector, (store) => store.nextPage)

export const favoritesSelector = createSelector(storeSelector, (store) => store.favorites)
export const favoritesIDSelector = createSelector(storeSelector, (store) => store.favoritesID)