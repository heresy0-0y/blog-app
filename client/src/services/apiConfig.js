import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://blog-app-full-stack.herokuapp.com/api",
  development: "https://blog-app-full-stack.herokuapp.com/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
