import {
    createAxiosWithBaseUrl,
    applyJwtAuth,
    configureRefreshRetry,
} from "./helper";

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

const axios = createAxiosWithBaseUrl(baseUrl);
const axiosAuthorized = createAxiosWithBaseUrl(baseUrl);

applyJwtAuth(axiosAuthorized);
configureRefreshRetry(axiosAuthorized);

export { axios, axiosAuthorized };
