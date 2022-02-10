import staticContentsActionTypes from "./staticContents.actionTypes";

const staticContentsLoadStart = () => ({
    type: staticContentsActionTypes.STATIC_CONTENTS_LOAD_START
})

const staticContentsLoadSuccess = (staticContents_data) => ({
    type: staticContentsActionTypes.STATIC_CONTENTS_LOAD_SUCCESS,
    payload: staticContents_data
})

const staticContentsLoadError = (error_message) => ({
    type: staticContentsActionTypes.STATIC_CONTENTS_LOAD_ERROR,
    payload: error_message
})

const siteSettingsLoadStart = () => ({
    type: staticContentsActionTypes.SITE_SETTINGS_LOAD_START
})

const siteSettingsLoadSuccess = (siteSettings_data) => ({
    type: staticContentsActionTypes.SITE_SETTINGS_LOAD_SUCCESS,
    payload: siteSettings_data
})

const siteSettingsLoadError = (error_message) => ({
    type: staticContentsActionTypes.SITE_SETTINGS_LOAD_ERROR,
    payload: error_message
})

const staticContentsActions = {
    staticContentsLoadStart,
    staticContentsLoadSuccess,
    staticContentsLoadError,
    siteSettingsLoadStart,
    siteSettingsLoadSuccess,
    siteSettingsLoadError
}

export default staticContentsActions;