import React, { Component } from 'react';
import MapImportContainer from './containers/MapImportContainer';
import Filtermap from './containers/FiltermapContainer';
const GoogleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwhEq7Y-ui8livRdJQ7IdCiUvpjuqmdi8';

class Googlemap extends Component {

    componentWillReceiveProps (nextProps) {
        if (nextProps.cityPosition && this._mapRef) {
            if (nextProps.cityPosition.lat) {
                this._mapRef.panTo(nextProps.cityPosition);
            }
        }

        if (nextProps.userLocation.lat) {
            this._mapRef.panTo(nextProps.userLocation);
        }
    }

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

    _handleMapMounted(google) {
        if (!google || this._mapRef) return;
        this._mapRef = google;
    }

    render() {
        const props = this.props;
        return (
            <div className="map-container">
                <div>

                </div>
                <MapImportContainer position={props.map}
                    onMapMounted={this._handleMapMounted.bind(this)}
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