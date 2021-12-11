import React from 'react';
import Sidebar from './sidebar';
import './styles.css';
import TableRows from './table';
import {BsArrowRightShort} from 'react-icons/bs';

const GardenContainer = (props) => {
    return (
        <>
            <div className="gardenContainer">
                <div className="firstFrame">
                <Sidebar nickname={props.nickname}/>
                    <div className="grassWrapper">
                        <div className="titleWrapper">
                            <h3 style={{ fontSize: '2.5rem' }}>Our Little Garden</h3>
                        </div>
                    </div>
                </div>
                <div id="logDiv">
                <ul>
                    {
                        props.log.map((log) => {
                            return (<ul>{log}</ul>)
                        })
                    }
                </ul>
                </div>
                <div className="tableOverlay">
                <h5 className="online">Online Now: {props.online}</h5>
                <BsArrowRightShort className="arrowTiny" size={20}/>
                <h5 className="statsLink"><a href="/stats">Click Here To See Stats</a></h5>
                    <TableRows 
                    listener={props.listener}
                    fruits={props.fruits}
                    flowers={props.flowers}
                    animals={props.animals}
                    decorations={props.decorations}
                    id={props.id}
                    />
                </div>
            </div>
        </>
    );
};

export default GardenContainer;