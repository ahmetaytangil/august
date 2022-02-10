import marketResearchesActions from './marketResearches.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadmarketResearchesData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(marketResearchesActions.marketResearchesLoadStart());

    // Fetch
    apiCreate().get(paths.marketResearches + layer).then(result => dispatch(
        marketResearchesActions.marketResearchesLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        marketResearchesActions.marketResearchesLoadError(
            error.message
        )
    ))
};