import axios from "axios";
import appConfig from "../../config/appConfig";
import * as tokenService from "./tokenService";

const API_BASE_URL = appConfig.apiBaseUrl;

const setHeader = (config) => {
  return axios(
    tokenService.assignToken(
      Object.assign(config, {
        headers: {
          ...config.headers,
          requestsource: appConfig.apiRequestSource,
        },
      })
    )
  );
};

export function get(resourceName, params = {}, headers = {}) {
  let config = {
    method: "get",
    url: `${API_BASE_URL}/${resourceName}`,
    params: params,
    headers,
  };
  return setHeader(config);
}

export function post(resourceName, data) {
  let config = {
    method: "post",
    url: `${API_BASE_URL}/${resourceName}`,
    data: data,
  };
  return setHeader(config);
}

export function put(resourceName, data) {
  let config = {
    method: "put",
    url: `${API_BASE_URL}/${resourceName}`,
    data: data,
  };
  return setHeader(config);
}

export function destroy(resourceName, id) {
  let config = {
    method: "delete",
    url: `${API_BASE_URL}/${resourceName}/${id}`,
  };
  return setHeader(config);
}
