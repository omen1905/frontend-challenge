import { createReducer } from 'redux-act';

import {setImages, addFavorites, setFavorites, addFavoritesID, setFavoritesID} from './actions';

const initialState = {
    images: [],
    nextPage: 1,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    favoritesID: JSON.parse(localStorage.getItem('favoritesID')) || [],
};

const reducer = createReducer({}, initialState);

reducer.on(setImages, (state, newImages) => ({
    ...state,
    images: [...state.images, ...newImages],
    nextPage: state.nextPage + 1
}));

reducer.on(addFavorites, (state, images) => ({
    ...state,
    favorites: [...state.favorites, images],
}));

reducer.on(setFavorites, (state, images) => ({
    ...state,
    favorites: images,
}));

reducer.on(addFavoritesID, (state, id) => ({
    ...state,
    favoritesID:  [...state.favoritesID, id],
}));

reducer.on(setFavoritesID, (state, arrId) => ({
    ...state,
    favoritesID:  arrId,
}));

export default reducer;
