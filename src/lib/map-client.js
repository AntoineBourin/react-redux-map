import { Decaux } from "./request/Decaux";
import UserIP from "./request/UserIP";

export const api = new Decaux();
export const userIP = new UserIP();

export default api;