const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => apiResult.textContent = JSON.stringify(response.data))
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name,
        userCity.textContent = response.data.city,
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
    axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    axios.put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
    name: "Raquel Behrens",
    avatar: "https://picsum.photos/400/200",
    city: "Florianópolis"
}
//addUser(newUser)

const updatedUser = {
    name: "Fulano",
    avatar: "https://picsum.photos/400/200",
    city: "Cidade2"
}
//updateUser(updatedUser, 11)

getUser(2)
getUsers()
deleteUser(13)