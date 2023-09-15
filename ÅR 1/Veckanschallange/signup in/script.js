const signOut = document.getElementById("signout")

signOut.addEventListener("click",function(){
    document.cookie = "auth=false"
    window.location.href = "/signup.html"
})