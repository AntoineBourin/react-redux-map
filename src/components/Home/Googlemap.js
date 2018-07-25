import React, { Component } from 'react';
import MapImport from './MapImport';
const GoogleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwhEq7Y-ui8livRdJQ7IdCiUvpjuqmdi8';

class Googlemap extends Component {

    componentWillMount() {
        this.props.stationslist();
    }

    static defaultProps = {
      map: {
          lat: 47.237829,
          lng: 6.024054,
          zoom: 8,
      },
    };

    render() {
        const { map } = this.props;
        return (
            <div className="map-container">
                <MapImport position={map}
                           googleMapURL={GoogleURL}
                           loadingElement={<div style={{ height: `100%` }} />}
                           containerElement={<div style={{ height: `400px` }} />}
                           mapElement={<div style={{ height: `100%`}} />} />
            </div>
        );
    }
}

export default Googlemap;