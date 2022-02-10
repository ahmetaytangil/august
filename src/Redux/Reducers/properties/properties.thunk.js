import propertiesActions from './properties.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadPropertiesData = () => (dispatch) => {
    const layer = '?_limit=-1'
    
    // Before fetch
    dispatch(propertiesActions.propertiesLoadStart());

    // Fetch
    apiCreate().get(paths.properties + layer).then(result => dispatch(
        propertiesActions.propertiesLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        propertiesActions.propertiesLoadError(
            error.message
        )
    ))
};

export const loadHomePropertiesData = () => (dispatch) => {
    const layer = '?_limit=-1&is_home_page=true'
    
    // Before fetch
    dispatch(propertiesActions.homePropertiesLoadStart());

    // Fetch
    apiCreate().get(paths.properties + layer).then(result => {
        dispatch(propertiesActions.homePropertiesLoadSuccess(result.data));
    }).catch(error => dispatch(
        propertiesActions.homePropertiesLoadError(
            error.message
        )
    ))
}