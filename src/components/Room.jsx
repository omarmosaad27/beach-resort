import React from 'react'
import {Link} from 'react-router-dom'
import defaultImage from './../images/room-1.jpeg'
const Room = ({room}) => {
    const {name, slug, price, images} = room
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImage} alt={name}/>
                <div className="price-top">
                    <h3>$ {price}</h3>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">features</Link>
            </div>
            <p className="room-info">
                {name}
            </p>
        </article>
    )
}

export default Room
