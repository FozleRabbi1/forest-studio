import React, { useEffect, useState } from 'react';
import './Home.css';
import dear from '../../../image/grijliBear.jpg';
import photografer from '../../../image/photografer10.jpg';
import ServiceSection from './ServiceSection/ServiceSection';
import Footer from '../../FooterFile/Footer';

const Home = () => {
    const [myServices, setMyServices] = useState([]);
    useEffect(() => {
        fetch("wildForestData.json")
            .then(res => res.json())
            .then(data => setMyServices(data))
    }, [])
    return (
        <div className='header-section'>
            <div className='img-container'>
                <img src={dear} alt="" />
            </div>
            <div className='text-container'>
                <div>
                    <h1>welcome to my Wild Studio</h1>
                    <input type="text" />
                    <button>search</button>
                </div>
            </div>

            <div className="photografer-ditles row">
                <h2 className='mb-4'>Some Information</h2>
                <div className="info col-12 col-md-6">
                    <h5>Name : Dwayne Johnson</h5>
                    <h6>Profession : Photography</h6>
                    <h6>Location : New Yourk, USA</h6>
                    <p>Gmail : dwayne02@gmail.com</p>
                    <p>Photographers use a variety of photographic equipment to capture events, people, objects or scenes for records, art or commercial use. Many photographers begin their careers as photographic assistants, setting up lights and stands, arranging transport and occasionally acting as a 'second shooter'.</p>
                </div>

                <div className="image col-12 col-md-6">
                    <img className='img-fluid' src={photografer} alt="" />
                </div>
            </div>


            <div className="service-section mt-1 mb-5 ">
                <h2 className='mb-3 mt-4 h2'>All Services</h2>

                <div className="service-info-div row">
                    <div className='some-info col-12 col-md-5'>
                        <h2>My services</h2>
                        <p>
                            The service centers that are seen here I usually take pictures of them especially deer,Birds, products, and  jungle animals ETC. I hope my services are usually unique from everyone else. If you are interested then you can see my services and order work. I do my job with 100% dedication and honesty and submit it on time...
                        </p>
                    </div>

                    <div className='services-style col-12 col-md-7'>
                        <div className='pt-2'>
                            {
                                myServices.map(service => <ServiceSection
                                    service={service}
                                    key={service.id}
                                ></ServiceSection>)
                            }
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
