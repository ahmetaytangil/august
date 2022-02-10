import staticContentsActions from './staticContents.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadstaticContentsData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(staticContentsActions.staticContentsLoadStart());

    // Fetch
    apiCreate().get(paths.staticContents + layer).then(result => dispatch(
        staticContentsActions.staticContentsLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        staticContentsActions.staticContentsLoadError(
            error.message
        )
    ))
};

export const loadsiteSettingsData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(staticContentsActions.siteSettingsLoadStart());

    // Fetch
    apiCreate().get(paths.siteSettings + layer).then(result => dispatch(
        staticContentsActions.siteSettingsLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        staticContentsActions.siteSettingsLoadError(
            error.message
        )
    ))
};