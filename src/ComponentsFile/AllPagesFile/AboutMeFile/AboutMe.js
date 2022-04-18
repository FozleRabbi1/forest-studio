import React from 'react';
import './AboutMe.css';
import shuvo from '../../../image/shuvo.jpg'

const AboutMe = () => {
    return (
        <div className='main-container'>
            <div className='my-image'>
                <img src={shuvo} alt="" />
            </div>
            <div className="some-info">
                <h2>Fozle Rabbi (Shuvo)</h2>
                <h4>Address : Ishwardi, Pabne</h4>
                <h6>Gmail : Fozlerabbi9790@gmail.com</h6>
                <h6>Phone : 0190991++++</h6>
                <p>The only goal of my life right now is to be a good web developer and for that purpose I have joined programming-hero as a web developer I want to build my career by working or freelancing and serve the country and nation with good service in future</p>
            </div>

        </div>
    );
};

export default AboutMe;