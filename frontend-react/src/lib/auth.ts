import { setBearerToken } from "../lib/globals";

export const logout = () => {
    setBearerToken('')
    return null;
}