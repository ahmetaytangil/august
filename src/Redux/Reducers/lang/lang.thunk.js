import langActions from './lang.actions';

export const langSetBtn = (lang) => (dispatch) => {
    dispatch(langActions.langSet(lang));
};