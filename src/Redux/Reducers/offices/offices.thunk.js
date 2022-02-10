import officesActions from './offices.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadofficesData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(officesActions.officesLoadStart());

    // Fetch
    apiCreate().get(paths.offices + layer).then(result => dispatch(
        officesActions.officesLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        officesActions.officesLoadError(
            error.message
        )
    ))
};