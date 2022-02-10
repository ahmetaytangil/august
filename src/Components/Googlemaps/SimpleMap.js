import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MarkerSvg from '../../../src/Assets/images/marker.svg'

function SimpleMap({
  latZ = 41.01922317065652,
  lngZ = 28.9036888829491,
  w = "100%",
  h = "255px"
}) {
  const center = {
    lat: parseFloat(latZ),
    lng: parseFloat(lngZ)
  }
  const containerStyle = {
    width: w,
    height: h
  }
  const defaultMapOptions = {
    fullscreenControl: false,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false
  };
  return (
    <div className="simple-google-map-outher">
      <LoadScript
        googleMapsApiKey="AIzaSyALFxcECQgzzGBKDsEedUqWTCPWxj0Cgwo"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={defaultMapOptions}
        >
          <Marker position={center} icon={MarkerSvg}></Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default React.memo(SimpleMap)