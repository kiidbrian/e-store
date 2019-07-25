/**
 * InventoryApi
 * ------------
 * 
 * @author Brian Paintsil (@kiid_brian)
 * @license Hubtel
 */

import {Service} from './index';
import {
    INVENTORY_API_URL,
    INVENTORY_API_TOKEN,
    INVENTORY_AUTH_KEY
} from '../config';

class InventoryApi extends Service {
    constructor() {
        super(INVENTORY_API_URL,INVENTORY_API_TOKEN)
    }

    getItems(apiToken) {
        const headers = {
            Authorization: `Hubtel-Bearer ${apiToken}`
        }
        return super.get("items?", function(status,data) {
            if(status === 200) {
                return data;
            }
            return null;
        },headers)
    }

    getItem(itemId) {
        return super.get("items/"+itemId, function(status,data) {
            if(status === 200) {
                return data;
            }
            return null;
        })
    }

    generateBase64Token(object) {
        const objectJsonStr = JSON.stringify(object);
        const privateKeyStr = `${INVENTORY_AUTH_KEY}:${objectJsonStr}`
        
        return Buffer.from(privateKeyStr).toString("base64");
    }  
}

export const ItemsApi = new InventoryApi();