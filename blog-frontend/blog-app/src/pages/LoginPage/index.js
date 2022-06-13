import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import LogIn from '../../containers/Login'

function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <LogIn navigate={navigate} location={location}/>
    );
}

export default LoginPage;
