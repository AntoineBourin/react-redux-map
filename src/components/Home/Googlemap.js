import React, { Component } from 'react';
import MapImportContainer from './containers/MapImportContainer';
import Filtermap from './containers/FiltermapContainer';
const GoogleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwhEq7Y-ui8livRdJQ7IdCiUvpjuqmdi8';

class Googlemap extends Component {

    static defaultProps = {
      map: {
          lat: 47.237829,
          lng: 6.024054,
          zoom: 8,
      },
    };

    getSideComponent(isMarker) {
        if (isMarker === false) {
            return ( <Filtermap />);
        } else {
            //TODO: display marker informations
        }
    }

    render() {
        const props = this.props;
        return (
            <div className="map-container">
                <MapImportContainer position={props.map}
                   googleMapURL={GoogleURL}
                   loadingElement={<div style={{ height: `100%` }} />}
                   containerElement={<div style={{ height: `400px` }} />}
                   mapElement={<div style={{ height: `100%`}} />} />
                {this.getSideComponent(props.isMarker)}
            </div>
        );
    }
}

export default Googlemap;