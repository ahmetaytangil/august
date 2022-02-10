import paramTypesActionTypes from "./paramTypes.actionTypes";

const initialState = {
    paramTypes: null,
    isLoading: true,
    errorMessage: null
}

const paramTypesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case paramTypesActionTypes.PARAM_TYPES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                paramTypes: null,
                errorMessage: null
            };

        case paramTypesActionTypes.PARAM_TYPES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                paramTypes: payload,
                errorMessage: null
            };

        case paramTypesActionTypes.PARAM_TYPES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                paramTypes: null,
                errorMessage: payload
            };

        default:
            return state;
    }
}

export default paramTypesReducer;