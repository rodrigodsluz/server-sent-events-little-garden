
import React from 'react';
import './styles.css';

const Sidebar = (props) => {
    return (
        <>
            <div className="sbContainer">
            <div className="sbBackground">
                {
                (props.nickname ?
                (
                <h3>Welcome, {props.nickname}!</h3>
                ) :
                (<></>))
                }
            </div>
            <div className="sbDiv">
            </div>
            </div>
        </>
    );
};

export default Sidebar;