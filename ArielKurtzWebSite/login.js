function submitFun() {

    var res = true;

    res = userNameLoginVal() && res;
    res = passwordLoginVal() && res;

    return res;
}


// ========================
// Username Validation
// ========================
function userNameLoginVal() {

    var userName = document.getElementById("username").value;
    var msgBox = document.getElementById("userNameMsg");
    var input = document.getElementById("username");

    msgBox.innerHTML = "";
    input.classList.remove("invalid");

    if (userName.length == 0) {
        msgBox.innerHTML = "יש להזין שם משתמש";
        input.classList.add("invalid");
        return false;
    }

    if (userName.length < 2) {
        msgBox.innerHTML = "שם המשתמש חייב להכיל לפחות 2 תווים";
        input.classList.add("invalid");
        return false;
    }

    if (!((userName[0] >= "a" && userName[0] <= "z") ||
        (userName[0] >= "A" && userName[0] <= "Z"))) {

        msgBox.innerHTML = "חייב להתחיל באות באנגלית";
        input.classList.add("invalid");
        return false;
    }

    if (userName.indexOf(" ") != -1) {
        msgBox.innerHTML = "אסור רווחים";
        input.classList.add("invalid");
        return false;
    }

    if (/[\u0590-\u05FF]/.test(userName)) {
        msgBox.innerHTML = "אסור אותיות בעברית";
        input.classList.add("invalid");
        return false;
    }

    return true;
}


// ========================
// Password Validation
// ========================
function passwordLoginVal() {

    var password = document.getElementById("password").value;
    var msgBox = document.getElementById("passwordMsg");
    var input = document.getElementById("password");

    msgBox.innerHTML = "";
    input.classList.remove("invalid");

    if (password.length == 0) {
        msgBox.innerHTML = "יש להזין סיסמה";
        input.classList.add("invalid");
        return false;
    }

    if (password.length < 6 || password.length > 12) {
        msgBox.innerHTML = "הסיסמה חייבת להכיל בין 6 ל-12 תווים";
        input.classList.add("invalid");
        return false;
    }

    if (password.indexOf(" ") != -1) {
        msgBox.innerHTML = "אסור רווחים בסיסמה";
        input.classList.add("invalid");
        return false;
    }

    if (/[\u0590-\u05FF]/.test(password)) {
        msgBox.innerHTML = "אסור אותיות בעברית";
        input.classList.add("invalid");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        msgBox.innerHTML = "חייב לפחות אות גדולה אחת";
        input.classList.add("invalid");
        return false;
    }

    if (!/[0-9]/.test(password)) {
        msgBox.innerHTML = "חייב לפחות ספרה אחת";
        input.classList.add("invalid");
        return false;
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        msgBox.innerHTML = "חייב לפחות תו מיוחד אחד";
        input.classList.add("invalid");
        return false;
    }

    for (var i = 0; i < password.length - 2; i++) {
        if (password[i] == password[i + 1] &&
            password[i] == password[i + 2]) {

            msgBox.innerHTML = "אסור 3 תווים זהים ברצף";
            input.classList.add("invalid");
            return false;
        }
    }

    return true;
}


// ========================
// Clear
// ========================
function clearLoginErrors() {

    document.getElementById("userNameMsg").innerHTML = "";
    document.getElementById("passwordMsg").innerHTML = "";

    document.getElementById("username").classList.remove("invalid");
    document.getElementById("password").classList.remove("invalid");
}