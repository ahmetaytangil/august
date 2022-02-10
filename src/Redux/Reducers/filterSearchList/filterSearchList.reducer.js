import filterSearchListActionTypes from "./filterSearchList.actionTypes";

const initialState = {
    selected_paramTypes: [],
    selected_cityTypes: [],
    selected_prices: null,
    filtered_properties: null,
    is_filtering_properties: false,
    homeBuyRent: false
}

const filterSearchListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case filterSearchListActionTypes.SELECTED_PARAM_TYPES:
            const isParamPayload_selected = state.selected_paramTypes.some((element) => element === payload);
            return {
                ...state,
                selected_paramTypes: isParamPayload_selected ?
                    state.selected_paramTypes.filter(element => element !== payload)
                    : 
                    [...state.selected_paramTypes, payload]
            };

        case filterSearchListActionTypes.SELECTED_PARAM_TYPES_IS_TOP:
            const isArrayEmpty = state.selected_paramTypes.length !== 0 ? true : false;
            return {
                ...state,
                selected_paramTypes: isArrayEmpty ? [] : payload
            };

        case filterSearchListActionTypes.SELECTED_CITY_TYPES:
            const isCityPayload_selected = state.selected_cityTypes.some((element) => element === payload);
            return {
                ...state,
                selected_cityTypes: isCityPayload_selected ?
                    state.selected_cityTypes.filter(element => element !== payload)
                    : 
                    [...state.selected_cityTypes, payload]
            };

        case filterSearchListActionTypes.SELECTED_PRICES:
            return {
                ...state,
                selected_prices: [payload[0], payload[1]]
            };

        case filterSearchListActionTypes.FILTERING_LOAD_START:
            return {
                ...state,
                is_filtering_properties: true
            };

        case filterSearchListActionTypes.FILTERING_LOAD_SUCCESS:
            return {
                ...state,
                is_filtering_properties: false,
                filtered_properties: payload
            }

        case filterSearchListActionTypes.SET_HOME_BUYRENT_TRUE:
            return {
                ...state,
                homeBuyRent: true
            }

        case filterSearchListActionTypes.SET_HOME_BUYRENT_FALSE:
            return {
                ...state,
                homeBuyRent: false
            }
            
        default:
            return state;
    }
}

export default filterSearchListReducer;