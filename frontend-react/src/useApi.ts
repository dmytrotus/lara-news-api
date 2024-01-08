import axios from "axios";
import type { UserData } from "./lib/definitions";

export const getPosts = async () => {
    const token = '2|3tYeljWbYKclAhfDgpVpbdCaMNLI2ZkChkjQ15Pa6989129a';
    const res = await fetch(`http://localhost:7717/api/posts`, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
      },
    })
    return res.json()
}

export const register = async (userData: UserData) => {
  const res = await axios.post('http://localhost:7717/api/register', userData );
  return res;
}