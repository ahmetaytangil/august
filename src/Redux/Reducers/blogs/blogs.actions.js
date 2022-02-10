import blogsActionTypes from "./blogs.actionTypes";

const blogsLoadStart = () => ({
    type: blogsActionTypes.BLOGS_LOAD_START
})

const blogsLoadSuccess = (blogs_data) => ({
    type: blogsActionTypes.BLOGS_LOAD_SUCCESS,
    payload: blogs_data
})

const blogsLoadError = (error_message) => ({
    type: blogsActionTypes.BLOGS_LOAD_ERROR,
    payload: error_message
})

const homeblogsLoadStart = () => ({
    type: blogsActionTypes.HOME_BLOGS_LOAD_START
})

const homeblogsLoadSuccess = (blogs_data) => ({
    type: blogsActionTypes.HOME_BLOGS_LOAD_SUCCESS,
    payload: blogs_data
})

const homeblogsLoadError = (error_message) => ({
    type: blogsActionTypes.HOME_BLOGS_LOAD_ERROR,
    payload: error_message
})

const blogsActions = {
    blogsLoadStart,
    blogsLoadSuccess,
    blogsLoadError,
    homeblogsLoadStart,
    homeblogsLoadSuccess,
    homeblogsLoadError
}

export default blogsActions;