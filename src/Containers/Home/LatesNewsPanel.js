// General
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

// import components / containers
import Head from '../../Components/general/Head';
import NewsItem from './Components/NewsItem';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

// Export Default -------------------------------------------- [ Function ]
const LatesNewsPanel = ({ lang, latestNews, latestNews_error_message }) => {
    if (latestNews_error_message !== null) {
        return (
            <ErrorMessage message={latestNews_error_message} />
        )
    } else {
        return (
            <div className="lates-news-outher w-100 pt-md-2 pt-3 pb-md-5 pb-3 mt-md-5">
                <Container>
                    <Head
                        thislink={`/${lang}/news-and-media`}
                        headInner="Lates News From Us"
                        buttonInner="ALL NEWS"
                    />
                    {
                        (latestNews !== null) &&
                        <Row className="pt-3 pt-mb-0">
                            {
                                latestNews.map((item) => (
                                    <NewsItem
                                        key={item.id}
                                        img={item.ListImage.url}
                                        head={item.title}
                                        content={item.Content}
                                        link={`/${lang}/news-and-media/${item.slug}`}
                                    />
                                ))
                            }
                        </Row>
                    }
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        latestNews: state.latestNews.home_latestNews,
        latestNews_error_message: state.latestNews.home_latestNews_error_message
    }
}

export default connect(mapStateToProps)(LatesNewsPanel)
