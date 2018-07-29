import { Stations } from './Stations';
import { UserIP } from './UserIP';

export class Decaux {

    stations() {
        return new Stations();
    }

    userInfos() {
        return new UserIP();
    }
}
