const signInButton = document.getElementById("signin")
const form = document.querySelector("form")

signInButton.addEventListener("click", function(event){
    event.preventDefault()
    checkIfMatch(form["email"].value, form["password"].value)
})

function checkIfMatch(email,password){
    if(email == userCred.email && password == userCred.password){
        document.cookie = "auth=true"
        window.location.href = "/dashboard.html"
    }else{
        alert("login failed")
    }
}

function checkIfUserIsLoggedIn(){
    if(document.cookie == "auth=true"){
        window.location.href = "/dashboard.html"
    }else{
        return
    }
}
checkIfUserIsLoggedIn()

let userCred = {
    name: "cat",
    email: "cat@gmail.com",
    password: "cat",
}