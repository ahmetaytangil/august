import placesActionTypes from "./places.actionTypes";

const initialState = {
    places: null,
    isLoading: true,
    errorMessage: null,
    home_places: null,
    home_places_loading: true,
    home_places_error_message: null,
    places_detail: null,
    places_detail_loading: true,
    places_detail_error_message: null
}

const placesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case placesActionTypes.PLACES_LOAD_START:
            return {
                ...state,
                places: null,
                isLoading: true,
                errorMessage: null
            };

        case placesActionTypes.PLACES_LOAD_SUCCESS:
            return {
                ...state,
                places: payload,
                isLoading: false,
                errorMessage: null
            };

        case placesActionTypes.PLACES_LOAD_ERROR:
            return {
                ...state,
                places: null,
                isLoading: false,
                errorMessage: payload
            };

        case placesActionTypes.HOME_PLACES_LOAD_START:
            return {
                ...state,
                home_places: null,
                home_places_loading: true,
                home_places_error_message: null
            };

        case placesActionTypes.HOME_PLACES_LOAD_SUCCESS:
            return {
                ...state,
                home_places: payload,
                home_places_loading: false,
                home_places_error_message: null
            };

        case placesActionTypes.HOME_PLACES_LOAD_ERROR:
            return {
                ...state,
                home_places: null,
                home_places_loading: false,
                home_places_error_message: payload
            };

        case placesActionTypes.PLACES_DETAIL_LOAD_START:
            return {
                ...state,
                places_detail: null,
                places_detail_loading: true,
                places_detail_error_message: null
            };

        case placesActionTypes.PLACES_DETAIL_LOAD_SUCCESS:
            return {
                ...state,
                places_detail: payload,
                places_detail_loading: false,
                places_detail_error_message: null
            };

        case placesActionTypes.PLACES_DETAIL_LOAD_ERROR:
            return {
                ...state,
                places_detail: null,
                places_detail_loading: false,
                places_detail_error_message: payload
            };

        default:
            return state;
    }
}

export default placesReducer;