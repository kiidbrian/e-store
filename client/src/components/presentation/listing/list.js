//import libraries
import React from 'react';
import {connect} from 'react-redux';
import ListItem from './listItem'
import ItemLoader from '../shared/loader';
// import NoItemsFound from '../shared/empty';
import {isEmpty} from '../../../utility';

// create a functional component
const ProductListing = ({items,businessInfo}) => {
    if(!isEmpty(items.data)){
        return (
            items.data.map(item => <ListItem 
                key={item.id}
                item={item} 
                currency={businessInfo.currency}
                businessId={businessInfo.businessIdentifier} />)
        )
    }else{
        return (
            Array.from({length: 12}, (x, i) => i).map((el,key) => 
            <div class="col-6 col-lg-3 col-md-4 col-sm-6 portfolio-item">
                <ItemLoader key={key} />
            </div>)
        )
    }
};

export default connect(state => {
    return {
        businessInfo: state.businessInfo.businessInfo,
        items: state.items.items
    }
})(ProductListing);
