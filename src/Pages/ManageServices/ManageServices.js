import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://hidden-brushlands-91786.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, []);

    //handle delelte
    const handleDelete = (id)=>{
        const url = `https://hidden-brushlands-91786.herokuapp.com/services/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('deleted successfully');
                const remaining = services.filter(service=>service._id !== id);
                setServices(remaining);
            }
        })
    }
    return (
        <div>
            <p>Manage Services</p>
            {
                services.map(service=><div key={service._id}>
                        <h3>{service.Name}</h3>
                        <button onClick={()=>handleDelete(service._id)}>Delete</button>
                    </div>
                )
            }
        </div>
    );
};

export default ManageServices;