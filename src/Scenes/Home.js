// General
import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import AugustLoading from '../Components/general/AugustLoading';

// import Containers
import BannerPanel from '../Containers/Home/BannerPanel';
import BlogPanel from '../Containers/Home/BlogPanel';
import BottomBannerPanel from '../Containers/Home/BottomBannerPanel';
import CardSliderPanel from '../Containers/Home/CardSliderPanel';
import DevProjectsPanel from '../Containers/Home/DevProjectsPanel';
import FindPlacePanel from '../Containers/Home/FindPlacePanel';
import LatesNewsPanel from '../Containers/Home/LatesNewsPanel';
import PropertyPanel from '../Containers/Home/PropertyPanel';
import { useAuth } from '../Providers/firebase/contexts/AuthContext';

// Export Default -------------------------------------------- [ Function ]
const Home = (props) => {
    const { currentUser } = useAuth();

    if ((props.home_properties_loading || props.home_projects_loading || props.home_places_loading)) { return <AugustLoading /> } else {
        return (
            <>
                <BannerPanel />
                <main className="general-main-outher">
                    <Container>
                        <CardSliderPanel lang={props.lang} />
                        <DevProjectsPanel lang={props.lang} />
                    </Container>
                    <PropertyPanel />
                    <FindPlacePanel lang={props.lang} />
                    <LatesNewsPanel lang={props.lang} />
                    <BlogPanel lang={props.lang} />
                    {
                        !currentUser &&
                        <BottomBannerPanel />
                    }
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang.lang,
        home_properties_loading: state.properties.home_properties_loading,
        home_projects_loading: state.projects.home_projects_loading,
        home_places_loading: state.places.home_places_loading
    }
}

export default connect(mapStateToProps)(Home);