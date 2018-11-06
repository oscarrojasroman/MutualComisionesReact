import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { add } from './parameters.reducers';
import { update } from './parameters.reducers';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,  
  add,
  update,
});

export default rootReducer;