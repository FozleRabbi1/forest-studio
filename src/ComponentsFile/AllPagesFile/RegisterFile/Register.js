import React, { useRef, useState } from 'react';
import './Register.css';
import bird from '../../../image/bird.jpg'
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const getEmail = useRef('');
    const getPassword = useRef('');
    const getConfurmPassword = useRef('');
    const [aggri, getAggri] = useState(false);
    const [customError, setcuStomError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user, loading, ceratError,] = useCreateUserWithEmailAndPassword(auth);

    const checkedFun = (e) => {
        const checkedValue = e.target.checked;
        getAggri(checkedValue);
    }

    if(user){
        navigate("/")
    }
    const submitFun = (e) => {
        e.preventDefault();
        const email = getEmail.current.value;
        const password = getPassword.current.value;
        const confurmPassword = getConfurmPassword.current.value;
        if(password !== confurmPassword){
            setcuStomError("PassWord was Wrong please try again")
            return;
        }
        if(password.length < 6){
            setcuStomError("You Must Type 6 Desit in Your Password")
            return;
        }
        else{
            createUserWithEmailAndPassword(email, password);
            setcuStomError("Registerd SeccessFully You can Login Right Now")
        }
        console.log(email, password, confurmPassword);
    }

    return (
        <div className='mt-5 pt-3'>

            <div className='img-div  mt-3'>
                <img src={bird} alt="" />
            </div>

            <div className="form-div">
                <div className='from-child-div'>
                    <h2>Register Here</h2>

                    <Form className='mx-auto' onSubmit={submitFun}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={getEmail} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={getPassword} type="password" placeholder="Password" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confurm PassWord</Form.Label>
                            <Form.Control ref={getConfurmPassword} type="password" placeholder="Password" required/>
                        </Form.Group>
                        {
                            customError && <p style={{color : "red"}}>{customError}</p>
                        }

                        <p>If You Are Already Registerd? Then Go <Link to="/login">Login..</Link></p>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={checkedFun} type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button disabled={!aggri} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>

        </div>
    );
};

export default Register;

