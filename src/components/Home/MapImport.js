import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapImport = withScriptjs(withGoogleMap(
    class MapImport extends Component {

        componentWillMount() {
            this.props.stationslist();
        }

        addMarkers() {
            return (Object.keys(this.props.stations)
                .filter((item) => this.getFilterContract(item))
                .map((item) => {
                    const station = this.props.stations[item];
                    return (
                      <Marker   key={item}
                                position={station.position}
                                title={station.name}
                                onClick={() =>this._markerClicked(station)}
                      />
                    );
            }));
        }

        getFilterContract(item) {
            const filterContract = this.props.contractFilter;
            if (filterContract.isFiltered === true) {
                return this.props.stations[item].contract_name === filterContract.contractName;
            } else {
                return true;
            }
        }

        _markerClicked(station) {
            if (typeof station === 'object') {
                this.props.markerstate(true);
            }
        }

        render() {
            const props = this.props;
            const {onMapMounted, ...otherProps} = props;
            return <GoogleMap {...otherProps}
                       defaultZoom={props.position.zoom}
                       defaultCenter={{lat: props.position.lat, lng: props.position.lng}}
                       ref={c => { onMapMounted && onMapMounted(c)}}>
                    {props.children}
                    {this.addMarkers()}
            </GoogleMap>
        }
    }
));

export default MapImport;