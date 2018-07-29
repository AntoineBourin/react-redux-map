import { connect } from 'react-redux';
import Googlemap from '../Googlemap';

const mapStateToProps = (state) => ({
    stations: state.stations,
    isMarker: state.stations.isMarker,
    cityPosition: state.stations.contractFilter.position,
    userLocation: state.userData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Googlemap);