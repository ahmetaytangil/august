import latestNewsActionTypes from "./latestNews.actionTypes";

const initialState = {
    latestNews: null,
    isLoading: true,
    errorMessage: null,
    home_latestNews: null,
    home_latestNews_loading: true,
    home_latestNews_error_message: null,
    home_News_loading: true,
    home_News: null,
    home_News_error_message: null,
    news_categories: null,
    news_categories_loading: true,
    news_categories_error_message: null,
    media_types: null,
    media_types_loading: true,
    media_types_error_message: null,
    all_news: null,
    all_news_loading: true,
    all_news_error_message: null
}

const latestNewsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case latestNewsActionTypes.LATESTNEWS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                latestNews: null,
                errorMessage: null
            };

        case latestNewsActionTypes.LATESTNEWS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                latestNews: payload,
                errorMessage: null
            };

        case latestNewsActionTypes.LATESTNEWS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                latestNews: null,
                errorMessage: payload
            };

        case latestNewsActionTypes.HOME_LATESTNEWS_LOAD_START:
            return {
                ...state,
                home_latestNews_loading: true,
                home_latestNews: null,
                home_latestNews_error_message: null
            };

        case latestNewsActionTypes.HOME_LATESTNEWS_LOAD_SUCCESS:
            return {
                ...state,
                home_latestNews_loading: false,
                home_latestNews: payload,
                home_latestNews_error_message: null
            };

        case latestNewsActionTypes.HOME_LATESTNEWS_LOAD_ERROR:
            return {
                ...state,
                home_latestNews_loading: false,
                home_latestNews: null,
                home_latestNews_error_message: payload
            };

        case latestNewsActionTypes.HOME_NEWS_LOAD_START:
            return {
                ...state,
                home_News_loading: true,
                home_News: null,
                home_News_error_message: null
            };

        case latestNewsActionTypes.HOME_NEWS_LOAD_SUCCESS:
            return {
                ...state,
                home_News_loading: false,
                home_News: payload,
                home_News_error_message: null
            };

        case latestNewsActionTypes.HOME_NEWS_LOAD_ERROR:
            return {
                ...state,
                home_News_loading: false,
                home_News: null,
                home_News_error_message: payload
            };

        case latestNewsActionTypes.NEWS_CATEGORIES_LOAD_START:
            return {
                ...state,
                news_categories_loading: true,
                news_categories: null,
                news_categories_error_message: null
            };

        case latestNewsActionTypes.NEWS_CATEGORIES_LOAD_SUCCESS:
            return {
                ...state,
                news_categories: payload,
                news_categories_error_message: null,
                news_categories_loading: false
            };

        case latestNewsActionTypes.NEWS_CATEGORIES_LOAD_ERROR:
            return {
                ...state,
                news_categories_error_message: payload,
                news_categories: null,
                news_categories_loading: false
            };

        case latestNewsActionTypes.MEDIA_TYPES_LOAD_START:
            return {
                ...state,
                media_types: null,
                media_types_loading: true,
                media_types_error_message: null
            };

        case latestNewsActionTypes.MEDIA_TYPES_LOAD_SUCCESS:
            return {
                ...state,
                media_types: payload,
                media_types_loading: false,
                media_types_error_message: null
            };

        case latestNewsActionTypes.MEDIA_TYPES_LOAD_ERROR:
            return {
                ...state,
                media_types: null,
                media_types_loading: false,
                media_types_error_message: payload
            };

        case latestNewsActionTypes.ALL_AUGUST_NEWS_START:
            return {
                ...state,
                all_news: null,
                all_news_loading: true,
                all_news_error_message: null
            };

        case latestNewsActionTypes.ALL_AUGUST_NEWS_SUCCESS:
            return {
                ...state,
                all_news: payload,
                all_news_loading: false,
                all_news_error_message: null
            };

        case latestNewsActionTypes.ALL_AUGUST_NEWS_ERROR:
            return {
                ...state,
                all_news: null,
                all_news_loading: false,
                all_news_error_message: payload
            };

        default:
            return state;
    }
}

export default latestNewsReducer;