import careersActionTypes from "./careers.actionTypes";

const careersLoadStart = () => ({
    type: careersActionTypes.CAREERS_LOAD_START
})

const careersLoadSuccess = (careers_data) => ({
    type: careersActionTypes.CAREERS_LOAD_SUCCESS,
    payload: careers_data
})

const careersLoadError = (error_message) => ({
    type: careersActionTypes.CAREERS_LOAD_ERROR,
    payload: error_message
})

const careersActions = {
    careersLoadStart,
    careersLoadSuccess,
    careersLoadError
}

export default careersActions;