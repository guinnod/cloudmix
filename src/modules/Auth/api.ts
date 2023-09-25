import { axios } from "@/lib/config/axios";
import { LoginCredentials } from "./types";

export const login = (data: LoginCredentials) => {
    return axios.post("", data);
};
