import React from 'react'
import {useGlobalContext} from './../Context'
import Loading from './Loading'
import Title from './Title'
import Room from './Room'
const FeaturedRooms = () => {
    const {featuredRooms,loading} = useGlobalContext()
    console.log(featuredRooms);
    return (
        <section className="featured-rooms">
            <Title title="featured rooms"/>
            <div className="featured-rooms-center">
                {loading ? <Loading/> : featuredRooms.map((room)=>{
                    return <Room key={room.id} room={room}/> 
                })}
            </div>
        </section>
    )
}

export default FeaturedRooms
