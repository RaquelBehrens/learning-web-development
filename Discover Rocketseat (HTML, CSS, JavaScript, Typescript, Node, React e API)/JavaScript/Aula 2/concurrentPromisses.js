import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users/RaquelBehrens"),
  axios.get("https://api.github.com/users/RaquelBehrens/repos")
])
  .then((responses) => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
  })
  .catch((err) => console.log(err.message));
