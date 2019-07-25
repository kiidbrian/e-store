//import libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../presentation/shared/header';
import {saveBusinessInfo, saveItems} from '../../actions';
import {isEmpty} from '../../utility'
import ItemsListingPresentation from '../presentation/listing';

// create a component
class ItemListingContainer extends Component {
    constructor(props){
        super(props)
        this.businessId = this.props.match.params.businessId
    }
    render() {
        const {businessInfo} = this.props;
        if(isEmpty(businessInfo)) return null

        return <ItemsListingPresentation />
    };

    componentDidMount(prevProps) {
        if(!this.props.businessInfo) {
            this.fetchBusinessInfo();
        }
    }

    async fetchBusinessInfo() {
        const data = await fetch('api/business/details', {
          method: 'POST',
          body: JSON.stringify({
            businessId: this.businessId
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        const businessInfoJson = await data.json()
        if (businessInfoJson.data) {
            this.props.saveBusinessInfo(businessInfoJson); // save in redux
            setTimeout(() => {
                this.getItems()
            },1000)
        }
    }

    async getItems() {
        const {businessInfo} = this.props;
        if (businessInfo) {
            const data = await fetch('api/inventory/list', {
            method: 'POST',
            body: JSON.stringify({
                accountId: businessInfo.fineractAccountId,
                company: businessInfo.name,
                contactNumber: businessInfo.contactNumber,
                businessEmail: businessInfo.contactEmail,
                country: businessInfo.country,
                currency: businessInfo.currency
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const inventoryJson = await data.json()
            if(inventoryJson) {
                this.props.saveItems({
                    data: inventoryJson.data,
                    page: inventoryJson.pageNumber,
                    pageSize: inventoryJson.limit,
                    totalRecords: inventoryJson.totalRecords
                }); // save in redux
            }
        }
        
    }

};

const mapStateToProps = state => {
    return {
        businessInfo: state.businessInfo.businessInfo,
        items: state.items.items
    }
}

export default connect(mapStateToProps, {saveBusinessInfo, saveItems} )(ItemListingContainer);
