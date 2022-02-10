import personelsActions from './personels.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadpersonelsData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(personelsActions.personelsLoadStart());

    // Fetch
    apiCreate().get(paths.personels + layer).then(result => dispatch(
        personelsActions.personelsLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        personelsActions.personelsLoadError(
            error.message
        )
    ))
};