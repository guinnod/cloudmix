import { axios, axiosAuthorized } from "@/lib/config/axios";
import { LoginCredentials, RegisterCredentials } from "./types";

export const login = (data: LoginCredentials) => {
    return axios.post("api/login/", data);
};

export const register = (data: RegisterCredentials) => {
    return axios.post("api/register/", data);
};

export const getUser = () => {
    return axiosAuthorized.get("api/user/");
};
