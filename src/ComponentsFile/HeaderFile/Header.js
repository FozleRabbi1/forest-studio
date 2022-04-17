import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const logOutFun = ()=>{
        signOut(auth);
    }

    return (
        <div>
            <Navbar className='nav-style' expand={false} fixed="top" >
                <Container fluid>
                    <Navbar.Brand href="#" className='mx-auto text'>The Wild Studio</Navbar.Brand>
                    <Navbar.Toggle className='control-bar-style' aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Select Your Page</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/aboutMe">About-Me</Nav.Link>


                                {
                                    user ? <button className='togol-button btn btn-link' onClick={logOutFun}>Log-Out</button>
                                        :
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }

                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;