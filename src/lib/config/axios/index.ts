import {
    createAxiosWithBaseUrl,
    applyJwtAuth,
    configureRefreshRetry,
} from "./helper";

const axios = createAxiosWithBaseUrl("");
const axiosAuthorized = createAxiosWithBaseUrl("");

applyJwtAuth(axiosAuthorized);
configureRefreshRetry(axiosAuthorized);

export { axios, axiosAuthorized };
