export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.auth_token) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    return { "x-access-token": user.auth_token };
  } else {
    return {};
  }
}
