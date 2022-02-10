import countriesActionTypes from "./countries.actionTypes";

const countriesLoadStart = () => ({
    type: countriesActionTypes.COUNTRIES_LOAD_START
})

const countriesLoadSuccess = (countries_data) => ({
    type: countriesActionTypes.COUNTRIES_LOAD_SUCCESS,
    payload: countries_data
})

const countriesLoadError = (error_message) => ({
    type: countriesActionTypes.COUNTRIES_LOAD_ERROR,
    payload: error_message
})

const countriesActions = {
    countriesLoadStart,
    countriesLoadSuccess,
    countriesLoadError
}

export default countriesActions;