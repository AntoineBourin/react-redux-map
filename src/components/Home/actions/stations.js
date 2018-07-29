import { makeActionCreator } from '../../../lib/redux/helper';
import { api } from '../../../lib/map-client';

export const setStations = makeActionCreator('STATIONS_UPDATE', 'data');
export const setMarker = makeActionCreator('MARKER_VISIBLE', 'data');
export const setContracts = makeActionCreator('CONTRACTS_UPDATE', 'data');
export const setFilteredContract = makeActionCreator('FILTER_CONTRACT', 'index', 'nbStations');
export const resetFilterContract = makeActionCreator('CANCEL_CONTRACT_FILTER');
export const setCoordsForContract = makeActionCreator('CONTRACT_COORDS_UPDATED', 'data');

export const stationslist = () => (dispatch) => {
    return api.stations().getStationsList().then( res => {
        const data = res.data;
        dispatch(setStations(data));
    });
};

export const markerdetails = (enable) => (dispatch) => {
    dispatch(setMarker(enable));
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
        dispatch(setContracts(data));
    });
};

export const setCoordsForCity = (city) => (dispatch) => {
    return api.stations().getCoordsFromAddress(city)
        .then(res => {
            const response = res.data;

            if (response.status === 'OK') {
                dispatch(setCoordsForContract(response.results[0].geometry.location));
            } else {
                dispatch(resetFilterContract());
            }
        })
};

export const filtercontracts = (index) => (dispatch, getState) => {
    const contracts = getState().stations.contracts;

    if (index in Object.keys(contracts)) {
        const stationsList = getState().stations.stations;
        let nbStationsContract = 0;

        Object.keys(stationsList).map((station) => {
           if (stationsList[station].contract_name === contracts[index].name) {
               nbStationsContract++;
           }
        });

        dispatch(setFilteredContract(contracts[index].name, nbStationsContract));
        dispatch(setCoordsForCity(contracts[index].name));
    } else {
        dispatch(resetFilterContract());
    }
};