import projectsActionTypes from "./projects.actionTypes";

const initialState = {
    projects: null,
    isLoading: true,
    errorMessage: null,
    home_projects: null,
    home_projects_loading: true,
    home_projects_error_message: null
}

const projectsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case projectsActionTypes.PROJECTS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                projects: null,
                errorMessage: null
            };

        case projectsActionTypes.PROJECTS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projects: payload,
                errorMessage: null
            };

        case projectsActionTypes.PROJECTS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                projects: null,
                errorMessage: payload
            };

        case projectsActionTypes.HOME_PROJECTS_LOAD_START:
            return {
                ...state,
                home_projects_loading: true,
                home_projects: null,
                home_projects_error_message: null
            };

        case projectsActionTypes.HOME_PROJECTS_LOAD_SUCCESS:
            return {
                ...state,
                home_projects_loading: false,
                home_projects: payload,
                home_projects_error_message: null
            };

        case projectsActionTypes.HOME_PROJECTS_LOAD_ERROR:
            return {
                ...state,
                home_projects_loading: false,
                home_projects: null,
                home_projects_error_message: payload
            };

        default:
            return state;
    }
}

export default projectsReducer;