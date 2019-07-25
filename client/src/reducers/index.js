import { combineReducers } from 'redux';

import items from './items';
import businessInfo from './business-info';

export default combineReducers({
  items,
  businessInfo
});
