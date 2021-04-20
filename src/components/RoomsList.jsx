import React from 'react'
import { useGlobalContext } from '../Context'
import Room from './Room'
const RoomsList = () => {
    const {sortedRooms} = useGlobalContext()
    if(sortedRooms.length === 0){
        return (
            <div className="empty-search">
                infortunately no rooms matched your search parameters
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    sortedRooms.map((room)=>{
                        return(
                            <Room key={room.id} room={room}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default RoomsList
