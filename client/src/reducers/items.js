import {
    REQUEST_ITEMS,
    REQUEST_SELECTED_ITEM,
    CLEAR_ITEMS
} from '../actions/constants';
  
const initialState = {
    items: {
        data: [],
        page: 1,
        pageSize: 0,
        totalRecords: 0
    },
};

export default function itemsState(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ITEMS:
            return { ...state, items: action.payload };

        case REQUEST_SELECTED_ITEM:
            return { ...state, selectedItem: state.items.data.find(item => item.id === action.payload)}

        case CLEAR_ITEMS:
            return { ...state, items: [] };

        default:
            return state;
    }
}