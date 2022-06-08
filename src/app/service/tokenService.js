import * as storageUtil from "../util/storageUtil";

export function getAccessToken() {
  return storageUtil.get("local", "loggedInUser");
}

const getHeader = (headers) => {
  if (!headers) headers = {};
  return headers;
};

export function assignToken(config) {
  let accessToken = getAccessToken();
  let headers = config.headers ? config.headers : {};
  if (accessToken) {
    headers = getHeader(headers);
    headers["Authorization"] = accessToken;
  }
  if (headers) config = Object.assign(config, { headers: headers });
  return config;
}
