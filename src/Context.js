import React,{useState, useEffect, useContext} from 'react'
import items from './data'
const RoomContext = React.createContext();

const AppProvider = ({children}) => {
    const [rooms, setRooms] = useState([])
    const [sortedRooms, setSortedRooms] = useState([])
    const [featuredRooms, setFeaturedRooms] = useState([])
    const [loading, setLoading] = useState(true)
    // const [type, setType] = useState('all')
    // const [capacity, setCapacity] = useState(1)
    // const [price, setPrice] = useState(0)
    // const [maxPrice, setMaxPrice] = useState(0)
    // const [minPrice, setMinPrice] = useState(0)
    // const [minSize, setMinSize] = useState(0)
    // const [maxSize, setmaxSize] = useState(0)
    // const [breakfast, setBreakfast] = useState(false)
    // const [pets, setPets] = useState(false)
    // get data
    useEffect(()=>{
        let rooms = formatData(items);
        
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item=>item.price))
        let maxSize = Math.max(...rooms.map(item=>item.size))
        setRooms(rooms)
        setFeaturedRooms(featuredRooms)
        setSortedRooms(rooms)
        setLoading(false)
        // setPrice(maxPrice)
        // setMaxPrice(maxPrice)
        // setmaxSize(maxSize)
        // console.log(rooms);
        // console.log(featuredRooms);
        // console.log(loading);
    },[])
    const formatData = (items)=>{
        let tempItems = items.map((item)=>{
            let id = item.sys.id;
            let images = item.fields.images.map((image => image.fields.file.url))
            let room = {...item.fields,images,id}
            return room
            
        })
        return tempItems
    }
    // // handle change for filter forms
    // const handleChange = (e) =>{
    //     // target the input or checkbox when change
    //     const target = e.target
    //     // value will depend on either input or checkbox
    //     const value = e.type === "checkbox" ? target.checked : target.value

    //     const name = e.target.name
    //     setType(
    //         {
    //             [name]:value
    //         },filterRooms()
    //     )
        
    // }
    // const filterRooms = ()=>{
    //     let tempRooms = [...rooms];
    //     if(type !== "all"){
    //         tempRooms = tempRooms.filter((room)=>{
    //             return room.type === type
    //         })
    //     }
    //     setSortedRooms(tempRooms)
    // }
    return (
        <RoomContext.Provider value={{
            rooms,
            featuredRooms,
            sortedRooms,
            loading,
            // handleChange,
            // type,
            // capacity,
            // price,
            // maxPrice,
            // minPrice,
            // maxSize,
            // minSize,
            // breakfast,
            // pets
            
        }}>
            {children}
        </RoomContext.Provider>
    )
}

export  const useGlobalContext = ()=>{
    return useContext(RoomContext)
}

export {RoomContext, AppProvider}