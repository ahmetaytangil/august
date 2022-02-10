import placesActions from './places.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadPlacesData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(placesActions.placesLoadStart());

    // Fetch
    apiCreate().get(paths.places + layer).then(result => dispatch(
        placesActions.placesLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        placesActions.placesLoadError(
            error.message
        )
    ))
};

export const loadHomePlacesData = () => (dispatch) => {
    const layer = '?_limit=-1&ShowHomePage=true'

    // Before fetch
    dispatch(placesActions.homeplacesLoadStart());

    // Fetch
    apiCreate().get(paths.places + layer).then(result => {
        dispatch(
            placesActions.homeplacesLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        placesActions.homeplacesLoadError(
            error.message
        )
    ))
}

export const loadPlacesDetail = (slug) => (dispatch) => {
    const layer = `?_limit=-1&Slug=${slug}`;
    
    // Before fetch
    dispatch(placesActions.placesDetailLoadStart());

    // Fetch
    apiCreate().get(paths.places + layer).then(result => {
        dispatch(
            placesActions.placesDetailLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        placesActions.placesDetailLoadError(
            error.message
        )
    ))
}