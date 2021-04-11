import { combineReducers } from 'redux';

import imagesReducer from './images';
import requestsReducer from './requests'

export default combineReducers({
    images: imagesReducer,
    requests: requestsReducer
});
