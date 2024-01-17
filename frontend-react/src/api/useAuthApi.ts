import axios from "axios";
import { setBearerToken, getBearerToken } from "../lib/auth";
import type { UserLoginData, UserRegisterData } from "../lib/definitions";

const backendHost = import.meta.env.VITE_BACKEND_HOST;

export const login = async (userData: UserLoginData) => {
    const res = await axios.post(backendHost + 'api/login', userData );
    if(res.status === 200) {
        setBearerToken(res.data.token);
    }
    return res;
}

export const register = async (userData: UserRegisterData) => {
    const res = await axios.post(backendHost + 'api/register', userData );
    if(res.status === 200) {
        setBearerToken(res.data.token);
    }
    return res;
}
  
const refreshAccessToken = async () => {
    const token = getBearerToken();
    const res = await axios.post(backendHost + `api/refresh-token`, {}, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    })
    return res.data.token;
}
  
axios.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const access_token = await refreshAccessToken();
        setBearerToken(access_token);
        originalRequest.headers.Authorization = "Bearer " + access_token;
        console.log(access_token)
        console.log('send new request')
        return axios.create(originalRequest);
    }
    return Promise.reject(error);
});