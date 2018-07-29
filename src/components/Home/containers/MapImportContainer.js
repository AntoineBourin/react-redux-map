import { connect } from 'react-redux';
import MapImport from '../MapImport';
import {markerdetails, stationslist} from '../actions/stations';
import {usercoords, coordsfromip} from "../actions/userdata";

const mapStateToProps = (state) => {
    return {
        stations: state.stations['stations'],
        isMarker: state.stations.isMarker,
        contractFilter: state.stations.contractFilter,
        userLocation: state.userData,
    }
};

const mapDispatchToProps = (dispatch) => ({
    stationslist: () => dispatch(stationslist()),
    markerstate: (enable) => dispatch(markerdetails(enable)),
    usercoords: (position) => dispatch(usercoords(position)),
    coordsfromip: () => dispatch(coordsfromip()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapImport);