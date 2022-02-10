import servicesActionTypes from "./services.actionTypes";

const initialState = {
    services: null,
    isLoading: true,
    errorMessage: null
}

const servicesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case servicesActionTypes.SERVICES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                services: null,
                errorMessage: null
            };

        case servicesActionTypes.SERVICES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                services: payload,
                errorMessage: null
            };

        case servicesActionTypes.SERVICES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                services: null,
                errorMessage: payload
            };

        default:
            return state;
    }
}

export default servicesReducer;