import { connect } from 'react-redux';
import Filtermap from '../Filtermap';
import {contractslist, filtercontracts, resetFilterContract} from "../actions/stations";

const mapStateToProps = (state) => ({
    contracts: state.stations.contracts,
    contractFilter: state.stations.contractFilter,
    stationNumber: state.stations.contractFilter.nbStations > 0 ? state.stations.contractFilter.nbStations : undefined,
});

const mapDispatchToProps = (dispatch) => ({
    contractslist: () => dispatch(contractslist()),
    filtercontracts: (index) => dispatch(filtercontracts(index)),
    resetFilterContract: () => dispatch(resetFilterContract()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filtermap);