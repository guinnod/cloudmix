import { axios } from "@/lib/config/axios";
import { LoginCredentials, RegisterCredentials } from "./types";

export const login = (data: LoginCredentials) => {
    return axios.post("api/login", data);
};

export const register = (data: RegisterCredentials) => {
    return axios.post("api/signup", data);
};

export const verify = () => {
    return new Promise<object>((resolve, reject) => {
        setTimeout(() => {
            return resolve({ data: 5 });
        }, 500);
    });
};
