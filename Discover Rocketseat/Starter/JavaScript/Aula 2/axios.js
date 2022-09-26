import axios from "axios";

axios.get("https://api.github.com/users/RaquelBehrens").then((res) => {
  console.log(res.data);
});

axios
  .get("https://api.github.com/users/RaquelBehrens")
  .then((response) => {return axios.get(response.data.repos_url);})
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));
