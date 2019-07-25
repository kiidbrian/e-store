//import libraries
import React from 'react';
import {connect} from 'react-redux';
import ProductListing from './list';
import Pagination from './listPagination';
import FooterCards from './cards';
import TemplateWrapper from '../shared/base';

// create a functional component
const ItemsListingPresentation = ({businessInfo,items}) => {
    return (
        <TemplateWrapper>   
            <div className="items pb-4 content">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col">
                            <div className="row">
                                <ProductListing />
                            </div>

                            <Pagination
                                info={items}
                                searchState={false}
                                businessId={businessInfo.businessId}
                                categoryState={true} />

                            <FooterCards 
                                contactNumber={businessInfo.contactNumber}
                                supportDelivery={businessInfo.branches[0].isPickedUpByDelivery}/>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateWrapper>
    )
};

export default connect(state => {
    return {
        businessInfo: state.businessInfo.businessInfo,
        items: state.items.items
    }
})(ItemsListingPresentation);
