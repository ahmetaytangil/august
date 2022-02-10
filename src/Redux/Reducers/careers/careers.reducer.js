import careersActionTypes from "./careers.actionTypes";

const initialState = {
    careers: null,
    isLoading: true,
    errorMessage: null
}

const careersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case careersActionTypes.CAREERS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                careers: null,
                errorMessage: null
            };

        case careersActionTypes.CAREERS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                careers: payload,
                errorMessage: null
            };

        case careersActionTypes.CAREERS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                careers: null,
                errorMessage: payload
            };

        default:
            return state;
    }
}

export default careersReducer;