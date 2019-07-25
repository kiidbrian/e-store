import {
    REQUEST_BUSINESS_INFO,
    CLEAR_BUSINESS_INFO
} from '../actions/constants';

const initialState = {
    businessInfo: null,
};

export default function businessInfoState(state = initialState, action) {
    switch (action.type) {
        case REQUEST_BUSINESS_INFO:
            return { ...state, businessInfo: action.payload.data };

        case CLEAR_BUSINESS_INFO:
            return { ...state, businessInfo: null };

        default:
            return state;
    }
}

