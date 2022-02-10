import staticContentsActionTypes from "./staticContents.actionTypes";

const initialState = {
    staticContents: null,
    isLoading: true,
    errorMessage: null,
    siteSettings: null,
    siteSettings_isLoading: true,
    siteSettings_errorMessage: null
}

const staticContentsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case staticContentsActionTypes.STATIC_CONTENTS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                staticContents: null,
                errorMessage: null
            };

        case staticContentsActionTypes.STATIC_CONTENTS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                staticContents: payload,
                errorMessage: null
            };

        case staticContentsActionTypes.STATIC_CONTENTS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                staticContents: null,
                errorMessage: payload
            };

        case staticContentsActionTypes.SITE_SETTINGS_LOAD_START:
            return {
                ...state,
                siteSettings_isLoading: true,
                siteSettings: null,
                siteSettings_errorMessage: null
            };

        case staticContentsActionTypes.SITE_SETTINGS_LOAD_SUCCESS:
            return {
                ...state,
                siteSettings_isLoading: false,
                siteSettings: payload,
                siteSettings_errorMessage: null
            };

        case staticContentsActionTypes.SITE_SETTINGS_LOAD_ERROR:
            return {
                ...state,
                siteSettings_isLoading: false,
                siteSettings: null,
                siteSettings_errorMessage: payload
            };

        default:
            return state;
    }
}

export default staticContentsReducer;