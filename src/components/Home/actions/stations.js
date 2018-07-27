import { makeActionCreator } from '../../../lib/redux/helper';
import { api } from '../../../lib/map-client';

export const setStations = makeActionCreator('STATIONS_UPDATE', 'data');
export const setMarker = makeActionCreator('MARKER_VISIBLE', 'data');
export const setContracts = makeActionCreator('CONTRACTS_UPDATE', 'data');
export const setFilteredContract = makeActionCreator('FILTER_CONTRACT', 'index');

export const stationslist = () => (dispatch) => {
    return api.stations().getStationsList().then( res => {
        const data = res.data;
        dispatch(setStations(data));
    });
};

export const markerdetails = (enable) => (dispatch) => {
    dispatch(setMarker(enable));
    console.log(enable);
};

export const contractslist = () => (dispatch) => {
    return api.stations().getContracts().then(res => {

        const data = res.data;
        data.sort(function(a, b){
            const x = a.name.toLowerCase();
            const y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        // .filter((item) => { return this.props.stations[item].contract_name === 'Amiens' })
        dispatch(setContracts(data));
    });
};

export const filtercontracts = (index) => (dispatch, getState) => {
    const contracts = getState().stations.contracts;

    if (index in Object.keys(contracts)) {
        dispatch(setFilteredContract(index));
    }
};