import countriesActionTypes from "./countries.actionTypes";

const initialState = {
    countries: null,
    isLoading: true,
    errorMessage: null
}

const countriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case countriesActionTypes.COUNTRIES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                countries: null,
                errorMessage: null
            };

        case countriesActionTypes.COUNTRIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                countries: payload,
                errorMessage: null
            };

        case countriesActionTypes.COUNTRIES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                countries: null,
                errorMessage: payload
            };

        default:
            return state;
    }
}

export default countriesReducer;