import axios from "axios";
import { setBearerToken, getBearerToken } from "./lib/globals";
import type { UserLoginData, UserRegisterData } from "./lib/definitions";

const backendHost = import.meta.env.VITE_BACKEND_HOST;

export const getPosts = async () => {
    const token = getBearerToken();
    const res = await axios.get(backendHost + `api/posts`, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
      },
    })
    return res.data;
}

export const login = async (userData: UserLoginData) => {
  const res = await axios.post(backendHost + 'api/login', userData );
  if(res.status === 201) {
    setBearerToken(res.data.token);
  }
  return res;
}

export const register = async (userData: UserRegisterData) => {
  const res = await axios.post(backendHost + 'api/register', userData );
  if(res.status === 201) {
    setBearerToken(res.data.token);
  }
  return res;
}