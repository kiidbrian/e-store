//import libraries
import React from 'react';
import {prettyPrintMoney,itemLink} from '../../../utility';
import {Link} from 'react-router-dom';

// create a functional component
const ListItem = ({item, currency, businessId}) => {

    const {id,itemType,name,sellingPrice,firstUrl:logo} = item;
    businessId = businessId.toLowerCase();

    if(itemType === "Product") {
        return (
            <div className="col-6 col-lg-3 col-md-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                    {false && <span
                        className="bg-danger text-white d-inline position-absolute small m-3">Out of stock</span>}
                    <Link to={itemLink(businessId,id)}>
                        <div className="img-holder w-100"><img className="img-fluid text-center" src={ logo ? process.env.REACT_APP_BASE_ITEMS_IMAGE_URL + logo : (process.env.PUBLIC_URL + "html/images/no-image.png")} alt=""/>
                        </div>
                    </Link>
                    <div className="card-body">
                        <div className="item-title"><Link
                            to={itemLink(businessId,id)}>{name}</Link>
                        </div>
                        <div className="item-price">
                <span className="text-muted">
                    <span className="currency">{currency}</span>
                    {prettyPrintMoney(sellingPrice)}
                </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <p>ListItem</p>
            </div>
        )
    }
    
};

export default ListItem;
