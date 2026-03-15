function submitFun() {
    var res = true;

    res = userNameLoginVal() && res;
    res = passwordLoginVal() && res;

    return res;
}

function userNameLoginVal() {
    var userEl = document.getElementById("username");
    var msgBox = document.getElementById("err-username");

    msgBox.innerHTML = "";
    userEl.classList.remove("invalid");

    var userName = userEl.value;

    if (userName.length == 0) {
        msgBox.innerHTML = "יש להזין שם משתמש";
        userEl.classList.add("invalid");
        return false;
    }

    if (userName.length < 2) {
        msgBox.innerHTML = "שם המשתמש חייב להכיל לפחות 2 תווים";
        userEl.classList.add("invalid");
        return false;
    }

    if (!isLetter(userName[0])) {
        msgBox.innerHTML = "שם המשתמש חייב להתחיל באות באנגלית";
        userEl.classList.add("invalid");
        return false;
    }

    if (userName.indexOf(" ") != -1) {
        msgBox.innerHTML = "אסור לכלול רווחים בשם המשתמש";
        userEl.classList.add("invalid");
        return false;
    }

    if (/[\u0590-\u05FF]/.test(userName)) {
        msgBox.innerHTML = "אסור לכלול אותיות בעברית בשם המשתמש";
        userEl.classList.add("invalid");
        return false;
    }

    if (!/^[\x21-\x7E]+$/.test(userName)) {
        msgBox.innerHTML = "מותר רק אותיות באנגלית, ספרות ותווים מיוחדים";
        userEl.classList.add("invalid");
        return false;
    }

    return true;
}

function passwordLoginVal() {
    var passEl = document.getElementById("password");
    var msgBox = document.getElementById("err-password");

    msgBox.innerHTML = "";
    passEl.classList.remove("invalid");

    var password = passEl.value;

    if (password.length == 0) {
        msgBox.innerHTML = "יש להזין סיסמה";
        passEl.classList.add("invalid");
        return false;
    }

    if (password.length < 6 || password.length > 12) {
        msgBox.innerHTML = "הסיסמה חייבת להכיל בין 6 ל-12 תווים";
        passEl.classList.add("invalid");
        return false;
    }

    if (password.indexOf(" ") != -1) {
        msgBox.innerHTML = "אסור לכלול רווחים בסיסמה";
        passEl.classList.add("invalid");
        return false;
    }

    if (/[\u0590-\u05FF]/.test(password)) {
        msgBox.innerHTML = "אסור לכלול אותיות בעברית בסיסמה";
        passEl.classList.add("invalid");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        msgBox.innerHTML = "חייבת להכיל לפחות אות גדולה אחת";
        passEl.classList.add("invalid");
        return false;
    }

    if (!/[0-9]/.test(password)) {
        msgBox.innerHTML = "חייבת להכיל לפחות ספרה אחת";
        passEl.classList.add("invalid");
        return false;
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        msgBox.innerHTML = "חייבת להכיל לפחות תו מיוחד אחד";
        passEl.classList.add("invalid");
        return false;
    }

    for (var i = 0; i < password.length - 2; i++) {
        if (password[i] == password[i + 1] && password[i] == password[i + 2]) {
            msgBox.innerHTML = "אסור שיהיו 3 תווים זהים ברצף";
            passEl.classList.add("invalid");
            return false;
        }
    }

    return true;
}

function isLetter(ch) {
    return ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"));
}

function clearLoginErrors() {
    document.getElementById("err-username").innerHTML = "";
    document.getElementById("err-password").innerHTML = "";
    document.getElementById("username").classList.remove("invalid");
    document.getElementById("password").classList.remove("invalid");
}