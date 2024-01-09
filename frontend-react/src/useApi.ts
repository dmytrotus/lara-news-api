import axios from "axios";
import { setBearerToken, getBearerToken } from "./lib/globals";
import type { UserData } from "./lib/definitions";

export const getPosts = async () => {
    const token = getBearerToken();
    const res = await axios.get(`http://localhost:7717/api/posts`, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
      },
    })
    return res.data;
}

export const register = async (userData: UserData) => {
  const res = await axios.post('http://localhost:7717/api/register', userData );
  if(res.status === 201) {
    setBearerToken(res.data.token);
  }
  return res;
}