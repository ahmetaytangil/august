import propertiesActionTypes from "./properties.actionTypes";

const initialState = {
    properties: null,
    isLoading: true,
    errorMessage: null,
    home_properties: null,
    home_properties_loading: true,
    home_properties_error_message: null
}

const propertiesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case propertiesActionTypes.PROPERTIES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                properties: null,
                errorMessage: null
            };

        case propertiesActionTypes.PROPERTIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                properties: payload,
                errorMessage: null
            };

        case propertiesActionTypes.PROPERTIES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                properties: null,
                errorMessage: payload
            };

        case propertiesActionTypes.HOME_PROPERTIES_LOAD_START:
            return {
                ...state,
                home_properties_loading: true,
                home_properties: null,
                home_properties_error_message: null
            };

        case propertiesActionTypes.HOME_PROPERTIES_LOAD_SUCCESS:
            return {
                ...state,
                home_properties_loading: false,
                home_properties: payload,
                home_properties_error_message: null
            };

        case propertiesActionTypes.HOME_PROPERTIES_LOAD_ERROR:
            return {
                ...state,
                home_properties_loading: false,
                home_properties: null,
                home_properties_error_message: payload
            };

        default:
            return state;
    }
}

export default propertiesReducer;