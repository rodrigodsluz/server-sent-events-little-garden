import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { SFSpinner } from './sunflower/sunflower';
import sfImg from '../../../assets/textures/sunflower.png';
import './styles.css';

const DefaultSpinner = (props) => {
    return (
        <>
            <div className="modalContainer">
            <Modal className="modalBlock" show={!props.hasLoaded} size="sm" centered="true">
                <ModalHeader className="loadingHeader">
                    <Modal.Title>Loading...</Modal.Title>
                </ModalHeader>
                <ModalBody className="loadingBody">
                    <SFSpinner>
                    <img alt="sunflower" src={sfImg}/>
                    </SFSpinner>
                </ModalBody>
            </Modal>
            </div>
        </>
    );
};

export default DefaultSpinner;