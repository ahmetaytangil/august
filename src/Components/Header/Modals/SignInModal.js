import React, { useRef, useState } from 'react'
import { Modal, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap'

// import images
import GoogleLogo from '../../../Assets/images/general/google-logo.svg'
import SignUpBg from '../../../Assets/images/general/sign-up-bg.jpg'

// firebase
import { useAuth } from '../../../Providers/firebase/contexts/AuthContext'

export default function SignInModal(props) {
    const eMailRef = useRef()
    const eMailRefForgotten = useRef()
    const passwordRef = useRef()
    const { login, resetPassword, googleLogin } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [isPasswordForgetten, setIsPasswordForgetten] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(eMailRef.current.value, passwordRef.current.value)
            props.signedIn()
            props.onHide()
        } catch {
            setError('Failed to sign in Your email or password is incorrect Try again.')
        }
        setLoading(false)
    }

    const handleForgottenPassword = async (e) => {
        e.preventDefault()
        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(eMailRefForgotten.current.value);
            setMessage('Check your mailbox for further instructions');
        } catch {
            setError('Failed to reset Password no registered mail');
        }
        setLoading(false);
    }

    const handleGoogle = async (e) => {
        e.preventDefault();
        googleLogin();
        setLoading(false);
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            id="exampleModal"
            aria-labelledby="sign-in"
            centered
        >
            <Row>
                <Col xs={12} md={6} className="py-5">
                    <div className="sign-up--in-outher">
                        {isPasswordForgetten ?
                            <Form onSubmit={handleForgottenPassword}>
                                {error &&
                                    <Alert variant="danger">
                                        {error}
                                    </Alert>
                                }
                                {message &&
                                    <Alert variant="success">
                                        {message}
                                    </Alert>
                                }
                                <h5 className="fw-700 fz-20 c-4d4">
                                    Password Reset
                                </h5>
                                <Form.Control
                                    className="w-100 sign-up-inpts fz-14 mb-2"
                                    type="email"
                                    placeholder="E-Mail"
                                    ref={eMailRefForgotten}
                                    required
                                />
                                <Button disabled={loading} className="btn log-in-btn" type="submit">
                                    {loading && <Spinner animation="border" className="mr-2" style={{ width: '1rem', height: '1rem' }} />}
                                    Password Reset
                                </Button>
                                <p className="c-1C4BF0 cursor-pointer pt-3" onClick={() => { setIsPasswordForgetten(false); setError(''); }}>
                                    Sign in
                                </p>
                            </Form>
                            :
                            <Form onSubmit={handleSubmit} >
                                {error &&
                                    <Alert variant="danger">
                                        {error}
                                    </Alert>
                                }
                                <h5 className="fw-700 fz-20 c-4d4">
                                    Sign In
                                </h5>
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
                                <Button disabled={loading} className="btn log-in-btn" type="submit">
                                    {loading && <Spinner animation="border" className="mr-2" style={{ width: '1rem', height: '1rem' }} />}
                                    Log In
                                </Button>
                                <div className="or-side my-4">
                                    <span className="or-side-text px-3">OR</span>
                                    <div className="or-line"></div>
                                </div>
                                {!loading &&
                                    <span onClick={handleGoogle} className="cursor-pointer">
                                        <div className="d-flex sign-in-w-g px-3 py-2 mb-3">
                                            <img src={GoogleLogo} alt="" />
                                            <h5 className="m-0 fz-16 c-4d4 fw-700">Sign In with Google</h5>
                                        </div>
                                    </span>
                                }

                                <div>
                                    <p className="sign-up--in-footer-c m-0">
                                        <span
                                            className="cursor-pointer"
                                            onClick={() => setIsPasswordForgetten(true)}
                                        >
                                            Forget Password?
                                        </span>
                                    </p>
                                    <p className="sign-up--in-footer-c m-0">
                                        <span onClick={props.sw} className="cursor-pointer">
                                            Sign Up
                                        </span>
                                    </p>
                                </div>
                            </Form>
                        }
                    </div>
                </Col>
                <Col xs={12} md={6} className="position-relative">
                    <h1 className="sign-up-bg-text">Stay on top of what's happening with your property</h1>
                    <img src={SignUpBg} alt="" className="w-100 d-block object-cover" />
                </Col>
            </Row>
        </Modal>
    )
}
