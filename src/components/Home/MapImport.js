import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// Import google maps in the App
const MapImport = withScriptjs(withGoogleMap(props => {
    const {onMapMounted, ...otherProps} = props;
    return  <GoogleMap {...otherProps}
                      defaultZoom={props.position.zoom}
                      defaultCenter={{lat: props.position.lat, lng: props.position.lng}}
                      ref={c => { onMapMounted && onMapMounted(c)}}>
            {props.children}
            </GoogleMap>
}));

export default MapImport;