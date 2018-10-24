import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import {_errorPosition} from "./actions/userdata";
import userIcon from '../../beachflag.png';

const MapImport = withScriptjs(withGoogleMap(
    class MapImport extends Component {

        componentWillMount() {
            this.props.stationslist();

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this._errorPosition.bind(this));
            }
        }

        showPosition(position) {
            this.props.usercoords(position);
        }

        _errorPosition(error) {
            this.props.coordsfromip();
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
                    <Marker position={props.userLocation.lat && props.userLocation}
                            title="Votre position"
                            options={{icon: userIcon}}>
                        <InfoWindow>
                            <div>
                                Vous êtes ici
                            </div>
                        </InfoWindow>
                    </Marker>
            </GoogleMap>
        }
    }
));

export default MapImport;