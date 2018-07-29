import { makeActionCreator } from '../../../lib/redux/helper';
import {userIP} from "../../../lib/map-client";

export const setUserCoords = makeActionCreator('SET_USER_COORDS', 'coords');

export const usercoords = (position) => (dispatch) => {
    const coords = position.coords;
    const location = {
        lat: coords.latitude,
        lng: coords.longitude,
    };
    dispatch(setUserCoords(location));
};

export const coordsfromip = () => (dispatch) => {
    return userIP.getUserIP().then(res => {
       const location = {
           lat: res.data.lat,
           lng: res.data.lon,
       };
        dispatch(setUserCoords(location));
    });
};