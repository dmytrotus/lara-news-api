import axios from "axios";
import { setBearerToken, getBearerToken, getTokenExpires } from "../lib/auth";
import type { UserLoginData, UserRegisterData } from "../lib/definitions";

const backendHost = import.meta.env.VITE_BACKEND_HOST;

export const login = async (userData: UserLoginData) => {
    const res = await axios.post(backendHost + 'api/login', userData );
    if(res.status === 200) {
        setBearerToken(res.data.token, res.data.token_expires);
    }
    return res;
}

export const register = async (userData: UserRegisterData) => {
    const res = await axios.post(backendHost + 'api/register', userData );
    if(res.status === 200) {
        setBearerToken(res.data.token, res.data.token_expires);
    }
    return res;
}
  
const refreshAccessToken = async () => {
    const currentDateUnix = Math.floor(Date.now() / 1000);
    const tokenExpiresUnix = getTokenExpires();
    if(currentDateUnix <= tokenExpiresUnix) {
        return;
    }
    const token = getBearerToken();
    const res = await axios.post(backendHost + `api/refresh-token`, {}, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    })
    setBearerToken(res.data.token, res.data.token_expires);
    return res.data.token;
}

axios.interceptors.request.use(async function (config) {
    if (config.url?.includes('refresh-token') 
        || config.url?.includes('register') 
        || config.url?.includes('login')
    ) {
        return config;
    }

    const accessToken = await refreshAccessToken();
    if(accessToken){
        config.headers.Authorization = "Bearer " + accessToken;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
