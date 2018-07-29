import { makeActionCreator } from '../../../lib/redux/helper';
import {userIP} from "../../../lib/map-client";
import {setGlobalMessage} from "../../common/actions/common";

export const setUserCoords = makeActionCreator('SET_USER_COORDS', 'coords');

export const usercoords = (position) => (dispatch) => {
    const coords = position.coords;
    const message = 'Votre localisation a été récupérée avec succès.';
    const location = {
        lat: coords.latitude,
        lng: coords.longitude,
    };
    dispatch(setUserCoords(location));
    dispatch(setGlobalMessage(message, 'success'))
};

export const coordsfromip = () => (dispatch) => {
    return userIP.getUserIP().then(res => {
        const message = 'Votre localisation approximative a été récupérée depuis votre IP';
        const location = {
           lat: res.data.lat,
           lng: res.data.lon,
       };
        dispatch(setUserCoords(location));
        dispatch(setGlobalMessage(message, 'success'))
    });
};