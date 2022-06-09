import * as httpService from "./httpService";
import APICONSTANTS from "../util/apiConstant";

export function fetchAllSeats() {
  return httpService
    .get(`${APICONSTANTS.MOVIE}/getAll`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function fetchAllSeatsByTheatreAndMovie(data) {
  return httpService
    .post(`${APICONSTANTS.SEAT}/getSeatsByMovie`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function saveSeats(data) {
  return httpService
    .post(`${APICONSTANTS.SEAT}/save`, data)
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
