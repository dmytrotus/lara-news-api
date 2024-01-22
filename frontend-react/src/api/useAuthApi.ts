import axios from "axios";
import type { UserLoginData, UserRegisterData } from "../lib/definitions";

const backendHost = import.meta.env.VITE_BACKEND_HOST;
axios.defaults.withCredentials = true;

export const login = async (userData: UserLoginData) => {
    const res = await axios.post(backendHost + 'api/login', userData );
    return res.data;
}

export const register = async (userData: UserRegisterData) => {
    const res = await axios.post(backendHost + 'api/register', userData);
    return res.data;
}

export const getUser = async () => {
    const res = await axios.get(backendHost + 'api/user');
    return res.data;
}

export const logout = async () => {
    const res = await axios.post(backendHost + 'api/logout');
    return res.data;
}
