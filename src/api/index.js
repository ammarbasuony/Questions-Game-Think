import axios from "axios";
import properties from "../properties";

const server = axios.create({
  baseURL: properties.api_base_url,
});

export default server;
