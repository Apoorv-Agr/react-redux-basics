import { combineReducers } from 'redux';

import { cakeReducer } from './cake/cakeReducer';
import { iceCreamReducers } from './iceCream/iceCreamReducer';


const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducers
});

export { rootReducers };
