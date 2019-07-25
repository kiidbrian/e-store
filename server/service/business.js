/**
 * BusinessInfoApi
 * ---------------
 * 
 * @author Brian Paintsil (@kiid_brian)
 * @license Hubtel
 */

import {Service} from './index';
import {B_INFO_API_URL,B_INFO_TOKEN} from '../config';

class BusinessInfoApi extends Service {
    constructor() {
        super(B_INFO_API_URL,B_INFO_TOKEN)
    }

    getDetails(businessId) {
        return super.get("businesses/webstore/"+businessId, function(status,data) {
            if(status === 200) {
                return data
            }
            return null;
        })
    }
}

export const BInfoApi = new BusinessInfoApi();