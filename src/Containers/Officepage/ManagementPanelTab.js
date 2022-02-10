// General
import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import ManagementCard from './Components/ManagementCard';
import { connect } from 'react-redux';

// api
import requests from '../../api/ApiRequests';
import useFetch from '../../api/useFetch';

// Export Default -------------------------------------------- [ Function ]
const ManagementPanelTab = ({ officesData }) => {
    const { data: typesData, isPending } = useFetch(`${requests.personelTypes}?august_office_personels.august_office=${officesData.id}`)
    
    if (isPending) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" />
            </div>
        )
    } else {

        // ----------------------------------------- Render Content [ return ]
        return (
            <Container className="tabcontent" id="management">
                {typesData && typesData.map((type) => {
                    if (type.TypeName === "Agent") {
                        return null
                    } else {
                        return (
                            <div key={type.id}>
                                <section className="w-100 d-flex index-main-head mt-5 border-bottom">
                                    <h1 className="fz-28 fw-700 c-4d4 mt-0">
                                        {type.TypeName}
                                    </h1>
                                </section>
                                {type.august_office_personels &&
                                    type.august_office_personels.map((personel) => {
                                        return (
                                            <ManagementCard
                                                img={personel.photo.url}
                                                name={personel.namesurname}
                                                content={personel.Detail}
                                                phone={personel.Phone}
                                                mail={personel.EMail}
                                                key={personel.id}
                                            />
                                        )
                                    })}
                            </div>
                        )
                    }
                })}
            </Container>
        )
    }
}

export default ManagementPanelTab;

