import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap'
import GoogleLogo from '../../../Assets/images/general/google-logo.svg'
import SignUpBg from '../../../Assets/images/general/sign-up-bg.jpg'

// firebase
import { useAuth } from '../../../Providers/firebase/contexts/AuthContext'

export default function SignUpModal(props) {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const eMailRef = useRef()
    const passwordRef = useRef()
    const passwordAgainRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [successful, setSuccessful] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== passwordAgainRef.current.value) {
            return setError('Passwords Do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(
                eMailRef.current.value,
                passwordRef.current.value,
                firstNameRef.current.value,
                lastNameRef.current.value
            )
            setSuccessful(true)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <Modal
            {...props}
            id="exampleModal2"
            aria-labelledby="sign-up"
            centered
        >
            <Row>
                <Col xs={12} md={6} className="py-3 pr-5 pr-md-1">
                    <div className="sign-up-outher">
                        {successful ?
                            <div>
                                <Alert variant="success" className="text-center">
                                    Your Account has beeen created
                                </Alert>
                                <h5 className="fw-700 fz-18 m-0 text-center pt-3">
                                    You can login with the username and password you created.
                                    <p onClick={props.sw} className="c-1C4BF0 cursor-pointer pt-3">
                                        Sign In
                                    </p>
                                </h5>
                            </div>
                            :
                            <Form onSubmit={handleSubmit}>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="fw-700 fz-20 c-4d4 m-0">
                                        Sign Up
                                    </h5>
                                    <h5 className="fw-700 fz-14 m-0">
                                        Have an account?
                                        <span onClick={props.sw} className="c-1C4BF0 cursor-pointer">
                                            Sign In
                                        </span>
                                    </h5>
                                </div>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Control
                                            className="w-100 sign-up-inpts fz-14 mb-2"
                                            type="text"
                                            placeholder="First Name"
                                            ref={firstNameRef}

                                        />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Control
                                            className="w-100 sign-up-inpts fz-14 mb-2"
                                            type="text"
                                            placeholder="Last Name"
                                            ref={lastNameRef}

                                        />
                                    </Col>
                                </Row>
                                <Form.Control
                                    className="w-100 sign-up-inpts fz-14 mb-2"
                                    type="email"
                                    placeholder="E-Mail"
                                    ref={eMailRef}
                                    required
                                />
                                <Form.Control
                                    className="w-100 sign-up-inpts fz-14 mb-2"
                                    type="password"
                                    placeholder="Password"
                                    ref={passwordRef}
                                    required
                                />
                                <Form.Control
                                    className="w-100 sign-up-inpts fz-14 mb-2"
                                    type="password"
                                    placeholder="Password Again"
                                    ref={passwordAgainRef}
                                    required
                                />
                                <label className="up-to-date fz-14 fw-700">
                                    Keep me up-to-date with property related marketing
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <Button disabled={loading} className="btn log-in-btn" type="submit">
                                    {loading && <Spinner animation="border" className="mr-2" style={{ width: '1rem', height: '1rem' }} />}
                                    Create Account
                                </Button>
                                <div className="or-side my-4">
                                    <span className="or-side-text px-3">
                                        OR
                                    </span>
                                    <div className="or-line"></div>
                                </div>
                                <Link to="/">
                                    <div className="d-flex sign-in-w-g px-3 py-2 mb-3 justify-content-around">
                                        <img src={GoogleLogo} alt="" />
                                        <h5 className="m-0 fz-16 c-4d4 fw-700">Sign In with Google</h5>
                                    </div>
                                </Link>
                            </Form>
                        }
                    </div>
                </Col>
                <Col xs={12} md={6} className="col-12 col-md-6 position-relative">
                    <h1 className="sign-up-bg-text">
                        Stay on top of what's happening with your property
                    </h1>
                    <img
                        src={SignUpBg}
                        alt=""
                        className="w-100 d-block object-cover"
                    />
                </Col>
            </Row>
        </Modal>
    )
}
