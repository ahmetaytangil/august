import servicesActionTypes from "./services.actionTypes";

const servicesLoadStart = () => ({
    type: servicesActionTypes.SERVICES_LOAD_START
})

const servicesLoadSuccess = (services_data) => ({
    type: servicesActionTypes.SERVICES_LOAD_SUCCESS,
    payload: services_data
})

const servicesLoadError = (error_message) => ({
    type: servicesActionTypes.SERVICES_LOAD_ERROR,
    payload: error_message
})

const servicesActions = {
    servicesLoadStart,
    servicesLoadSuccess,
    servicesLoadError
}

export default servicesActions;