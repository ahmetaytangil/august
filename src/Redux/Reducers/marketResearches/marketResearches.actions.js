import marketResearchesActionTypes from "./marketResearches.actionTypes";

const marketResearchesLoadStart = () => ({
    type: marketResearchesActionTypes.MARKET_RESEARCHES_LOAD_START
})

const marketResearchesLoadSuccess = (marketResearches_data) => ({
    type: marketResearchesActionTypes.MARKET_RESEARCHES_LOAD_SUCCESS,
    payload: marketResearches_data
})

const marketResearchesLoadError = (error_message) => ({
    type: marketResearchesActionTypes.MARKET_RESEARCHES_LOAD_ERROR,
    payload: error_message
})

const marketResearchesActions = {
    marketResearchesLoadStart,
    marketResearchesLoadSuccess,
    marketResearchesLoadError
}

export default marketResearchesActions;