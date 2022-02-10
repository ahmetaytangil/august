import countriesActions from './countries.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadcountriesData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(countriesActions.countriesLoadStart());

    // Fetch
    apiCreate().get(paths.countries + layer).then(result => dispatch(
        countriesActions.countriesLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        countriesActions.countriesLoadError(
            error.message
        )
    ))
};