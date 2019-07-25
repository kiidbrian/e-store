//import libraries
import React from 'react';

// create a functional component
const ModalWrapper = ({modalId, children}) => (
    <div className="modal fade" id={modalId+"Modal"} 
        tabIndex="-1" role="dialog" aria-labelledby={modalId+"Label"} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
    </div>
);

export default ModalWrapper;
