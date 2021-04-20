import React from 'react'
import { useGlobalContext } from '../Context'
// import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
const RoomsContainer = () => {
    const {loading} = useGlobalContext()
    return (
        <>
            {
                loading ? 
                <Loading/> 
                :
                <>
                    {/* <RoomsFilter /> */}
                    <RoomsList />
                </>
            }
            
        </>
    )
}

export default RoomsContainer
