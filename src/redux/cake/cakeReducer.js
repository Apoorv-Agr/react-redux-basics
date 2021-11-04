import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numOfCake: 10
};

const cakeReducer = (state = initialState, actions) => {
    const { payload, type } = actions
    switch (type) {
        case BUY_CAKE:
            return { ...state, numOfCake: state.numOfCake - payload.inputNum };
        default:
            return state;
    }
}

export { cakeReducer };
