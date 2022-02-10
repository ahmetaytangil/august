import projectsActionTypes from "./projects.actionTypes";

const projectsLoadStart = () => ({
    type: projectsActionTypes.PROJECTS_LOAD_START
})

const projectsLoadSuccess = (projects_data) => ({
    type: projectsActionTypes.PROJECTS_LOAD_SUCCESS,
    payload: projects_data
})

const projectsLoadError = (error_message) => ({
    type: projectsActionTypes.PROJECTS_LOAD_ERROR,
    payload: error_message
})

const homeProjectsLoadStart = () => ({
    type: projectsActionTypes.HOME_PROJECTS_LOAD_START
})

const homeProjectsLoadSuccess = (projects_data) => ({
    type: projectsActionTypes.HOME_PROJECTS_LOAD_SUCCESS,
    payload: projects_data
})

const homeProjectsLoadError = (error_message) => ({
    type: projectsActionTypes.HOME_PROJECTS_LOAD_ERROR,
    payload: error_message
})

const projectsActions = {
    projectsLoadStart,
    projectsLoadSuccess,
    projectsLoadError,
    homeProjectsLoadStart,
    homeProjectsLoadSuccess,
    homeProjectsLoadError
}

export default projectsActions;