import React,{useEffect, useState} from 'react'
// import DefaultBcg from './../images/room-1.jpeg'
import Hero from './../components/Hero'
import Banner from './../components/Banner'
import {Link, useParams} from 'react-router-dom'
import StyledHero from './../components/StyledHero'
import {useGlobalContext} from './../Context'
const SingleRoom = () => {
    const {slug} = useParams()
    const {rooms} = useGlobalContext();
    
    return (
        <div>
            {
                rooms.filter(room => room.slug === slug).map((item)=>{
                    const {name, capacity, size, price, extras, description, pets, breakfast, images} = item
                    return(
                        <>
                        <StyledHero img={images[0]}>
                            <Banner title={`${name} room`} >

                                <Link to="/rooms" className="btn-primary">
                                    back to rooms
                                </Link>
                            </Banner>
                        </StyledHero>
                        <section className="single-room">
                            <div className="single-room-images">
                                {
                                    images.map((image,index)=>{
                                        return <img key={index} src={image} alt={name}/>
                                    })
                                }
                            </div>
                            <div className="single-room-info">
                                <article className="desc">
                                    <h3>details</h3>
                                    <p>{description}</p>

                                </article>
                                <article className="info">
                                    <h3>info</h3>
                                    <h6>price: ${price}</h6>
                                    <h6>size: ${size} SQFT</h6>
                                    <h6>max capacity: {capacity > 1 ? `${capacity} people`: `${capacity} person`}</h6>
                                    <h6>pets: {pets  ? "pets allowed" : "no pets allowed"}</h6>
                                    <h6>{breakfast && "free breakfast included "}</h6>
                                </article>
                            </div>
                        </section>
                        <section className="room-extras">
                            <h6>extras</h6>
                            <ul className="extras">
                                {
                                    extras.map((extra,index)=>{
                                        return(
                                            <li key={index}>
                                                {extra}
                                            </li>   
                                        )
                                    })
                                }
                            </ul>
                        </section>
                        </>

                    )
                })
            }
        </div>
    )
}

export default SingleRoom
