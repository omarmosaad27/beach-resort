import React from 'react'
import { useGlobalContext } from '../Context'
import Title from './Title'
// get all unique value
const getUnique = (items,value)=>{
    return [
        ...new Set(items.map(item=>item[value]) )
    ]
}
const RoomsFilter = () => {
    const {
        rooms,
        handleChange, 
        type,
        capacity,
        price,
        maxPrice,
        minPrice,
        maxSize,
        minSize,
        breakfast,
        pets} = useGlobalContext()
    // get unique types 
    let types = getUnique(rooms,"type")
    // add all 
    types= ["all", ...types]
    // map to jsx 
    types = types.map((item,index)=>{
        return (
            <option value={item} key={index}>{item}</option>
        )
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" /> 
            <form className="filter-form">
                {/* select type */}
                <section className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </section>
                {/* end select type */}
            </form>
        </section>
    )
}

export default RoomsFilter
