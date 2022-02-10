import officesActionTypes from "./offices.actionTypes";

const officesLoadStart = () => ({
    type: officesActionTypes.OFFICES_LOAD_START
})

const officesLoadSuccess = (offices_data) => ({
    type: officesActionTypes.OFFICES_LOAD_SUCCESS,
    payload: offices_data
})

const officesLoadError = (error_message) => ({
    type: officesActionTypes.OFFICES_LOAD_ERROR,
    payload: error_message
})

const officesActions = {
    officesLoadStart,
    officesLoadSuccess,
    officesLoadError
}

export default officesActions;