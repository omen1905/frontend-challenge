import { createReducer } from 'redux-act';

import { REQUEST_STATUS } from '../../constants/ui';

import * as requestsActions from './actions';

const initialState = {
  getImageRequest: REQUEST_STATUS.DEFAULT,
};

const reducer = createReducer({}, initialState);

reducer.on(requestsActions.setRequestLoading, (state, payload) => ({
    ...state,
    ...payload,
}));

export default reducer;
