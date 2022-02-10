import marketResearchesActionTypes from "./marketResearches.actionTypes";

const initialState = {
    marketResearches: null,
    isLoading: true,
    errorMessage: null
}

const marketResearchesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case marketResearchesActionTypes.MARKET_RESEARCHES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                marketResearches: null,
                errorMessage: null
            };

        case marketResearchesActionTypes.MARKET_RESEARCHES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                marketResearches: payload,
                errorMessage: null
            };

        case marketResearchesActionTypes.MARKET_RESEARCHES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                marketResearches: null,
                errorMessage: payload
            };

        default:
            return state;
    }
}

export default marketResearchesReducer;