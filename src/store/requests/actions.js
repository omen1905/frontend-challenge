import { createAction } from 'redux-act';
import { REQUEST_STATUS } from '../../constants/ui';

import { getImageRequest } from './api';

export const moduleName = 'requests';

export const setRequestLoading = createAction(`${moduleName}/SET_REQUEST_LOADING`);

export const setLoading = (request, loadingStatus) => dispatch => {
    switch (loadingStatus) {
        case 'loading':
            return dispatch(setRequestLoading({ [request]: REQUEST_STATUS.LOADING }));
        case 'success':
            return dispatch(setRequestLoading({ [request]: REQUEST_STATUS.SUCCESS }));
        case 'failure':
            return dispatch(setRequestLoading({ [request]: REQUEST_STATUS.FAILURE }));
        default:
            return dispatch(setRequestLoading({ [request]: REQUEST_STATUS.DEFAULT }));
    }
};

/* Получение котов */
export const makeGetImageRequest = (nextPage, limit) => async (dispatch) => {

  try {
    dispatch(setLoading('getImageRequest', 'loading'));

    const { data } = await getImageRequest(limit, nextPage);

    dispatch(setLoading('getImageRequest', 'success'));

    return data;
  } catch (error) {
    dispatch(setLoading('getImageRequest', 'failure'));

    throw error?.response;
  }
};