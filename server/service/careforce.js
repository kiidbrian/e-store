/**
 * CareforceApi
 * ---------------
 * 
 * @author Brian Paintsil (@kiid_brian)
 * @license Hubtel
 */

import {Service} from './index';
import {C_FORCE_API_URL, C_FORCE_TOKEN} from '../config';

class CareforceApi extends Service {
    constructor() {
        super(C_FORCE_API_URL,C_FORCE_TOKEN)
    }

    getEstimate(payload) {
        return super.post("/Delivery/CalculateEstimate", payload, function(status,data) {
            if(status === 200) {
                return data;
            }
            return null;
        })
    }

    createDelivery(businessId, branchId, orderId, 
        pickUpLocation, dropOffLocation, Note, phoneNumber, deliveryOption) {
        
        const payload = {
            BusinessId: businessId,
            BranchId: branchId,
            OrderId: orderId,
            PickupLocation: {
                Name: pickUpLocation && pickUpLocation.Name,
                Latitude: pickUpLocation && pickUpLocation.Latitude,
                Longitude: pickUpLocation && pickUpLocation.Longitude
            },
            DropOffLocation: {
                Name: dropOffLocation && dropOffLocation.Name,
                Latitude: dropOffLocation && dropOffLocation.Latitude,
                Longitude: dropOffLocation && dropOffLocation.Longitude
            },
            Note: Note,
            PhoneNumber: phoneNumber,
            DeliveryOption: deliveryOption
        }

        return super.post("/Delivery/CreateDelivery", payload, function(status,data) {
            if(status === 200) {
                return data;
            }
            return null;
        })
    }
}

export const CForceApi = new CareforceApi();