import latestNewsActionTypes from "./latestNews.actionTypes";

const latestNewsLoadStart = () => ({
    type: latestNewsActionTypes.LATESTNEWS_LOAD_START
})

const latestNewsLoadSuccess = (latestNews_data) => ({
    type: latestNewsActionTypes.LATESTNEWS_LOAD_SUCCESS,
    payload: latestNews_data
})

const latestNewsLoadError = (error_message) => ({
    type: latestNewsActionTypes.LATESTNEWS_LOAD_ERROR,
    payload: error_message
})

const homelatestNewsLoadStart = () => ({
    type: latestNewsActionTypes.HOME_LATESTNEWS_LOAD_START
})

const homelatestNewsLoadSuccess = (latestNews_data) => ({
    type: latestNewsActionTypes.HOME_LATESTNEWS_LOAD_SUCCESS,
    payload: latestNews_data
})

const homelatestNewsLoadError = (error_message) => ({
    type: latestNewsActionTypes.HOME_LATESTNEWS_LOAD_ERROR,
    payload: error_message
})

const homeNewsLoadStart = () => ({
    type: latestNewsActionTypes.HOME_NEWS_LOAD_START
})

const homeNewsLoadSuccess = (news_data) => ({
    type: latestNewsActionTypes.HOME_NEWS_LOAD_SUCCESS,
    payload: news_data
})

const homeNewsLoadError = (error_message) => ({
    type: latestNewsActionTypes.HOME_NEWS_LOAD_ERROR,
    payload: error_message
})

const newsCategoriesLoadStart = () => ({
    type: latestNewsActionTypes.NEWS_CATEGORIES_LOAD_START
})

const newsCategoriesLoadSuccess = (news_categories_data) => ({
    type: latestNewsActionTypes.NEWS_CATEGORIES_LOAD_SUCCESS,
    payload: news_categories_data
})

const newsCategoriesLoadError = (error_message) => ({
    type: latestNewsActionTypes.NEWS_CATEGORIES_LOAD_ERROR,
    payload: error_message
})

const mediaTypesLoadStart = () => ({
    type: latestNewsActionTypes.MEDIA_TYPES_LOAD_START
})

const mediaTypesLoadSuccess = (media_types_data) => ({
    type: latestNewsActionTypes.MEDIA_TYPES_LOAD_SUCCESS,
    payload: media_types_data
})

const mediaTypesLoadError = (error_message) => ({
    type: latestNewsActionTypes.MEDIA_TYPES_LOAD_ERROR,
    payload: error_message
})

const allNewsLoadStart = () => ({
    type: latestNewsActionTypes.ALL_AUGUST_NEWS_START
})

const allNewsLoadSuccess = (all) => ({
    type: latestNewsActionTypes.ALL_AUGUST_NEWS_SUCCESS,
    payload: all
})

const allNewsLoadError = (error_message) => ({
    type: latestNewsActionTypes.ALL_AUGUST_NEWS_ERROR,
    payload: error_message
})

const latestNewsActions = {
    latestNewsLoadStart,
    latestNewsLoadSuccess,
    latestNewsLoadError,
    homelatestNewsLoadStart,
    homelatestNewsLoadSuccess,
    homelatestNewsLoadError,
    homeNewsLoadStart,
    homeNewsLoadSuccess,
    homeNewsLoadError,
    newsCategoriesLoadStart,
    newsCategoriesLoadSuccess,
    newsCategoriesLoadError,
    mediaTypesLoadStart,
    mediaTypesLoadSuccess,
    mediaTypesLoadError,
    allNewsLoadStart,
    allNewsLoadSuccess,
    allNewsLoadError
}

export default latestNewsActions;