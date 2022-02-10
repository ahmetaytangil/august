import filterSearchListActions from './filterSearchList.actions'
import apiCreate from '../../ApiHelper/apiHelper';

export const paramTypesOnClick = (paramTypes_id) => (dispatch) => {
    dispatch(filterSearchListActions.selectParamTypes(paramTypes_id));
};

export const isTopParamTypesOnClick = (paramTypes_ids) => (dispatch) => {
    dispatch(filterSearchListActions.selectParamTypesIsTop(paramTypes_ids));
};

export const cityTypesOnClick = (city_id) => (dispatch) => {
    dispatch(filterSearchListActions.selectCityTypes(city_id));
};

export const priceOnChange = (price) => (dispatch) => {
    dispatch(filterSearchListActions.selectPrice(price));
}

export const loadFilteringProperties = (comparedLink) => (dispatch) => {
    dispatch(filterSearchListActions.filteringLoadStart());

    // Fetch
    apiCreate().get('/august-properties' + comparedLink).then(result => {
        dispatch(
            filterSearchListActions.filteringLoadSuccess(
                result.data
            )
        )
    }).catch(error => {
        console.error(error.message)
    });
}

export const setHomeBuyRent = (setter) => (dispatch) => {
    if (setter) {
        dispatch(filterSearchListActions.setHomeBuyRentTrue());
    } else {
        dispatch(filterSearchListActions.setHomeBuyRentFalse());
    }
}