import { Requestable } from './Requestable';

export class Stations extends Requestable {
    constructor() {
        super();
        this.baseURL = 'https://api.jcdecaux.com';
    }

    getStationsList() {
        return this.request('GET', '/vls/v1/stations?apiKey=b1c10641b843c7ca9181fff039f049c3056ba485');
    }

    getContracts() {
        return this.request('GET', '/vls/v1/contracts?apiKey=b1c10641b843c7ca9181fff039f049c3056ba485');
    }

    getCoordsFromAddress(address) {
        this.baseURL = 'https://maps.google.com';
        return this.request('GET', 'maps/api/geocode/json?address=' + address + '&key=AIzaSyC4sTbwtWwheQxstoLqVEVHuDikl-80_Cg')
    }
}

export default Stations;