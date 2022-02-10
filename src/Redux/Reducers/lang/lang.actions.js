import langActionTypes from "./lang.actionTypes";

const langSet = (lang) => ({
    type: langActionTypes.SET_LANG_OPTION,
    payload: lang
})

const langActions = {
    langSet
}

export default langActions;