import * as httpService from "./httpService";
import APICONSTANTS from "../util/apiConstant";

export function fetchAllUsers() {
  return httpService
    .get(`${APICONSTANTS.USER}/getAll`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

// export function fetchAllSeatsByTheatreAndMovie(data) {
//   return httpService
//     .post(`${APICONSTANTS.SEAT}/getSeatsByMovie`, data)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// }

export function saveUser(data) {
  console.log(data);
  return httpService
    .post(`${APICONSTANTS.USER}/save`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

// export function deleteMovie(movieId) {
//   return httpService
//     .destroy(APICONSTANTS, movieId)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       throw error;
//     });
//}
