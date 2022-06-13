import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import './steyles.scss'


function LogoutButton(props) {
    const navigate = useNavigate()
    const token = localStorage.getItem('auth_token');
    const logout = () => {
        localStorage.clear();
        navigate('/login', {replace: true})
    };
    if (token) {
        return (
            <div className='logout-button'>
                <Button onClick={logout}>
                    Logout
                </Button>
            </div>
        )
    } else {
        return (<React.Fragment/>)
    }

}


export default LogoutButton;
