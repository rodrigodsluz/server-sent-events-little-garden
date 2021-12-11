import React from 'react';
import './styles.css';
import {GiSadCrab} from 'react-icons/gi';

const NotFound = () => {
    return (
        <div className="mainWrapper">
            <div className="panel">
            <h3>Oops... 404</h3>
            <GiSadCrab size={45} style={{color: "red"}}/>
            <h2>Page not found</h2>
            </div>
        </div>
    );
};

export default NotFound;