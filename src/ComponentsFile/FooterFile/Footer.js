import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <h6>CopyRignt</h6>
            <p> @ </p>
            <h6>{year}</h6>

        </footer>
    );
};

export default Footer;