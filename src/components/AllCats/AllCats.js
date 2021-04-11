import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import { ItemCats } from "../ItemCats";

import { imagesSelector } from "../../store/images/selectors";
import {getImage} from "../../store/images/actions";

import './AllCats.css';

export const AllCats = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getImage() )
    }, [])

    const images = useSelector(imagesSelector)

    return (
        <div className='Wrapper'>
            {images.map(({id, url}) =>
                <Fragment key={id}>
                    <ItemCats id={id} url={url}/>
                </Fragment>)}
        </div>
    )
}