import citiesActionTypes from "./cities.actionTypes";

const initialState = {
    cities: null,
    isLoading: true,
    errorMessage: null
}

const citiesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case citiesActionTypes.CITIES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                cities: null,
                errorMessage: null
            };

        case citiesActionTypes.CITIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cities: payload,
                errorMessage: null
            };

        case citiesActionTypes.CITIES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                cities: null,
                errorMessage: payload
            };

        default:
            return state;
    }
}

export default citiesReducer;