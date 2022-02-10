import citiesActions from './cities.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadcitiesData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(citiesActions.citiesLoadStart());

    // Fetch
    apiCreate().get(paths.cities + layer).then(result => dispatch(
        citiesActions.citiesLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        citiesActions.citiesLoadError(
            error.message
        )
    ))
};