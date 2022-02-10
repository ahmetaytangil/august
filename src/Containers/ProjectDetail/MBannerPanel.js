import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import instance from '../../api/ApiCreate';

// Register Modal -------------------------------------------- [ Function ]
const RegisterModal = (props) => {
    let location = useLocation();
    const [name, setname] = useState("");
    const [surName, setsurName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [country, setcountry] = useState("");
    const [message, setmessage] = useState("");
    const [reqOK, setreqOK] = useState(false);

    const postRequest = (e) => {
        e.preventDefault();
        instance.post('/form-data', {
            "Page": "Project Detail",
            "Link": location.pathname,
            "NameSurname": `${name} ${surName}`,
            "EMail": email,
            "Phone": phone,
            "Country": country,
            "Message": message
        }).then((response) => {
            if (response.status === 200) {
                setreqOK(true);
            }
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="vcentermodal"
            centered
        >
            <Modal.Header>
                <Modal.Title id="vcentermodal">
                    Register Interest
                </Modal.Title>
                <button type="button" className="close" onClick={props.onHide}>
                    <span>&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                <form>
                    {
                        !reqOK ?
                            <>
                                <div className="form-group">
                                    <label htmlFor="riName">Name</label>
                                    <input onChange={e => setname(e.target.value)} type="text" className="form-control border" id="riName" aria-describedby="riNameHelp" required />
                                    <small id="riNameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="riSurName">Surname</label>
                                    <input onChange={e => setsurName(e.target.value)} type="text" className="form-control border" id="riSurName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="riEmail">E-mail</label>
                                    <input onChange={e => setemail(e.target.value)} type="email" className="form-control border" id="riEmail" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="riPhone">Mobile Phone</label>
                                    <input onChange={e => setphone(e.target.value)} type="phone" className="form-control border" id="riPhone" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="riPhone">Country</label>
                                    <input onChange={e => setcountry(e.target.value)} type="text" className="form-control border" id="riCountry" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="riPhone">Message</label>
                                    <textarea onChange={e => setmessage(e.target.value)} type="text" className="form-control border"></textarea>
                                </div>
                                {
                                    (name !== "" && email !== "" && phone !== "" && message !== "") &&
                                    <button type="submit" className="btn btn-primary" onClick={postRequest}>Submit</button>
                                }
                            </>
                            :
                            <p>“Thanks for your message. We will get back to you as soon as possible.”</p>
                    }

                </form>
            </Modal.Body>
        </Modal>
    )
}

// Export Default -------------------------------------------- [ Function ]
export default function MBannerPanel({ project }) {
    const [showModal, setShowModal] = React.useState(false)
    const numFormat = project.PriceFrom.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")

    // ----------------------------------------- Render Content [ return ]
    return (
        <div className="w-100 collective-mid-banner mb-4">
            <Container className="pt-5 pb-4">
                <Row>
                    <Col xs={12} md={4} xl={3} className="mb-4">
                        <p className="m-0 fz-22 c-4d4">
                            PRICE FROM
                        </p>
                        <p className="m-0 fz-24 c-4d4 fw-700">
                            ${numFormat}
                        </p>
                    </Col>
                    <Col xs={12} md={4} xl={3} className="mb-4">
                        <p className="m-0 fz-22 c-4d4">
                            AREA FROM (SQRT)
                        </p>
                        <p className="m-0 fz-24 c-4d4 fw-700">
                            {project.Area}
                        </p>
                    </Col>
                    <Col xs={12} md={4} xl={3} className="mb-4">
                        <p className="m-0 fz-22 c-4d4">
                            AVAIBLE UNITS
                        </p>
                        <p className="m-0 fz-24 c-4d4 fw-700">
                            {project.AvaibleUnit}
                        </p>
                    </Col>
                    <Col xs={12} md={4} xl={3} className="mb-4">
                        <button
                            onClick={() => setShowModal(true)}
                            type="button"
                            className="btn w-100 collective-register-bttn"
                        >
                            REGISTER INTEREST
                        </button>
                        <RegisterModal
                            show={showModal}
                            onHide={() => setShowModal(false)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
