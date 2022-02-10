import servicesActions from './services.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadservicesData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(servicesActions.servicesLoadStart());

    // Fetch
    apiCreate().get(paths.services + layer).then(result => dispatch(
        servicesActions.servicesLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        servicesActions.servicesLoadError(
            error.message
        )
    ))
};