import {
    REQUEST_BUSINESS_INFO,
    CLEAR_BUSINESS_INFO,
    REQUEST_ITEMS,
    REQUEST_SELECTED_ITEM,
    CLEAR_ITEMS,
    REQUEST_ITEM_DETAIL,
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from './constants';


export function saveBusinessInfo(payload) {
    return { type: REQUEST_BUSINESS_INFO, payload };
}

export function clearBusinessInfo(payload) {
    return { type: CLEAR_BUSINESS_INFO, payload };
}

export function saveItems(payload) {
    return { type: REQUEST_ITEMS, payload };
}

export function saveSelectedItem(itemId) {
    return {type: REQUEST_SELECTED_ITEM, itemId};
}

export function clearItems(payload) {
    return { type: CLEAR_ITEMS, payload };
}

export function saveItemDetail(data, itemId) {
    const payload = {
        data,
        itemId,
    };
    return { type: REQUEST_ITEM_DETAIL, payload };
}