import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../PostsContext';

const Login=()=>{
    const {login}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const handelLogin=()=>{
        const from=location.state?.from?.pathname || '/'
        navigate(from,{replace:true})
    }
    return(
        <div>
            <h2>Login</h2>
            <p>You must log in to access the create post page.</p>
            <button onClick={handelLogin}></button>
        </div>
    )
}

export default Login;