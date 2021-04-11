import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {addFavorite, deleteFavorites} from '../../store/images/actions'
import './ItemCats.css';

import likeImage from './img/border-like.png'
import likeHoverImage from './img/like-hover.png'
import like from './img/like.png'
import {favoritesIDSelector} from "../../store/images/selectors";

export const ItemCats = ({id, url }) => {
    const dispatch = useDispatch()

    const favoritesID = useSelector(favoritesIDSelector);

    const [hover, setHover] = useState(false)
    const [hoverLike, setHoverLike] = useState(false)

    const changeHover = () => setHover(!hover)
    const changeLikeHover = () => setHoverLike(!hoverLike)

    const srcLike = hoverLike ? likeHoverImage : likeImage

    const onClickImage = () => {

        if (favoritesID.includes(id)) {
            dispatch(deleteFavorites(id))

            return
        }

        dispatch(addFavorite({id, url}))
    }

    const isVisibleLike = hover || favoritesID.includes(id)

    return (
        <div className='Item' key={id} onMouseEnter={changeHover} onMouseLeave={changeHover}>
            <div className='Image' style={{background: `url(${url})`}}>

                {isVisibleLike && <div onMouseEnter={changeLikeHover} onMouseLeave={changeLikeHover}>
                    <img
                        onClick={onClickImage}
                        className='Like'
                        src={favoritesID.includes(id) ? like : srcLike}
                        alt=""/>

                </div>}
            </div>
        </div>
    )
}