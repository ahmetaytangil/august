import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import PhoneBlackSvg from '../../../Assets/images/general/phone-black.svg'
import MailBlackSvg from '../../../Assets/images/general/mail-black.svg'

export default function ManagementCard({ img, name, content, phone, mail }) {
    return (
        <div className="d-flex management-sides-outher">
            <div className="management-left-side pr-4 d-flex align-items-center">
                <div className="pr-4 h-100">
                    <img
                        style={{ height: '228px' }}
                        className="d-block object-cover management-slides-img"
                        src={img}
                        alt={name}
                    />
                </div>
                <div>
                    <h3 className="fz-28 c-4d4 fw-700 pt-4">
                        {name}
                    </h3>
                    <p>
                        {content}
                    </p>
                </div>
            </div>
            <div className="management-cards-contant">
                <ul>
                    {phone &&
                        <li>
                            <a target="_blank" href={`tel:${phone}`} className="d-flex">
                                <img className="mr-1" src={PhoneBlackSvg} alt={name} />
                                {phone}
                            </a>
                        </li>
                    }
                    {mail &&
                        <li>
                            <a target="_blank" href={`mailto:${mail}`} className="d-flex">
                                <img className="mr-1" src={MailBlackSvg} alt={name} />
                                {mail}
                            </a>
                        </li>
                    }
                </ul>
                {
                    phone ?
                    <div class="d-flex op-agents-cards-footer" style={{left: '0', right: '0', position: 'relative'}}>
                        <div class="w-100 mt-3">
                            <a class="d-block w-100" href={`sms:${phone}`} target="_blank">Text Message</a>
                        </div>
                    </div>
                    :
                    <div class="d-flex op-agents-cards-footer" style={{left: '0', right: '0', position: 'relative'}}>
                        <div class="w-100 mt-3">
                            <a class="d-block w-100" href={`mailto:${mail}`} target="_blank">Mail Message</a>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
