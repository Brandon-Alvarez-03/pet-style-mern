// NOTE: This is a template, update for actual info

import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "www.deployedLink.com",
  development: "http://127.0.0.1:3000",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

console.log(api);

export default api;
