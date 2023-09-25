import { Jwt, jwtKeys } from "../types/jwt";

const setAccessToken = (accessToken: string) => {
    setJwtProperty("access", accessToken);
};

const setRefreshToken = (refreshToken: string) => {
    setJwtProperty("refresh", refreshToken);
};

const getAccessToken = (): string => {
    const accessToken = getJwt().access;
    return getItemOrNull(accessToken);
};

const getRefreshToken = (): string => {
    const refreshToken = getJwt().refresh;
    return getItemOrNull(refreshToken);
};

const saveJwt = (jwt: Jwt) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
};

const setJwtProperty = (propertyName: jwtKeys, propertyValue: string) => {
    const jwt = getJwt();
    jwt[propertyName] = propertyValue;
    saveJwt(jwt);
};

const getJwt = (): Jwt => {
    try {
        const jwt = JSON.parse(localStorage.getItem("jwt") || "");
        return jwt || {};
    } catch (error) {
        return { access: "", refresh: "" };
    }
};

const getItemOrNull = (item: any) => {
    return item || null;
};

const clearJwt = () => {
    localStorage.removeItem("jwt");
};

const jwt = {
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken,
    saveJwt,
    clearJwt,
};

export default jwt;
