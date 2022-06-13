import React from 'react';
import { useNavigate } from "react-router-dom";

import { ResourceList } from '../../containers/Resource';


function ResourcePage() {
    const navigate = useNavigate()
    return (
        <ResourceList navigate={navigate}/>
    );
}

export default ResourcePage;
