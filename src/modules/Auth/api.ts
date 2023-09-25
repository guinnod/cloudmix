import { axios } from "@/lib/config/axios";
import { LoginCredentials, RegisterCredentials } from "./types";

export const login = (data: LoginCredentials) => {
    return axios.post("", data);
};

export const register = (data: RegisterCredentials) => {
    return axios.post("", data);
};
