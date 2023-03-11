import React from 'react';
import ReactDOM from 'react-dom';
import OverlayModal from './OverlayModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openAModal from '../../actions/openAModal';

const portalElement = document.getElementById("overlaymodal");




const Modal = (props) => {

    const closeModal = () => {
         props.openAModal("closed", "");
    };

     return(
        <>
        {ReactDOM.createPortal(<OverlayModal onCloseModal={closeModal} modalProps={props.siteModal} />, portalElement)}
        </>         
     )
}

const mapStatetToProps = (state) => {
    return {
        siteModal: state.modal
    }
};

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({
        openAModal: openAModal
    },dispatcher)
};

export default connect(mapStatetToProps, mapDispatchToProps)(Modal);