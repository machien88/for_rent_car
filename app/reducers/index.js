import { combineReducers, createStore } from 'redux';

/** default state in store */
const current_logged_default = null;

/* curent account reducers */
const current_logged = (state = current_logged_default, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_LOGIN_PARENT':
      return 'PARENT';
    case 'RESET_CURRENT_LOGIN':
      return null;
    default:
      return state;
  }
}
/* combineReducers */
var rootReducer = combineReducers({
  current_logged
});

/* create store -- state manager -- */
var store = createStore(rootReducer);

export default store;
