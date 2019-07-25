/**
 * CheckoutApi
 * -----------
 * 
 * @author Brian Paintsil (@kiid_brian)
 * @license Hubtel
 */

import {Service} from './index';
import {CHECKOUT_API_URL,CHECKOUT_API_TOKEN} from '../config';

class CheckoutApi extends Service {
    constructor() {
        super(CHECKOUT_API_URL,CHECKOUT_API_TOKEN)
    }

    pay(payload) {
        return super.post("checkout/internal/items/initiate", payload, function(status,data) {
            if(status === 200) {
                return data
            }
            return null;
        })
    }
}

export const PaymentApi = new CheckoutApi();