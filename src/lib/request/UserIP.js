import { Requestable} from "./Requestable";

export class UserIP extends Requestable {
    constructor() {
        super();
        this.baseURL = 'http://ip-api.com';
    }

    getUserIP() {
        return this.request('GET', '/json');
    }
}

export default UserIP;