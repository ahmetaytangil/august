import blogsActions from './blogs.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadblogsData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(blogsActions.blogsLoadStart());

    // Fetch
    apiCreate().get(paths.blogs + layer).then(result => dispatch(
        blogsActions.blogsLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        blogsActions.blogsLoadError(
            error.message
        )
    ))
};

export const loadHomeblogsData = () => (dispatch) => {
    const layer = '?_limit=-1&ShowHomePage=true'

    // Before fetch
    dispatch(blogsActions.homeblogsLoadStart());

    // Fetch
    apiCreate().get(paths.blogs + layer).then(result => {
        dispatch(
            blogsActions.homeblogsLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        blogsActions.homeblogsLoadError(
            error.message
        )
    ))
}