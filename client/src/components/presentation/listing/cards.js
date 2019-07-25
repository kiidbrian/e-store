//import libraries
import React from 'react';
const $ = window.$;

// create a functional component
const FooterCards = ({supportDelivery,contactNumber}) => {
    return (
        <div className="extras mb-3">
            <div className="row">
                <div className="col-md-4">
                    <div
                        className=" d-flex text-white justify-content-center align-items-center tiles-blue">
                        <img className="img-fluid h-100 mr-3"
                            src={`${process.env.PUBLIC_URL}/html/images/deliver.png`} alt=""
                            width="58"/>
                        <div>
                            {supportDelivery ? (
                                <React.Fragment>
                                    <h5 className="m-0">FAST DELIVERY</h5>
                                    <p className="m-0">For all orders</p>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <h5 className="m-0">PICK UP</h5>
                                    <p className="m-0">For all orders</p>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{cursor:'pointer'}}>
                    <div onClick={() => $("#extraDrawer").modal('show')}
                        className=" d-flex text-white justify-content-center align-items-center tiles-orange">
                        <img className="img-fluid h-100 mr-3" src={`${process.env.PUBLIC_URL}/html/images/back.png`} alt="" width="32"/>
                            <div>
                                <h5 className="m-0">RETURN POLICY</h5>
                                <p className="m-0">For all orders</p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div
                        className=" d-flex text-white justify-content-center align-items-center tiles-green">
                        <img className="img-fluid h-100 mr-3" src={`${process.env.PUBLIC_URL}/html/images/telephone.png`} alt="" width="43" />
                            <div>
                                <h5 className="m-0">CUSTOMER CARE</h5>
                                <p className="m-0">{contactNumber}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterCards;
