import latestNewsActions from './latestNews.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadLatestNewsData = () => (dispatch) => {
    const layer = '?_limit=-1&media_type.title_contains=Press'

    // Before fetch
    dispatch(latestNewsActions.latestNewsLoadStart());

    // Fetch
    apiCreate().get(paths.news + layer).then(result => dispatch(
        latestNewsActions.latestNewsLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        latestNewsActions.latestNewsLoadError(
            error.message
        )
    ))
};

export const loadHomeLatestNewsData = () => (dispatch) => {
    const layer = '?_limit=-1&media_type.title_contains=Press&ShowHomePage=true'

    // Before fetch
    dispatch(latestNewsActions.homelatestNewsLoadStart());

    // Fetch
    apiCreate().get(paths.news + layer).then(result => {
        dispatch(
            latestNewsActions.homelatestNewsLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        latestNewsActions.homelatestNewsLoadError(
            error.message
        )
    ))
}

export const loadHomeNewsData = () => (dispatch) => {
    const layer = '?_limit=-1&media_type.title_contains=News&ShowHomePage=true'

    // Before fetch
    dispatch(latestNewsActions.homeNewsLoadStart());

    // Fetch
    apiCreate().get(paths.news + layer).then(result => {
        dispatch(
            latestNewsActions.homeNewsLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        latestNewsActions.homeNewsLoadError(
            error.message
        )
    ))
}

export const loadNewsCategories = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(latestNewsActions.newsCategoriesLoadStart());

    // Fetch
    apiCreate().get(paths.newsCategories + layer).then(result => {
        dispatch(
            latestNewsActions.newsCategoriesLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        latestNewsActions.newsCategoriesLoadError(
            error.message
        )
    ))
}

export const loadMediaTypes = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(latestNewsActions.mediaTypesLoadStart());

    // Fetch
    apiCreate().get(paths.mediaTypes + layer).then(result => {
        dispatch(
            latestNewsActions.mediaTypesLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        latestNewsActions.mediaTypesLoadError(
            error.message
        )
    ))
}

export const loadAllNews = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(latestNewsActions.allNewsLoadStart());

    // Fetch
    apiCreate().get(paths.news + layer).then(result => {
        dispatch(
            latestNewsActions.allNewsLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        latestNewsActions.allNewsLoadError(
            error.message
        )
    ))
}