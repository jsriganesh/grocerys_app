import {ActionTypes} from '../action/actionList'


const intialState = {
    cartList:[]
}

export function cartListReducer (state =  intialState,action) {
    switch(action.type) {
        case ActionTypes.CART_LIST :
            return {...state,cartList:action.payload};
            default:
                return state;
    }
}