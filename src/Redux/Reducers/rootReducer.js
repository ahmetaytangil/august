import { combineReducers } from "redux";
import blogsReducer from "./blogs/blogs.reducer";
import careersReducer from "./careers/careers.reducer";
import citiesReducer from "./cities/cities.reducer";
import countriesReducer from "./countries/countries.reducer";
import langReducer from "./lang/lang.reducer";
import latestNewsReducer from "./latestNews/latestNews.reducer";
import marketResearchesReducer from "./marketResearches/marketResearches.reducer";
import officesReducer from "./offices/offices.reducer";
import paramTypesReducer from "./paramTypes/paramTypes.reducer";
import personelsReducer from "./personels/personels.reducer";
import placesReducer from "./places/places.reducer";
import projectsReducer from "./projects/projects.reducer";
import propertiesReducer from "./properties/properties.reducer";
import servicesReducer from "./services/services.reducer";
import staticContentsReducer from "./staticContents/staticContents.reducer";
import filterSearchListReducer from "./filterSearchList/filterSearchList.reducer";

const rootReducer = () => combineReducers({
    properties: propertiesReducer,
    projects: projectsReducer,
    places: placesReducer,
    latestNews: latestNewsReducer,
    blogs: blogsReducer,
    paramTypes: paramTypesReducer,
    cities: citiesReducer,
    services: servicesReducer,
    personels: personelsReducer,
    careers: careersReducer,
    countries: countriesReducer,
    staticContents: staticContentsReducer,
    offices: officesReducer,
    lang: langReducer,
    marketResearches: marketResearchesReducer,
    filterSearchList: filterSearchListReducer
});

export default rootReducer;

