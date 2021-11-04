import { BUY_ICECREAM } from "./iceCreamTypes";


const initialState = {
    numOfIceCream: 20,
}

const iceCreamReducers = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case BUY_ICECREAM:
            return { ...state, numOfIceCream: state.numOfIceCream - 1 };
        default:
            return state;
    }
}

export { iceCreamReducers };