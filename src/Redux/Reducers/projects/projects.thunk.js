import projectsActions from './projects.actions'
import apiCreate from '../../ApiHelper/apiHelper';
import paths from '../../ApiHelper/apiPaths';

export const loadProjectsData = () => (dispatch) => {
    const layer = '?_limit=-1'

    // Before fetch
    dispatch(projectsActions.projectsLoadStart());

    // Fetch
    apiCreate().get(paths.projects + layer).then(result => dispatch(
        projectsActions.projectsLoadSuccess(
            result.data
        )
    )).catch(error => dispatch(
        projectsActions.projectsLoadError(
            error.message
        )
    ))
};

export const loadHomeProjectsData = () => (dispatch) => {
    const layer = '?_limit=-1&ShowHomePage=true'

    // Before fetch
    dispatch(projectsActions.homeProjectsLoadStart());

    // Fetch
    apiCreate().get(paths.projects + layer).then(result => {
        dispatch(
            projectsActions.homeProjectsLoadSuccess(
                result.data
            )
        );
    }).catch(error => dispatch(
        projectsActions.homeProjectsLoadError(
            error.message
        )
    ))
}