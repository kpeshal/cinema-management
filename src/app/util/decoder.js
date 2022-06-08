import jwt_decode from "jwt-decode";
export function decodeToken(token) {
  if (token) {
    let user = jwt_decode(token);
    return user;
  } else {
    return null;
  }
}
