import axios from "axios";

export const getData = () => {
  return axios.get("http://127.0.0.1:5000/getData?type=상의");
};
