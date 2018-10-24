import { connect } from 'react-redux';
import Googlemap from '../Googlemap';

const mapStateToProps = (state) => ({
    stations: state.stations,
    isMarker: state.stations.isMarker,
    cityPosition: state.stations.contractFilter,
    userLocation: state.userData,
    globalMessage: state.common.globalMessage
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Googlemap);