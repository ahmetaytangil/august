import placesActionTypes from "./places.actionTypes";

const placesLoadStart = () => ({
    type: placesActionTypes.PLACES_LOAD_START
})

const placesLoadSuccess = (places_data) => ({
    type: placesActionTypes.PLACES_LOAD_SUCCESS,
    payload: places_data
})

const placesLoadError = (error_message) => ({
    type: placesActionTypes.PLACES_LOAD_ERROR,
    payload: error_message
})

const homeplacesLoadStart = () => ({
    type: placesActionTypes.HOME_PLACES_LOAD_START
})

const homeplacesLoadSuccess = (places_data) => ({
    type: placesActionTypes.HOME_PLACES_LOAD_SUCCESS,
    payload: places_data
})

const homeplacesLoadError = (error_message) => ({
    type: placesActionTypes.HOME_PLACES_LOAD_ERROR,
    payload: error_message
})

const placesDetailLoadStart = () => ({
    type: placesActionTypes.PLACES_DETAIL_LOAD_START
})

const placesDetailLoadSuccess = (place_data) => ({
    type: placesActionTypes.PLACES_DETAIL_LOAD_SUCCESS,
    payload: place_data
})

const placesDetailLoadError = (error_message) => ({
    type: placesActionTypes.PLACES_DETAIL_LOAD_ERROR,
    payload: error_message
})

const placesActions = {
    placesLoadStart,
    placesLoadSuccess,
    placesLoadError,
    homeplacesLoadStart,
    homeplacesLoadSuccess,
    homeplacesLoadError,
    placesDetailLoadStart,
    placesDetailLoadSuccess,
    placesDetailLoadError
}

export default placesActions;