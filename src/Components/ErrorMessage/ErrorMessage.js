import React from 'react'

export default function ErrorMessage(props) {
    const refreshPage = () => window.location.reload(false);

    return (
        <div
            className="d-flex align-items-center justify-content-center text-center"
            style={{ position: 'fixed', top: '0', right: '0', left: '0', right: '0', bottom: '0' }}
        >
            <div>
                <p className="fz-22 fw-700">{props.message}</p>
                <span class="btn banner-search-bttn fw-700 c-fff" onClick={refreshPage}>Click to try again!</span>
            </div>
        </div>
    )
}
