//import libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {saveBusinessInfo, saveSelectedItem} from '../../actions'
import ItemDetailPresentation from '../presentation/detail';

// create a component
class ItemDetailContainer extends Component {
    constructor(props){
        super(props)
        this.itemId = props.match.params.id     
           
    } 

    render() {
        return <ItemDetailPresentation />
    };

    componentDidMount() {
        console.log("asdfads =>",this.props.businessInfo)
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
            this.getItemDetails()
        }
    }

    getItemDetails() {

    }
};

const mapStateToProps = state => {
    return {
        businessInfo: state.businessInfo.businessInfo,
        selectedItem: state.selectedItem
    }
}
//make this component available to the app
export default connect(mapStateToProps, {saveBusinessInfo, saveSelectedItem})(ItemDetailContainer);
