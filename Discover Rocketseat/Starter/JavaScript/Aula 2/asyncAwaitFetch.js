// fetch("https://api.github.com/users/RaquelBehrens")
//   .then((response) => response.json())
//   .then((data) => fetch(data.repos_url))
//   .then((res) => res.json())
//   .then((d) => console.log(d))
//   .catch(err => console.log(err))

const url = "https://api.github.com/users/RaquelBehrens";
async function start() {
  try {
    const response = await fetch(url);
    const user = await response.json();
    const reposResponse = await fetch(user.repos_url);
    const repos = await reposResponse.json();
    console.log(repos);
  } catch (e) {
    console.log(e);
  }
}

// async function start() {
//   const response = await fetch("https://api.github.com/users/RaquelBehrens");
//   const user = await response.json();
//   const reposResponse = await fetch(user.repos_url);
//   const repos = await reposResponse.json();
//   console.log(repos);
// }
//
// start().catch(e => console.log(e))
