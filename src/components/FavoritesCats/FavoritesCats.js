import { Fragment } from "react";
import {useSelector} from "react-redux";

import { ItemCats } from "../ItemCats";
import { favoritesSelector } from "../../store/images/selectors";

import './FavoritesCats.css';

export const FavoritesCats = () => {
    const images = useSelector(favoritesSelector)

    return (
        <div className='Wrapper'>{images.map(({id, url}) =>
            <Fragment key={id}><ItemCats id={id} url={url}/></Fragment>
        )}
        </div>
    )
}