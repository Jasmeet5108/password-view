function togglePasswordVisibility() {
    let img = document.getElementById("image");
    let passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        img.src = "svg/view-off.svg"
    }
    else {
        passwordInput.type = "password";
        img.src = "svg/view.svg"
    }
}