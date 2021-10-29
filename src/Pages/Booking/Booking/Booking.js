import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(()=>{
        fetch(`https://hidden-brushlands-91786.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    }, []);

    const {Name, Description, Price, img} = service;
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <img src={img} alt="" />
            <h1>{Name}</h1>
            <h3>{Price}</h3>
            <p>{Description}</p>
        </div>
    );
};

export default Booking;