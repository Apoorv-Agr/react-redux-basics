import { BUY_CAKE } from './cakeTypes';

const buyCakeAction = (inputNum = 1) => {
    return {
        type: BUY_CAKE,
        payload: { inputNum },
    }
}

export { buyCakeAction };