import { axios } from "@/lib/config/axios";
import { LoginCredentials, RegisterCredentials } from "./types";

export const login = (data: LoginCredentials) => {
    return axios.post("", data);
};

export const register = (data: RegisterCredentials) => {
    return axios.post("", data);
};

export const verify = () => {
    return new Promise<object>((resolve, reject) => {
        setTimeout(() => {
            return resolve({ data: 5 });
        }, 500);
    });
};
