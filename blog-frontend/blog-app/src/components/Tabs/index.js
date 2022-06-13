import React from 'react';
import _ from "lodash";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate, useLocation } from "react-router-dom";

import './styles.scss'

const TABS = [
    {
        name: 'Posts',
        value: 'post',
        path: '/posts'
    }
]

const tabByPathName = (pathName) => {
    const index_ = _.findIndex(TABS, {path: pathName})
    if (index_ === -1) {
        return TABS[0]
    }
    return  TABS[index_]
}

const tabByValue = (value) => {
    const index_ = _.findIndex(TABS, {value: value})
    return  TABS[index_]
}


function CustomTabs(props) {
    const token = localStorage.getItem('auth_token');
    const navigate = useNavigate()
    const location = useLocation()

    const defaultTab = tabByPathName(location.pathname)
    const [value, setValue] = React.useState(defaultTab);

    const handleChange = (event, newValue) => {
        const tab = tabByValue(newValue)
        setValue(tab);
        navigate(tab.path, { replace: true })
    };

    const renderTabs = () => {
        return (
            <Box className={'tabs'} sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value.value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {TABS.map( item => (
                        <Tab key={item.value} label={item.name} value={item.value}/>
                    ))}
                </Tabs>
            </Box>
        )
    }

    if (token) {
        return renderTabs()
    } else {
        return (
            <React.Fragment/>
        )
    }

}


export default CustomTabs;
