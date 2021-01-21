
import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl';
function Map({ Coordinates: { longitude, latitude }, country }) {

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        zoom: 5.3,

    });


    return (
        <div style={{ margin: '20px' }}>
            <ReactMapGl
                {...viewport}
                latitude={latitude}
                longitude={longitude}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle='mapbox://styles/mapbox/dark-v10'
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                <Marker
                    latitude={latitude}
                    longitude={longitude}
                >
                    <img src="https://img.icons8.com/color/48/000000/marker--v2.png" alt='country' />
                </Marker>
            </ReactMapGl>

        </div>
    )
}

export default Map
