import React,{useState} from 'react'
import Title from './Title'
import {servicesData} from './ServicesData'
const Services = () => {
    const [services, setServices] = useState(servicesData)
    
    return (
        <section className="services">
            <Title title="our services"/>
            <div className="services-center">
                {
                    services.map((service,index)=>{
                        const {icon, title, info}= service;
                        return(
                            <article key={index} className="service">
                                <span>{icon}</span>
                                <h6>{title}</h6>
                                <p>{info}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services
