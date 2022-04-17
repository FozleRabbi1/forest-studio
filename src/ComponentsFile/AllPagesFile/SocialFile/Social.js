import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Sosial.css';

const Social = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);

    if(gituser || user){
        navigate('/')
    }
    return (
        <div className='sosial-activity'>
            {
                googleError || giterror ? <p style={{color : "red", margin:"0", padding:"0"}}>{googleError?.message} {giterror?.message}</p> : ''
            }
            <div className='or-section'>                
                <div></div>
                <p>or</p>
                <div></div>
            </div>

            <div className="button-div">
                <button onClick={()=>signInWithGoogle()}>Google</button>
                <button onClick={()=>signInWithGithub()}>Github</button>
            </div>

        </div>
    );
};

export default Social;