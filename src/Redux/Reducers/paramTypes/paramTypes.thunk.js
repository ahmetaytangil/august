import paramTypesActions from './paramTypes.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadparamTypesData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(paramTypesActions.paramTypesLoadStart());

    // Fetch
    apiCreate().get(paths.paramTypes + layer).then(result => {
        dispatch(
            paramTypesActions.paramTypesLoadSuccess(
                result.data
            ))
        }
    ).catch (error => dispatch(
        paramTypesActions.paramTypesLoadError(
            error.message
        )
    ))
};