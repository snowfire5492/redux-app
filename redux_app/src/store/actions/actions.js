export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


export const increment = () => {
    return {
        type: INCREMENT
    }
}


export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
}


export const sub = (value) => {
    return {
        type: SUB,
        val: value
    }
}

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}


export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElId
    }
}