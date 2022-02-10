import personelsActionTypes from "./personels.actionTypes";

const initialState = {
    personels: null,
    isLoading: true,
    errorMessage: null,
}

const personelsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case personelsActionTypes.PERSONELS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                personels: null,
                errorMessage: null
            };

        case personelsActionTypes.PERSONELS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                personels: payload,
                errorMessage: null
            };

        case personelsActionTypes.PERSONELS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                personels: null,
                errorMessage: payload
            };

        default:
            return state;
    }
}

export default personelsReducer;