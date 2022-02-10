import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Markdown from 'markdown-to-jsx';
import { connect } from 'react-redux';

// Components
import NewsItem from '../Home/Components/NewsItem'
import CardSlide from '../Home/Components/CardSlide'
import SimpleMap from '../../Components/Googlemaps/SimpleMap';


const AboutPanelTab = ({
  onChange,
  dataProps,
  officesData,
  lang,
  home_News,
  home_News_loading
}) => {

  let mapLocation = home_News_loading ? false : officesData.MapLocation ? officesData.MapLocation.split(",") : false;

  const randomProperty1 = dataProps[Math.floor(Math.random() * dataProps.length)];
  const randomProperty2 = dataProps[Math.floor(Math.random() * dataProps.length)];
  const randomProperty3 = dataProps[Math.floor(Math.random() * dataProps.length)];

  if (home_News_loading || officesData === null) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" />
      </div>
    )
  } else {
    return (
      <div className="w-100 tabcontent" id="about">
        <Container>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12} md={6} lg={8} className="mb-4">
                  <Markdown>
                    {officesData.details}
                  </Markdown>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-4">
                  <div className="office-page-right-card">
                    {mapLocation &&
                      <SimpleMap
                        latZ={mapLocation[0]}
                        lngZ={mapLocation[1]}
                      />
                    }
                    <div className="opr-card-body w-100 py-3 px-4">
                      <h5 className="fw-700 c-4d4 fz-22 mb-3">
                        Opening Hours
                      </h5>
                      <div>
                        <table className="c-4d4 fz-14">
                          <tbody>
                            <tr>
                              <td className="pr-4 pb-2">
                                Weekdays
                              </td>
                              <td className="pb-2">
                                {officesData.WorkHoursWeekdays}
                              </td>
                            </tr>
                            <tr>
                              <td className="pr-4">
                                Saturday
                              </td>
                              <td>
                                {officesData.WorkHoursSaturday}
                              </td>
                            </tr>
                            <tr>
                              <td className="pr-4">
                                Sundays
                              </td>
                              <td>
                                {officesData.WorkHoursSunday}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <span
                        onClick={onChange}
                        className="d-block w-100 opr-card-bttn mt-4 mb-1 cursor-pointer"
                      >
                        Contact with Office
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="w-100 office-page-fullw-bg py-5">
          <Container>
            <section className="w-100 d-flex index-main-head pb-3">
              <h1 className="fz-28 fw-700 c-4d4 mt-0">
                Featured Properties
              </h1>
            </section>
            <Row>
              <Col xs={12} md={6} lg={4}>
                <CardSlide
                  key={randomProperty1.id}
                  asking_price={randomProperty1.asking_price}
                  intro_text={randomProperty1.intro_text}
                  bathrooms={randomProperty1.bathrooms}
                  bedrooms={randomProperty1.bedrooms}
                  living={randomProperty1.living}
                  size_sq_mtr={randomProperty1.size_sq_mtr}
                  list_photo={
                    randomProperty1.list_photo.formats.small ?
                      randomProperty1.list_photo.formats.small
                      :
                      randomProperty1.list_photo
                  }
                  updatedAt={randomProperty1.updatedAt}
                  slug={randomProperty1.Slug}
                  district={randomProperty1.district}
                  currency={randomProperty1.currency}
                  lang={lang}
                />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <CardSlide
                  key={randomProperty2.id}
                  asking_price={randomProperty2.asking_price}
                  intro_text={randomProperty2.intro_text}
                  bathrooms={randomProperty2.bathrooms}
                  bedrooms={randomProperty2.bedrooms}
                  living={randomProperty2.living}
                  size_sq_mtr={randomProperty2.size_sq_mtr}
                  list_photo={
                    randomProperty2.list_photo.formats.small ?
                      randomProperty2.list_photo.formats.small
                      :
                      randomProperty2.list_photo
                  }
                  updatedAt={randomProperty2.updatedAt}
                  slug={randomProperty2.Slug}
                  district={randomProperty2.district}
                  currency={randomProperty2.currency}
                  lang={lang}
                />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <CardSlide
                  key={randomProperty3.id}
                  asking_price={randomProperty3.asking_price}
                  intro_text={randomProperty3.intro_text}
                  bathrooms={randomProperty3.bathrooms}
                  bedrooms={randomProperty3.bedrooms}
                  living={randomProperty3.living}
                  size_sq_mtr={randomProperty3.size_sq_mtr}
                  list_photo={
                    randomProperty3.list_photo.formats.small ?
                      randomProperty3.list_photo.formats.small
                      :
                      randomProperty3.list_photo
                  }
                  updatedAt={randomProperty3.updatedAt}
                  slug={randomProperty3.Slug}
                  district={randomProperty3.district}
                  currency={randomProperty3.currency}
                  lang={lang}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="w-100 py-5">
          <Container>
            <section className="w-100 d-flex index-main-head pb-3">
              <h1 className="fz-28 fw-700 c-4d4 mt-0">
                Lates News From Us
              </h1>
            </section>
            <Row>
              {home_News !== null && home_News.map((newss) => (
                <NewsItem
                  link={`/${lang}/news-and-media/${newss.slug}`}
                  key={newss.id}
                  img={newss.ListImage.url}
                  head={newss.title}
                  content={newss.Subject}
                />
              ))}
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    home_News: state.latestNews.home_News,
    home_News_loading: state.latestNews.home_News_loading
  }
}

export default connect(mapStateToProps)(AboutPanelTab);


