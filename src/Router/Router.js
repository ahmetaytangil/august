import React from 'react';
import CustomSwitch from '../Components/general/CustomSwitch';
import { Route, Redirect } from "react-router-dom";

// Scenes
import Home from '../Scenes/Home'
import Agents from '../Scenes/Agents'
import AgentDetail from '../Scenes/AgentDetail'
import Careers from '../Scenes/Careers'
import ContactUs from '../Scenes/ContactUs'
import ExploreAll from '../Scenes/ExploreAll'
import ExploreAllDetail from '../Scenes/ExploreAllDetail'
import MarketResearch from '../Scenes/MarketResearch'
import MarketResearchDetail from '../Scenes/MarketResearchDetail';
import OfficePage from '../Scenes/OfficePage'
import PressAndMedia from '../Scenes/PressAndMedia'
import PressAndMediaDetail from '../Scenes/PressAndMediaDetail'
import ProjectDetail from '../Scenes/ProjectDetail'
import PropertyDetail from '../Scenes/PropertyDetail'
import PropertyList from '../Scenes/PropertyList'
import Services from '../Scenes/Services'
import ServicesDetail from '../Scenes/ServicesDetail'
import ServicesParts from '../Scenes/ServicesParts'
import ServicesPartsDetail from '../Scenes/ServicesPartsDetail'
import Blogs from '../Scenes/Blogs'
import Projects from '../Scenes/Projects'
import BlogsDetail from '../Scenes/BlogsDetail';
import AboutUs from '../Scenes/AboutUs';
import CareersDetail from '../Scenes/CareersDetail';
import CityDetail from '../Scenes/CityDetail';

export default function Router({ lang }) {
    return (
        <CustomSwitch>
            <Route exact path="/">
                <Redirect to={`/${lang}/home`} />
            </Route>
            
            <Route
                path={`/${lang}/home`}
                component={Home} />
            <Route
                exact path={`/${lang}/personels`}
                component={Agents} />
            <Route
                path={`/${lang}/personels/:slug`}
                component={AgentDetail} />
            <Route
                path={`/${lang}/careers`}
                component={Careers} />
            <Route
                path={`/${lang}/careers/:slug`}
                component={CareersDetail} />
            <Route
                path={`/${lang}/contact-us`}
                component={ContactUs} />
            <Route
                path={`/${lang}/company/:slug`}
                component={AboutUs} />
            <Route
                exact path={`/${lang}/places`}
                component={ExploreAll} />
            <Route
                path={`/${lang}/places/:slug`}
                component={ExploreAllDetail} />
            <Route
                exact path={`/${lang}/market-research`}
                component={MarketResearch} />
            <Route
                path={`/${lang}/market-research/:slug`}
                component={MarketResearchDetail} />
            <Route
                path={`/${lang}/office/:slug`}
                component={OfficePage} />
            <Route
                exact path={`/${lang}/blogs`}
                component={Blogs} />
            <Route
                path={`/${lang}/blogs/:slug`}
                component={BlogsDetail} />
            <Route
                exact path={`/${lang}/news-and-media`}
                component={PressAndMedia} />
            <Route
                path={`/${lang}/news-and-media/:slug`}
                component={PressAndMediaDetail} />
            <Route
                exact path={`/${lang}/projects`}
                component={Projects} />
            <Route
                path={`/${lang}/projects/:slug`}
                component={ProjectDetail} />
            <Route
                path={`/${lang}/properties/:slug`}
                component={PropertyDetail} />
            <Route
                path={`/${lang}/property-list-view`}
                component={PropertyList} />
            <Route
                exact path={`/${lang}/services`}
                component={Services} />
            <Route
                exact path={`/${lang}/services/detail/:slug`}
                component={ServicesDetail} />
            <Route
                exact path={`/${lang}/services/parts/:slug`}
                component={ServicesParts} />
            <Route
                exact path={`/${lang}/services/parts/details/:slug`}
                component={ServicesPartsDetail} />
            <Route
                exact path={`/${lang}/city-details/:slug`}
                component={CityDetail} />
        </CustomSwitch>
    )
}
