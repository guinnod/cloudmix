import jwt from "@/lib/utils/jwt";
import axios, { Axios, RawAxiosRequestConfig } from "axios";

export const createAxiosWithBaseUrl = (baseURL: string) => {
    const axiosApi = axios.create({
        baseURL: baseURL,
    });
    return axiosApi;
};

export const applyJwtAuth = (axiosApi: Axios) => {
    axiosApi.interceptors.request.use(
        (config) => {
            return setAuthHeader(config);
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

export const configureRefreshRetry = (axiosApi: Axios) => {
    axiosApi.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const originalRequest = error.config;
            if (isAxiosUnauthorized(error) && !originalRequest._retry) {
                originalRequest._retry = true;
                return await refreshJwt(axiosApi, originalRequest);
            }
            return Promise.reject(error);
        }
    );
};

const setAuthHeader = (config: any) => {
    const access = jwt.getAccessToken();
    if (access) {
        config.headers["Authorization"] = `Bearer ${access}`;
    }
    return config;
};

const isAxiosUnauthorized = (error: any) => {
    return error?.response?.status === 401;
};

const refreshJwt = async (
    axiosApi: any,
    originalRequest: RawAxiosRequestConfig
) => {
    try {
        const refreshResponse = await makeRefreshJwtRequest(axiosApi);
        const newAccessToken = refreshResponse.data.access;
        jwt.setAccessToken(newAccessToken);
        setAuthHeader(originalRequest);
        return axiosApi(originalRequest);
    } catch (refreshError) {
        return Promise.reject(refreshError);
    }
};

const makeRefreshJwtRequest = (axiosApi: any) => {
    const refreshJwtUrl = `/api/login/refresh/`;
    const options = {
        refresh: jwt.getRefreshToken(),
    };
    return axiosApi.post(refreshJwtUrl, options, { _retry: true });
};
