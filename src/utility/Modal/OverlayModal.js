import React from 'react';
import './Modal.css';


const OverlayModal = (props) => {
  
    let displayStyle = {};

    const { openClose, content} = props.modalProps;
    
    if (openClose==='open'){
        displayStyle = {display: 'block'};
    }else{
        displayStyle = {display: 'none'};
    }
 
 

    

    return (
        <div className="site-modal" style={displayStyle} >
            <div className="modal-content">
                <div className="col right">
                    <span onClick={props.onCloseModal} className="close">&times;</span>
                </div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    );
};



export default OverlayModal;