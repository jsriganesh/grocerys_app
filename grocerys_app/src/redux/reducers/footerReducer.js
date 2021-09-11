import {ActionTypes} from '../action/actionList'


const intialState = {
    selectedFooter:"Home",
    addToCartItemlength:0
}

export function footerReducer (state =  intialState,action) {
    switch(action.type) {
        case ActionTypes.SELECTED_FOOTER :
            return {...state,selectedFooter:action.payload};
        case ActionTypes.ADD_TO_CART_ITEM_LENGTH :
            return {...state,addToCartItemlength:action.payload};
            default:
                return state;
    }
}