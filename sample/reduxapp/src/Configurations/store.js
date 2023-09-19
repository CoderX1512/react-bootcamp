import { configureStore } from "@reduxjs/toolkit";

const intitialState = {
          count: 0
};

function reducer(state = intitialState, action ) {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + 1
            };

        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;    
    }
}

const store = configureStore({
    reducer
});

export default store;