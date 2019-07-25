//import libraries
import React from 'react';
import {connect} from 'react-redux';
import Header from './header';

// create a functional component
const TemplateWrapper = ({businessInfo,items,children}) => (
    <React.Fragment>   
        <Header 
            businessId={businessInfo.businessIdentifier}
            businessName={businessInfo.name} 
            businessEmail={businessInfo.contactEmail}
            businessContact={businessInfo.contactNumber}
            branches={businessInfo.branches}
            selectedBranch={businessInfo.branches[0]}
            onSelectBranch={()=>{}}
            onSelectBranchFn={()=> {}}
            onSearch={()=> {}}
            cartToggled={true}
            cart={{items:[]}}
            onStateChanged={()=> {}} />

            {children}
        </React.Fragment>
);

export default connect(state => {
    return {
        businessInfo: state.businessInfo.businessInfo,
        items: state.items.items
    }
})(TemplateWrapper);
