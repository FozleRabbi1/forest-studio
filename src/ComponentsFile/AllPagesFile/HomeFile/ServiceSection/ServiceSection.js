import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceSecton.css';

const ServiceSection = ({ service }) => {
    const { name, img, coust, description , id} = service;
    const navigate = useNavigate();
    const checkOutFun= (id) =>{
        navigate(`/checkOut/${id}`)
    }
    return (
        <div className='col'>
            <div className='all-services'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='service-text-container'>
                    <h5>Name : {name}</h5>
                    <h6>Price : {coust}$ Per-Albam </h6>
                    <p title={description}>{description.slice(0, 200)}</p>
                    <button onClick={()=>checkOutFun(id)} className='button btn btn-link'>Check-Out</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceSection;