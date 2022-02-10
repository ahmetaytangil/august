// General
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

// import components / containers
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/Scrolltotop/ScrollToTop';
import Favorited from './Components/favorited/Favorited';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import Router from './Router/Router';

// Export Default -------------------------------------------- [ Function ]
const App = ({ siteSettings_isPending, siteSettings, lang, siteSettings_errorMessage }) => {
  if (siteSettings_errorMessage !== null) {
    return (
      <ErrorMessage message={siteSettings_errorMessage} />
    )
  } else {
    // ----------------------------------------- Render Content [ return ]
    return (
      <div className="app">
        {
          (!siteSettings_isPending) &&
          <Helmet>
            <title>{siteSettings[0].Title}</title>
            <meta name="description" content={`${siteSettings[0].Descriptions}`} />
            <meta name="keywords" content={`${siteSettings[0].Keywords}`} />
          </Helmet>
        }

        <ScrollToTop />

        <Header />

        <Favorited />

        <Router lang={lang} />

        {
          (!siteSettings_isPending) &&
          <Footer siteSettings={siteSettings[0]} />
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    siteSettings: state.staticContents.siteSettings,
    siteSettings_isPending: state.staticContents.siteSettings_isLoading,
    siteSettings_errorMessage: state.staticContents.siteSettings_errorMessage,
    lang: state.lang.lang
  }
}

export default connect(mapStateToProps)(App)

