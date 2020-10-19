import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from './categoryListReducer';
import productListReducer from './productsListReducer';
import cartReducer from './cartReducer';

const rootReducers = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
});

export default rootReducers;