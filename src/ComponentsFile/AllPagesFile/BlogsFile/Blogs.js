import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mt-5 pt-4'>
            <h2>Some Importent Information Here</h2>

            <div className='compair-section'>
                <h3 className='my-3 pt-3'>Authentication vs Authorization</h3>
                <div className="authorization-authentication row">
                    <div className="authorization col-12 col-md-6">
                        <h4 className='text-center'>Authentication</h4>
                        <ol>
                            <li> Passwords. Usernames and passwords are the most common authentication factors. If a user enters the correct data, the system assumes the identity is valid and grants access.</li>
                            <li> One-time pins. Grant access for only one session or transaction</li>
                            <li> Authentication apps. Generate security codes via an outside party that grants access. </li>
                        </ol>
                    </div>
                    <div className="authentication col-12 col-md-6">
                        <h4 className='text-center'>Authorization</h4>
                        <ol>
                            <li>Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege </li>
                            <li> Giving someone permission to download a particular file on a server or providing individual users with administrative access to an application are good examples of authorization.</li>
                            <li>it works Through settings maintained by security teams</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="otherOpt-otherService">
                <div className="otherOpt">
                    <h4>Authentication Other Options</h4>
                    <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints</p>
                </div>
                <div className="otherService">
                    <h4>Firebase Provider</h4>
                    Parse  Open Source Backend Platform;
                    Back4app  Parse Hosting Platform;
                    Kinvey Mobile Backend as a Service (mBaaS) for the Enterprise;
                    Backendless  Mobile Backend and API Services Platform;
                    Kuzzle  Backend for web, hybrid, or native mobile apps and IoT projects;
                </div>
            </div>
        </div>
    );
};

export default Blogs;