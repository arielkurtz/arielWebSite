// =================== חיבור בדיקות בזמן הקלדה ===================
document.addEventListener("DOMContentLoaded", function () {
    attachLiveValidation();
});

function attachLiveValidation() {

    wire("username", userNameVal);
    wire("psw", passwordVal);
    wire("pswRepeat", confirmPassVal);
    wire("firstName", firstNameVal);
    wire("lastName", lastNameVal);
    wire("dob", dobVal, true);
    wire("phone", phoneVal);
    wire("email", emailVal);
}

function wire(id, fn, addChange) {
    var el = document.getElementById(id);
    if (!el) return;

    el.addEventListener("input", fn);
    el.addEventListener("keyup", fn);
    el.addEventListener("blur", fn);

    if (addChange) el.addEventListener("change", fn);
}


// =================== בדיקה בעת שליחה ===================
function validateForm() {

    var res = true;

    res = userNameVal() && res;
    res = passwordVal() && res;
    res = confirmPassVal() && res;
    res = firstNameVal() && res;
    res = lastNameVal() && res;
    res = dobVal() && res;
    res = phoneVal() && res;
    res = emailVal() && res;

    return res;
}


// =================== בדיקות שדות ===================

// שם משתמש
function userNameVal() {

    var userName = document.getElementById("username").value.trim();

    if (userName.length == 0) {
        return setErr("username", "err-username", "יש להזין שם משתמש");
    }
    if (userName.length < 2) {
        return setErr("username", "err-username", "שם המשתמש חייב להכיל לפחות 2 תווים");
    }
    if (!isLetter(userName[0])) {
        return setErr("username", "err-username", "שם המשתמש חייב להתחיל באות באנגלית");
    }
    if (/\s/.test(userName)) {
        return setErr("username", "err-username", "שם המשתמש לא יכול להכיל רווחים");
    }
    if (/[\u0590-\u05FF]/.test(userName)) {
        return setErr("username", "err-username", "שם המשתמש לא יכול להכיל אותיות בעברית");
    }

    return clearErr("username", "err-username");
}


// סיסמה
function passwordVal() {

    var pass = document.getElementById("psw").value;

    if (pass.length == 0) {
        return setErr("psw", "err-psw", "יש להזין סיסמה");
    }
    if (pass.length < 6 || pass.length > 12) {
        return setErr("psw", "err-psw", "הסיסמה חייבת להכיל בין 6 ל-12 תווים");
    }
    if (/\s/.test(pass)) {
        return setErr("psw", "err-psw", "הסיסמה לא יכולה להכיל רווחים");
    }
    if (!/[A-Z]/.test(pass)) {
        return setErr("psw", "err-psw", "הסיסמה חייבת להכיל לפחות אות גדולה אחת");
    }
    if (!/\d/.test(pass)) {
        return setErr("psw", "err-psw", "הסיסמה חייבת להכיל לפחות ספרה אחת");
    }
    if (!/[^A-Za-z0-9]/.test(pass)) {
        return setErr("psw", "err-psw", "הסיסמה חייבת להכיל לפחות תו מיוחד אחד");
    }
    if (!noTriple(pass)) {
        return setErr("psw", "err-psw", "אסור שיהיו 3 תווים זהים ברצף");
    }

    return clearErr("psw", "err-psw");
}


// אימות סיסמה
function confirmPassVal() {

    var pass = document.getElementById("psw").value;
    var confirm = document.getElementById("pswRepeat").value;

    if (confirm.length == 0) {
        return setErr("pswRepeat", "err-psw-repeat", "יש לאשר את הסיסמה");
    }
    if (pass != confirm) {
        return setErr("pswRepeat", "err-psw-repeat", "הסיסמאות אינן תואמות");
    }

    return clearErr("pswRepeat", "err-psw-repeat");
}


// שם פרטי
function firstNameVal() {

    var name = trimSpaces(document.getElementById("firstName").value);

    if (name.length == 0) {
        return setErr("firstName", "err-firstName", "יש להזין שם פרטי");
    }
    if (name.length < 2) {
        return setErr("firstName", "err-firstName", "שם פרטי חייב להכיל לפחות 2 תווים");
    }
    if (!onlyHebrewOrOnlyEnglishWithSpaces(name)) {
        return setErr("firstName", "err-firstName", "השם חייב להיות רק בעברית או רק באנגלית (ללא ערבוב)");
    }

    return clearErr("firstName", "err-firstName");
}


// שם משפחה
function lastNameVal() {

    var name = trimSpaces(document.getElementById("lastName").value);

    if (name.length == 0) {
        return setErr("lastName", "err-lastName", "יש להזין שם משפחה");
    }
    if (name.length < 2) {
        return setErr("lastName", "err-lastName", "שם משפחה חייב להכיל לפחות 2 תווים");
    }
    if (!onlyHebrewOrOnlyEnglishWithSpaces(name)) {
        return setErr("lastName", "err-lastName", "השם חייב להיות רק בעברית או רק באנגלית (ללא ערבוב)");
    }

    return clearErr("lastName", "err-lastName");
}


// תאריך לידה
function dobVal() {

    var dob = document.getElementById("dob").value;

    if (dob.length == 0) {
        return setErr("dob", "err-dob", "יש להזין תאריך לידה");
    }

    return clearErr("dob", "err-dob");
}


// טלפון
function phoneVal() {

    var phone = document.getElementById("phone").value.trim();

    if (phone.length == 0) {
        return setErr("phone", "err-phone", "יש להזין מספר טלפון");
    }

    if (phone.indexOf("-") == -1) {
        return setErr("phone", "err-phone", "המספר חייב לכלול מקף (לדוגמה: 03-1234567)");
    }

    var reg = /^(0[2-4689]|0[1-46-9]|05\d|07\d)-\d{7}$/;

    if (!reg.test(phone)) {
        return setErr("phone", "err-phone", "מספר טלפון לא תקין");
    }

    return clearErr("phone", "err-phone");
}


// אימייל
function emailVal() {

    var email = document.getElementById("email").value.trim();

    if (email.length == 0) {
        return setErr("email", "err-email", "יש להזין כתובת דוא\"ל");
    }

    var reg = /^[A-Za-z][A-Za-z0-9_\-\.]*@[A-Za-z][A-Za-z0-9_\-\.]*\.\d{2,3}$/;

    if (!reg.test(email)) {
        return setErr("email", "err-email", "כתובת דוא\"ל לא תקינה");
    }

    return clearErr("email", "err-email");
}


// =================== פונקציות עזר ===================
function setErr(inputId, errId, msg) {
    var err = document.getElementById(errId);
    var inp = document.getElementById(inputId);

    if (err) err.innerHTML = msg;
    if (inp) inp.classList.add("invalid");

    return false;
}

function clearErr(inputId, errId) {
    var err = document.getElementById(errId);
    var inp = document.getElementById(inputId);

    if (err) err.innerHTML = "";
    if (inp) inp.classList.remove("invalid");

    return true;
}

function isLetter(ch) {
    return ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"));
}

function trimSpaces(str) {
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.replace(/\s{2,}/g, " ");
    return str;
}

function onlyHebrewOrOnlyEnglishWithSpaces(str) {
    var heb = /^[\u0590-\u05FF ]+$/;
    var eng = /^[A-Za-z ]+$/;
    return heb.test(str) || eng.test(str);
}

function noTriple(str) {
    for (var i = 0; i < str.length - 2; i++) {
        if (str[i] == str[i + 1] && str[i] == str[i + 2]) {
            return false;
        }
    }
    return true;
}