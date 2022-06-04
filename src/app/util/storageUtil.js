/**
 * Utility Class To Maintain Local and Session Storage
 * @author Peshal Katuwal <21500571@student.uwl.ac.uk>
 */

export function get(type, key) {
  if (type === "local") {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem(key);
    }
    return "";
  } else {
    if (typeof sessionStorage !== "undefined") {
      return sessionStorage.getItem(key);
    }
    return "";
  }
}

export function set(type, key, value) {
  if (type === "local") {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, value);
    }
  } else {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(key, value);
    }
  }
}

export function clear(type) {
  if (type === "local") {
    if (typeof localStorage !== "undefined") {
      localStorage.clear();
    }
  } else {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.clear();
    }
  }
}

export function remove(type, key) {
  if (type === "local") {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
    }
  } else {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.removeItem(key);
    }
  }
}
