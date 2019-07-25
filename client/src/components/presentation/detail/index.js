//import libraries
import React from 'react';
import {connect} from 'react-redux';
import TemplateWrapper from '../shared/base';

// create a functional component
const ItemDetailPresentation = ({businessInfo,items}) => {
    return(
        <TemplateWrapper>
            <div>
                <p>Welcome to Item details</p>
            </div>
        </TemplateWrapper>
    )
};

export default connect(state => {
    return {
        businessInfo: state.businessInfo.businessInfo,
        items: state.items.items
    }
})(ItemDetailPresentation);
