import axios from "axios";

const backendHost = import.meta.env.VITE_BACKEND_HOST;

export const getPosts = async () => {
    const res = await axios.get(backendHost + `api/posts`)
    return res.data;
}
