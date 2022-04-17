import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {checkId} = useParams();
    return (
        <div className='mt-5 pt-5'>
            this is check out page
            <h2> Id = {checkId}</h2>
        </div>
    );
};

export default CheckOut;