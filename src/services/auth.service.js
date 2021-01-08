import axios from "axios";

const API_URL = "http://localhost:5000/auth/";

const register = (email, password,name) => {
  return axios.post(API_URL + "register", {
    'email':email,
    'password':password,
    'name':name

  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password
    })
    .then((response) => {
      if (response.data.auth_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
