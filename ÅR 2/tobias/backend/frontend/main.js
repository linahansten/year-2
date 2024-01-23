const apiURL = "http://localhost:3000"
async function getUsers() {
    const response = await fetch(apiURL + "/user/all")
    const data = await response.json()

    document.querySelector("#users").innerHTML = data.map(user => {
        `
        <div>
        <label for="id">
        ID
        <input value="${user.id}" type="text" id="id" name="id">
        </label>

        <label for="name">
        NAME
        <input value="${user.name}" type="text" id="name" name="name">
        </label>
        
        <label for="username">
        USERNAME
        <input value="${user.username}" type="text" id="username" name="username">
        </label>

        <label for="password">
        PASSWORD
        <input value="${user.password}" type="text" id="password" name="password">
        </label>
        </div>
        `
    }).join("")
}

getUsers()