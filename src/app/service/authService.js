import * as httpService from "./httpService";
import APICONSTANTS from "../util/apiConstant";

export function login(loginInfo) {
  return httpService
    .post(`${APICONSTANTS.AUTH}/login`, loginInfo)
    .then((response) => {
      return response.data;
    });
}
