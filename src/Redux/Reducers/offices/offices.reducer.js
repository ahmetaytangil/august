import officesActionTypes from "./offices.actionTypes";

const initialState = {
    offices: null,
    isLoading: true,
    errorMessage: null
}

const officesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case officesActionTypes.OFFICES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                offices: null,
                errorMessage: null
            };

        case officesActionTypes.OFFICES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                offices: payload,
                errorMessage: null
            };

        case officesActionTypes.OFFICES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                offices: null,
                errorMessage: payload
            };

        default:
            return state;
    }
}

export default officesReducer;