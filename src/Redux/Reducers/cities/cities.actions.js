import citiesActionTypes from "./cities.actionTypes";

const citiesLoadStart = () => ({
    type: citiesActionTypes.CITIES_LOAD_START
})

const citiesLoadSuccess = (cities_data) => ({
    type: citiesActionTypes.CITIES_LOAD_SUCCESS,
    payload: cities_data
})

const citiesLoadError = (error_message) => ({
    type: citiesActionTypes.CITIES_LOAD_ERROR,
    payload: error_message
})

const citiesActions = {
    citiesLoadStart,
    citiesLoadSuccess,
    citiesLoadError
}

export default citiesActions;