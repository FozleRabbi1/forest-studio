import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import tiger from '../../../image/photography4.jpg'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const getEmail = useRef('');
    const getPassword = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate("/")
    }

    const submitFun = (e) => {
        e.preventDefault();
        const email = getEmail.current.value;
        const password = getPassword.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='mt-5 pt-3'>

            <div className='img-div  mt-3'>
                <img src={tiger} alt="" />
            </div>

            <div className="form-div">
                <div className='from-child-div'>
                    <h2>Login Here</h2>

                    <Form className='mx-auto' onSubmit={submitFun}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={getEmail} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={getPassword} type="password" placeholder="Password" required/>
                        </Form.Group>

                        {
                            error? <p style={{ color: "red" }}> {error.message} </p> : ''
                        }

                        <p>If You Are Not Registerd? Then Go <Link to="/register">Register..</Link> First</p>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>

        </div>
    );
};

export default Login;