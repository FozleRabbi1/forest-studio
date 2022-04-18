import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
    const { checkId } = useParams();
    const getEmail = useRef('');
    const getName = useRef('');
    const getPassword = useRef('');
    const [myServicess, setMyServicess] = useState([]);
    useEffect(() => {
        fetch("/wildForestData.json")
            .then(res => res.json())
            .then(data => setMyServicess(data))
    }, [])

    const findData = myServicess.find(service => service.id === parseInt(checkId));
    // const findData = myServicess.filter(service => service.id === parseInt(checkId));

    const submitFun = (e) => {
        e.preventDefault();
        const email = getEmail.current.value;
        const password = getPassword.current.value;
    }
    return (
        <div className='mt-5 pt-4'>
            <h2> Check Out</h2>

            <div className="containerr mx-4 row row-cols-1 row-cols-md-2 g-5">
                <div className="col">
                    <div className="checkout-form">
                        <Form className='form' onSubmit={submitFun}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='FormControl' ref={getName} type="text" placeholder="Enter your yame" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='FormControl' ref={getEmail} type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicnumber">
                                <Form.Label>phone Number</Form.Label>
                                <Form.Control className='FormControl' ref={getEmail} type="number" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Adderss</Form.Label>
                                <Form.Control className='FormControl' ref={getPassword} type="text" placeholder="Password" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confurm PassWord</Form.Label>
                                <Form.Control className='FormControl' type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="col">
                    <div className="product-ditles">
                        <img src={findData?.img} alt="" />
                        <h3>Name : {findData?.name}</h3>
                        <h5>Cost : {findData?.coust}</h5>
                        <p>{findData?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;