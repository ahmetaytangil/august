import React from "react"
import { GoogleMap, InfoWindow, Marker, LoadScript } from "@react-google-maps/api"
import { Link } from "react-router-dom"

function SearchMap({ propsData, activeMarker, setNullMarker, lang }) {
    const centerr = activeMarker ? propsData.filter(prp => prp.id === activeMarker) : null
    const generateCC = centerr !== null ? centerr[0].map_coordinate.split(",") : null

    const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds()
        propsData.forEach(({ map_coordinate }) => {
            if (map_coordinate) {
                let generateCoordinates = map_coordinate.split(",")
                bounds.extend({
                    lat: parseFloat(generateCoordinates[0]),
                    lng: parseFloat(generateCoordinates[1])
                })
            }
        })
        map.fitBounds(bounds)
    }
    return (
        <div className="google-maps-outher">
            <LoadScript googleMapsApiKey="AIzaSyALFxcECQgzzGBKDsEedUqWTCPWxj0Cgwo">
                <GoogleMap
                    onLoad={handleOnLoad}
                    onClick={setNullMarker}
                    mapContainerStyle={{ width: "100vw", height: "80vh" }}
                    center={
                        generateCC ?
                            {
                                lat: parseFloat(generateCC[0]),
                                lng: parseFloat(generateCC[1])
                            }
                            :
                            null
                    }
                    zoom={generateCC ? 25 : 10}
                >
                    {propsData.map(({ id, map_coordinate, list_photo, asking_price, currency, district, Slug }) => {
                        const numFormat = asking_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
                        asking_price = numFormat
                        let mapCoordinate = map_coordinate ? map_coordinate.split(",") : false
                        if (mapCoordinate) {
                            return (
                                <Marker
                                    key={id}
                                    position={
                                        mapCoordinate ?
                                            {
                                                lat: parseFloat(mapCoordinate[0]),
                                                lng: parseFloat(mapCoordinate[1])
                                            }
                                            :
                                            null
                                    }
                                >
                                    {activeMarker === id ? (
                                        <InfoWindow onCloseClick={setNullMarker}>
                                            <Link to={`/${lang}/properties/${Slug}`}>
                                                <div style={{ maxWidth: '170px' }}>
                                                    <img
                                                        src={list_photo.url}
                                                        className="object-cover d-block"
                                                        style={{ width: '100%', height: '100px' }}
                                                    />
                                                    <p className="cards-body-price fw-700 fz-22 mb-0 mt-3">
                                                        {currency &&
                                                            <span>
                                                                {
                                                                    currency === "Dollar" ?
                                                                        "$"
                                                                        : currency === "EURO" ?
                                                                            "€"
                                                                            : currency === "TL" ?
                                                                                "₺"
                                                                                :
                                                                                ""
                                                                }
                                                            </span>
                                                        }{asking_price}
                                                    </p>
                                                    <p className="cards-body-head fz-18 fw-700">
                                                        {district.Name}
                                                    </p>
                                                </div>
                                            </Link>
                                        </InfoWindow>
                                    ) : null}
                                </Marker>
                            )
                        }

                    })}
                </GoogleMap>
            </LoadScript >
        </div>
    )
}

export default React.memo(SearchMap)
