let modal = document.getElementById("myModal");
let modalContent = document.getElementById("modalContent");

document.querySelector('#check').addEventListener('click', () => {
    const strength = getPasswordStrength(document.querySelector('#pass').value)
    modal.style.display = "block";
})
function getPasswordStrength(password) {
    let strength = 0;
    let length = password.length;

    if (length >= 14) {
        strength += 1
    }
    let upperCaseCharacterCount = password.replace(/[^A-Z]/g, "").length;
    if (upperCaseCharacterCount > 3) {
        strength += 1;
    }
    let numbercaseCount = password.replace(/[^0-9]/g, "").length;
    if (numbercaseCount > 3) {
        strength += 1;
    };
    let specialCharacterCount = password.replace(/[^!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/]/g, "").length;
    if (specialCharacterCount > 3) {
        strength += 1;
    };
    if (strength == 1 || strength == 0) {
        modalContent.innerHTML = `Your password is weak`;
    };
    if (strength == 2 || strength == 3) {
        modalContent.innerHTML = `Your password is ok`;
    };
    if (strength == 4) {
        modalContent.innerHTML = `Your password is strong`;
    };
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}