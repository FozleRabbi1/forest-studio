import React from 'react';
import './ServiceSecton.css';

const ServiceSection = ({ service }) => {
    const { name, img, coust, description } = service;
    return (
        <div className='col'>
            <div className='all-services'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='service-text-container'>
                    <h5>Name : {name}</h5>
                    <h6>Price : {coust}</h6>
                    <p>{description.slice(0, 200)}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceSection;