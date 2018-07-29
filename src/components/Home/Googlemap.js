import React, { Component } from 'react';
import MapImportContainer from './containers/MapImportContainer';
import Filtermap from './containers/FiltermapContainer';
const GoogleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwhEq7Y-ui8livRdJQ7IdCiUvpjuqmdi8';

class Googlemap extends Component {

    componentWillReceiveProps (nextProps) {
        if (nextProps.cityPosition.position && this._mapRef) {
            if (nextProps.cityPosition.position.lat) {
                this._mapRef.panTo(nextProps.cityPosition.position);
            }
        }

        if (nextProps.userLocation.lat && nextProps.cityPosition.isFiltered !== true) {
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

    getGlobalMessage() {
        const message = this.props.globalMessage;
        if (message.isVisible === true) {
            return (<p id="global-message" className={message.className}>{message.text}</p>)
        } else {
            return (<p id="global-message" className="hidden">No message</p>);
        }
    }

    render() {
        const props = this.props;
        console.log(props);
        return (
            <div className="main-app">
                {this.getGlobalMessage()}
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
            </div>
        );
    }
}

export default Googlemap;