import * as httpService from "./httpService";
import APICONSTANTS from "../util/apiConstant";

export function fetchAllMovies() {
  return httpService
    .get(`${APICONSTANTS.MOVIE}/getAll`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function saveMovie(data) {
  return httpService
    .post(APICONSTANTS.MOVIE, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function updateMovie(data) {
  return httpService
    .put(APICONSTANTS.MOVIE, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function deleteMovie(movieId) {
  return httpService
    .destroy(APICONSTANTS, movieId)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
