import blogsActionTypes from "./blogs.actionTypes";

const initialState = {
    blogs: null,
    isLoading: true,
    errorMessage: null,
    home_blogs: null,
    home_blogs_loading: true,
    home_blogs_error_message: null
}

const blogsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case blogsActionTypes.BLOGS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                blogs: null,
                errorMessage: null
            };

        case blogsActionTypes.BLOGS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                blogs: payload,
                errorMessage: null
            };

        case blogsActionTypes.BLOGS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                blogs: null,
                errorMessage: payload
            };

        case blogsActionTypes.HOME_BLOGS_LOAD_START:
            return {
                ...state,
                home_blogs_loading: true,
                home_blogs: null,
                home_blogs_error_message: null
            };

        case blogsActionTypes.HOME_BLOGS_LOAD_SUCCESS:
            return {
                ...state,
                home_blogs_loading: false,
                home_blogs: payload,
                home_blogs_error_message: null
            };

        case blogsActionTypes.HOME_BLOGS_LOAD_ERROR:
            return {
                ...state,
                home_blogs_loading: false,
                home_blogs: null,
                home_blogs_error_message: payload
            };

        default:
            return state;
    }
}

export default blogsReducer;