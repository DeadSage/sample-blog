import React from 'react';
import { useNavigate } from "react-router-dom";

import { PostList } from '../../containers/Post';


function ResourcePage() {
    const navigate = useNavigate()
    return (
        <PostList navigate={navigate}/>
    );
}

export default ResourcePage;
