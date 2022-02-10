import paramTypesActionTypes from "./paramTypes.actionTypes";

const paramTypesLoadStart = () => ({
    type: paramTypesActionTypes.PARAM_TYPES_LOAD_START
})

const paramTypesLoadSuccess = (paramtypes_data) => ({
    type: paramTypesActionTypes.PARAM_TYPES_LOAD_SUCCESS,
    payload: paramtypes_data
})

const paramTypesLoadError = (error_message) => ({
    type: paramTypesActionTypes.PARAM_TYPES_LOAD_ERROR,
    payload: error_message
})

const paramTypesActions = {
    paramTypesLoadStart,
    paramTypesLoadSuccess,
    paramTypesLoadError
}

export default paramTypesActions;