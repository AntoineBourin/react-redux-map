import { connect } from 'react-redux';
import MapImport from '../MapImport';
import {markerdetails, stationslist} from '../actions/stations';

const mapStateToProps = (state) => {
    return {
        stations: state.stations['stations'],
        isMarker: state.stations.isMarker,
        contractFilter: state.stations.contractFilter,
    }
};

const mapDispatchToProps = (dispatch) => ({
    stationslist: () => dispatch(stationslist()),
    markerstate: (enable) => dispatch(markerdetails(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapImport);