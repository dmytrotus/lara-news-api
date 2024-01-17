import axios from "axios";
import { getBearerToken } from "../lib/auth";

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
