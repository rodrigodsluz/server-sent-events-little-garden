import React from 'react';
import './styles.css';
import getIcon from '../garden/utils/icon';
import getButtons from './preconditions';
import {toast} from 'material-react-toastify';

const IconWrapper = ({sendFunction, itemState, id}) => {
    
    const buttonOneData = getButtons(itemState, "PRIMARY", id);
    const buttonTwoData = getButtons(itemState, "SECONDARY", id);
    
    let buttonOneClassName = "buttonWrapperOne";
    if (!buttonOneData.clickable) {
        buttonOneClassName = buttonOneClassName + " grayedOut";
    }
    let buttonTwoClassName = "buttonWrapperTwo";
    if (!buttonTwoData.clickable) {
        buttonTwoClassName = buttonTwoClassName + " grayedOut";
    }

    const buttonOne = (e) => {
        if (!buttonOneData.clickable) {
            return () => {};
        } else {
            if (buttonOneData.mock) {
                toast.warning("There is another person sitting there!");
            } else {
                sendFunction(e);
            }
        }
    }

    const buttonTwo = (e) => {
        if (!buttonTwoData.clickable) {
            return () => {};
        } else {
            if (buttonTwoData.mock) {
                toast.warning("There is another person sitting there!");
            } else {
                sendFunction(e);
            }
        }
    }
    

    return (
        <>
            <div className="iconWrapper">

            <div className={buttonOneClassName}>
            <button onClick={e => buttonOne(e)}>{buttonOneData.name}</button>
            </div>

            <div className={buttonTwoClassName}>
            <button onClick={e => buttonTwo(e)}>{buttonTwoData.name}</button>
            </div>

            <div className="imgWrapper">
            <img src={getIcon(itemState)} alt={itemState.name}></img>
            </div>

            </div>
        </>
    );
};

export default IconWrapper;