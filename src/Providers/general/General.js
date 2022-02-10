import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadHomePropertiesData, loadPropertiesData } from "../../Redux/Reducers/properties/properties.thunk";
import { loadHomeProjectsData, loadProjectsData } from "../../Redux/Reducers/projects/projects.thunk";
import { loadAllNews, loadHomeLatestNewsData, loadHomeNewsData, loadMediaTypes, loadNewsCategories } from "../../Redux/Reducers/latestNews/latestNews.thunk";
import { loadblogsData, loadHomeblogsData } from "../../Redux/Reducers/blogs/blogs.thunk";
import { loadpersonelsData } from "../../Redux/Reducers/personels/personels.thunk";
import { loadcareersData } from "../../Redux/Reducers/careers/careers.thunk";
import { loadcountriesData } from "../../Redux/Reducers/countries/countries.thunk";
import { loadsiteSettingsData, loadstaticContentsData } from "../../Redux/Reducers/staticContents/staticContents.thunk";
import { loadPlacesData } from "../../Redux/Reducers/places/places.thunk";
import { loadofficesData } from "../../Redux/Reducers/offices/offices.thunk";
import { loadmarketResearchesData } from "../../Redux/Reducers/marketResearches/marketResearches.thunk";
import { loadparamTypesData } from "../../Redux/Reducers/paramTypes/paramTypes.thunk";
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';

const GeneralContext = createContext();

export const useGeneral = () => {
    return useContext(GeneralContext)
}

const GeneralProvider = ({
    children,
    lang,
    home_properties_loading,
    home_projects_loading,
    home_latestNews_loading,
    home_blogs_loading,
    home_News_loading,
    siteSettings_isLoading,
    properties_loading,
    projects_loading,
    places_loading,
    blogs_loading,
    personels_loading,
    staticContents_isLoading,
    offices_isLoading,
    careers_isLoading,
    countries_isLoading,
    news_categories_loading,
    media_types_loading,
    all_news_loading,
    marketResearches_isLoading,
    paramTypes_isLoading
}) => {
    const dispatch = useDispatch();
    let location = useLocation();
    
    // Sign in / sign up state
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    // Favorite Modal State
    const [openFavoriteSide, setOpenFavoriteSide] = useState(false);

    const openSide = () => setOpenFavoriteSide(true);
    const closeSide = () => setOpenFavoriteSide(false);

    const switchToSignIn = () => {
        setShowSignUp(false);
        setShowSignIn(true);
    }

    const switchToSignUp = () => {
        setShowSignIn(false);
        setShowSignUp(true);
    }

    const signInOpener = () => {
        setShowSignIn(true)
    }

    const signUpOpener = () => {
        setShowSignUp(true)
    }

    const signInCloser = () => {
        setShowSignIn(false)
    }

    const signUpCloser = () => {
        setShowSignUp(false)
    }

    useEffect(() => {
        if (siteSettings_isLoading && paramTypes_isLoading) {
            dispatch(loadsiteSettingsData());
            dispatch(loadparamTypesData());
        }
        if (location.pathname === '/' + lang + '/home') {
            if (
                home_properties_loading &&
                home_projects_loading &&
                home_latestNews_loading &&
                home_blogs_loading &&
                home_News_loading
            ) {
                dispatch(loadHomePropertiesData());
                dispatch(loadHomeProjectsData());
                dispatch(loadHomeLatestNewsData());
                dispatch(loadHomeblogsData());
                dispatch(loadHomeNewsData());
            }

        } else if (location.pathname !== '/' && location.pathname !== '/' + lang + '/home') {
            if (
                projects_loading &&
                places_loading &&
                blogs_loading &&
                personels_loading &&
                staticContents_isLoading &&
                offices_isLoading &&
                careers_isLoading &&
                countries_isLoading &&
                news_categories_loading &&
                media_types_loading &&
                all_news_loading &&
                marketResearches_isLoading &&
                properties_loading
            ) {
                dispatch(loadProjectsData());
                dispatch(loadPlacesData());
                dispatch(loadblogsData());
                dispatch(loadpersonelsData());
                dispatch(loadstaticContentsData());
                dispatch(loadofficesData());
                dispatch(loadcareersData());
                dispatch(loadcountriesData());
                dispatch(loadNewsCategories());
                dispatch(loadMediaTypes());
                dispatch(loadAllNews());
                dispatch(loadmarketResearchesData());
                dispatch(loadPropertiesData());
            }
        }
        // eslint-disable-next-line
    }, [dispatch, location, lang])

    const value = {
        showSignIn,
        showSignUp,
        switchToSignIn,
        switchToSignUp,
        signInOpener,
        signUpOpener,
        signInCloser,
        signUpCloser,
        openFavoriteSide,
        openSide,
        closeSide
    }

    return (
        <GeneralContext.Provider value={value}>
            {children}
        </GeneralContext.Provider>
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang.lang,
        home_properties_loading: state.properties.home_properties_loading,
        home_projects_loading: state.projects.home_projects_loading,
        home_latestNews_loading: state.latestNews.home_latestNews_loading,
        home_blogs_loading: state.blogs.home_blogs_loading,
        home_News_loading: state.latestNews.home_News_loading,
        siteSettings_isLoading: state.staticContents.siteSettings_isLoading,
        properties_loading: state.properties.isLoading,
        projects_loading: state.projects.isLoading,
        places_loading: state.places.isLoading,
        blogs_loading: state.blogs.isLoading,
        personels_loading: state.personels.isLoading,
        staticContents_isLoading: state.staticContents.isLoading,
        offices_isLoading: state.offices.isLoading,
        careers_isLoading: state.careers.isLoading,
        countries_isLoading: state.countries.isLoading,
        news_categories_loading: state.latestNews.news_categories_loading,
        media_types_loading: state.latestNews.media_types_loading,
        all_news_loading: state.latestNews.all_news_loading,
        marketResearches_isLoading: state.marketResearches.isLoading,
        paramTypes_isLoading: state.paramTypes.isLoading
    }
}

export default connect(mapStateToProps)(GeneralProvider)

