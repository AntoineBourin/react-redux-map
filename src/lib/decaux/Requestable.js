import axios from 'axios/index';

export class Requestable {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.client = axios.create({
            baseURL,
            timeout: 10000,
            //headers: { 'content-type': 'application/json' },
        })
    }

    request(method, url) {
        const doRequest = () => this.client.request({
            baseURL: this.baseURL,
            url,
            method,
        });

        return doRequest();
    }
}

export default Requestable;