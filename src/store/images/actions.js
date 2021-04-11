import { createAction } from 'redux-act';
import { makeGetImageRequest } from '../requests/actions';
import {nextPageSelector, favoritesSelector,favoritesIDSelector} from "./selectors";

export const moduleName = 'images';

export const setImages = createAction(`${moduleName}/SET_IMAGES`);
export const addFavorites = createAction(`${moduleName}/ADD_FAVORITES`);
export const setFavorites = createAction(`${moduleName}/SET_FAVORITES`);
export const addFavoritesID = createAction(`${moduleName}/ADD_FAVORITES_ID`);
export const setFavoritesID = createAction(`${moduleName}/SET_FAVORITES_ID`);

export const getImage = () => async (dispatch, getState) => {
    const nextPage = nextPageSelector(getState());

    try {
        const result = await dispatch(makeGetImageRequest(nextPage));

        const images = result.filter(({width, height}) => {
            const acceptedRatio = width / height;

            //TODO
            return 1.4 < acceptedRatio < 1.5;
        } ).map(({id, url}) => {
            return { id, url }
        })

        dispatch(setImages(images))
    } catch (e) {
        return {}
    }
}


export const deleteFavorites = (idDelete) => async (dispatch, getState) => {
    const favoritesImages = favoritesSelector(getState());
    const favoritesID = favoritesIDSelector(getState());

    dispatch(setFavoritesID(favoritesID.filter((itemId)=> itemId !== idDelete)))
    dispatch(setFavorites(favoritesImages.filter(({id})=> id !== idDelete)))
}

export const addFavorite = ({ id, url }) => async (dispatch, getState) => {
    const favoritesID = favoritesIDSelector(getState());

    if (!favoritesID.includes(id)) {
        dispatch(addFavoritesID(id))
    }

    dispatch(addFavorites({ id, url }))
}

