import propertiesActionTypes from "./properties.actionTypes";

const propertiesLoadStart = () => ({
    type: propertiesActionTypes.PROPERTIES_LOAD_START
})

const propertiesLoadSuccess = (properties_data) => ({
    type: propertiesActionTypes.PROPERTIES_LOAD_SUCCESS,
    payload: properties_data
})

const propertiesLoadError = (error_message) => ({
    type: propertiesActionTypes.PROPERTIES_LOAD_ERROR,
    payload: error_message
})

const homePropertiesLoadStart = () => ({
    type: propertiesActionTypes.HOME_PROPERTIES_LOAD_START
})

const homePropertiesLoadSuccess = (properties_data) => ({
    type: propertiesActionTypes.HOME_PROPERTIES_LOAD_SUCCESS,
    payload: properties_data
})

const homePropertiesLoadError = (error_message) => ({
    type: propertiesActionTypes.HOME_PROPERTIES_LOAD_ERROR,
    payload: error_message
})

const propertiesActions = {
    propertiesLoadStart,
    propertiesLoadSuccess,
    propertiesLoadError,
    homePropertiesLoadStart,
    homePropertiesLoadSuccess,
    homePropertiesLoadError
}

export default propertiesActions;