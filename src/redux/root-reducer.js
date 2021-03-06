import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
// saying we want to use localstorage, could also use session storage instead
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// key is where we want to start our persistent storage
// whitelist arr determines persist. for now we say cart only.
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);