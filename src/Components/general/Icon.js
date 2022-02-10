import React from 'react'

// Import Images
import BedIcon from '../../Assets/images/general/cards-bed.svg'
import ShowerIcon from '../../Assets/images/general/cards-shower.svg'
import RoomIcon from '../../Assets/images/general/sitting-room.svg'
import HomeSizeIcon from '../../Assets/images/general/home-size.svg'
import BackIcon from '../../Assets/images/general/back.svg'

const Img = ({src}) => {
    return (
        <img src={src} alt="" />
    )
}

export default function Icon(props) {
    return (
        <React.Fragment>
            {(props.src === "bed") && <Img src={BedIcon}  /> }
            {(props.src === "shower") && <Img src={ShowerIcon} /> }
            {(props.src === "room") && <Img src={RoomIcon} />}
            {(props.src === "home-size") && <Img src={HomeSizeIcon} />}
            {(props.src === "back") && <Img src={BackIcon} />}
        </React.Fragment>
    )
}
