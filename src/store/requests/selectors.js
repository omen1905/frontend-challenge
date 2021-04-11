import { createSelector } from 'reselect';

import { moduleName } from './actions';

const storeSelector = store => store[moduleName];

export const isRequestLoadingSelector = request =>
    createSelector(storeSelector, statuses => statuses[request].loading);

export const isRequestSuccessfulSelector = request =>
    createSelector(storeSelector, statuses => statuses[request].success);

export const isRequestFailedSelector = request =>
    createSelector(storeSelector, statuses => statuses[request].failure);
