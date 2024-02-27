import { authClient } from "../http/authClient.js";

function register({ name, email, password }) {
  return authClient.post("/auth/register", { name, email, password });
}

function login({ email, password }) {
  return authClient.post("/auth/login", { email, password });
}

function logout() {
  return authClient.get("auth/logout");
}

function refresh() {
  return authClient.get("/auth/refresh");
}

function getAll() {
  return authClient.get("/advertisement");
}
export const authService = { register, login, logout, refresh, getAll };
