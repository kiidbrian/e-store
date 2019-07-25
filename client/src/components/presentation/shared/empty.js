//import libraries
import React from 'react';

const NoItemsFound = (props) => (
    <div className="col-12">
        <div className="no-item d-flex flex-column align-items-center text-center pt-5">
            <img className="img-fluid mb-3" src={`${process.env.PUBLIC_URL}/html/images/bag1.png`} alt="" width="80" /> 
            <h4>No Items</h4>
            <p>Sorry, no items found.<br/></p>
        </div>
    </div>
);

export default NoItemsFound;
