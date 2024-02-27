import { httpClient } from "../http/httpClient.js";

function add(data) {
  return httpClient.post("advertisement/add", data);
}

export const userService = { add };
