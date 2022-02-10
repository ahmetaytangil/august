import personelsActionTypes from "./personels.actionTypes";

const personelsLoadStart = () => ({
    type: personelsActionTypes.PERSONELS_LOAD_START
})

const personelsLoadSuccess = (personels_data) => ({
    type: personelsActionTypes.PERSONELS_LOAD_SUCCESS,
    payload: personels_data
})

const personelsLoadError = (error_message) => ({
    type: personelsActionTypes.PERSONELS_LOAD_ERROR,
    payload: error_message
})

const personelsActions = {
    personelsLoadStart,
    personelsLoadSuccess,
    personelsLoadError
}

export default personelsActions;