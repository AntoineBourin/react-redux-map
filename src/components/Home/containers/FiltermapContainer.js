import { connect } from 'react-redux';
import Filtermap from '../Filtermap';
import { contractslist, filtercontracts } from "../actions/stations";

const mapStateToProps = (state) => ({
    contracts: state.stations.contracts,
    contractFilter: state.stations.contractFilter,
});

const mapDispatchToProps = (dispatch) => ({
    contractslist: () => dispatch(contractslist()),
    filtercontracts: (index) => dispatch(filtercontracts(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filtermap);