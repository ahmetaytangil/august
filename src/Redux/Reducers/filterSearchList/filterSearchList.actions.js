import filterSearchListActionTypes from "./filterSearchList.actionTypes";

const selectParamTypes = (paramTypes_id) => ({
    type: filterSearchListActionTypes.SELECTED_PARAM_TYPES,
    payload: paramTypes_id
})

const selectParamTypesIsTop = (paramTypes_ids) => ({
    type: filterSearchListActionTypes.SELECTED_PARAM_TYPES_IS_TOP,
    payload: paramTypes_ids
})

const selectCityTypes = (city_id) => ({
    type: filterSearchListActionTypes.SELECTED_CITY_TYPES,
    payload: city_id
})

const selectPrice = (price) => ({
    type: filterSearchListActionTypes.SELECTED_PRICES,
    payload: price
})

const filteringLoadStart = () => ({
    type: filterSearchListActionTypes.FILTERING_LOAD_START
})

const filteringLoadSuccess = (returned_data) => ({
    type: filterSearchListActionTypes.FILTERING_LOAD_SUCCESS,
    payload: returned_data
})

const setHomeBuyRentTrue = () => ({
    type: filterSearchListActionTypes.SET_HOME_BUYRENT_TRUE
})

const setHomeBuyRentFalse = () => ({
    type: filterSearchListActionTypes.SET_HOME_BUYRENT_FALSE
})

const filterSearchListActions = {
    selectParamTypes,
    selectParamTypesIsTop,
    selectCityTypes,
    selectPrice,
    filteringLoadStart,
    filteringLoadSuccess,
    setHomeBuyRentTrue,
    setHomeBuyRentFalse
}

export default filterSearchListActions;