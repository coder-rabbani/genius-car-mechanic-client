import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://hidden-brushlands-91786.herokuapp.com/services', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Service Added Successfully');
                reset();
            }
        })
    };
    return (
        <div className="service-form"> 
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input type="number" {...register("Price")} placeholder="Price" />
                <textarea {...register("Description")} placeholder="Description" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;