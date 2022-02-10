import langActionTypes from "./lang.actionTypes";

const initialState = {
    lang: 'en'
}

const langReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case langActionTypes.SET_LANG_OPTION:
            return {
                lang: payload
            };

        default:
            return state;
    }
}

export default langReducer;