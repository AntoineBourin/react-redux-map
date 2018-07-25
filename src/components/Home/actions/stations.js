import { makeActionCreator } from '../../../lib/redux/helper';
import { api } from '../../../lib/map-client';
import stations from '../reducers/stations';

export const setStations = makeActionCreator('STATIONS_UPDATE', 'data');

export const stationslist = () => (dispatch, getState) => {
    return api.stations().getStationsList().then(res => {
        const data = res.data;
        dispatch(setStations(data));
    });
};