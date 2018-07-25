import { connect } from 'react-redux';
import { stationslist } from '../actions/stations';
import Googlemap from '../Googlemap';

const mapStateToProps = (state) => ({
    stations: state.stations,
});

const mapDispatchToProps = (dispatch) => ({
    stationslist: () => dispatch(stationslist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Googlemap);