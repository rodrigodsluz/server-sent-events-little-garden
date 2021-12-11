import React from 'react';
import IconWrapper from '../../../helpers/icon-wrapper';


const CommonItem = (props) => {

    const sendToParent = props.listener;

    const sendAction = (action) => {
        const data = {
            entityId: props.itemState.entityId,
            name: props.itemState.name,
            type: props.itemState.type,
            action: action
        };
        sendToParent(data);
    }

    const sendClick= (event) => {
        sendAction(event.target.innerText);
    }

    return (
        <>
         <IconWrapper sendFunction={sendClick} id={props.userId}
         itemState={props.itemState}/>
        </>
    );
};

export default CommonItem;