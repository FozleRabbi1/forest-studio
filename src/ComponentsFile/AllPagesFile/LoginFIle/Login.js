import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import tiger from '../../../image/photography4.jpg'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../SocialFile/Social';
import Loading from '../../LoadingPage/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const getEmail = useRef('');
    const getPassword = useRef('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        <Loading></Loading>
    }

    const submitFun = (e) => {
        e.preventDefault();
        const email = getEmail.current.value;
        const password = getPassword.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const forgetPasswordFun = async (e) => {
        e.preventDefault();
        const email = getEmail.current.value;
        if (!email) {
            toast("Please Enter a valid email")
        }
        else {
            await sendPasswordResetEmail(email);
            toast('Sent email');

        }
    }

    return (
        <div className='mt-5 pt-3'>

            <div className='img-div  mt-3'>
                <img src={tiger} alt="" />
            </div>

            <div className="form-div">
                <div className='from-child-div mx-auto'>
                    <h2>Login Here</h2>

                    <Form onSubmit={submitFun}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={getEmail} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={getPassword} type="password" placeholder="Password" required />
                        </Form.Group>
                        {
                            error ? <p style={{ color: "red" }}> {error.message} </p> : ''
                        }
                        <button onClick={forgetPasswordFun} className='btn btn-link'>Forget-Password</button>
                        <p>If You Are Not Registerd? Then Go <Link to="/register">Register..</Link> First</p>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Social></Social>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;