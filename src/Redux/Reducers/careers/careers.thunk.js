import careersActions from './careers.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadcareersData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(careersActions.careersLoadStart());

    // Fetch
    apiCreate().get(paths.careers + layer).then(result => dispatch(
        careersActions.careersLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        careersActions.careersLoadError(
            error.message
        )
    ))
};