// JavaScript.js (external) - Full live validation for Sign Up

(function () {
    "use strict";

    function $(id) { return document.getElementById(id); }

    function hasHebrew(str) {
        return /[\u0590-\u05FF]/.test(str || "");
    }

    function ensureErr(inputId, errId) {
        var input = $(inputId);
        if (!input) return null;

        var err = $(errId);
        if (!err) {
            err = document.createElement("small");
            err.id = errId;
            err.className = "field-error";
            err.style.display = "block";
            err.style.color = "#d10000";
            err.style.fontSize = "12px";
            err.style.margin = "4px 0 10px";
            err.style.minHeight = "16px";
            input.insertAdjacentElement("afterend", err);
        }
        return err;
    }

    function setErr(inputId, errId, msg) {
        var err = ensureErr(inputId, errId);
        if (!err) return;
        err.textContent = msg || "";
    }

    // ========= 2.1 Username =========
    function validateUsername(v) {
        v = v || "";
        if (!v) return "חובה למלא שם משתמש";
        if (v.length < 2) return "מינימום 2 תווים";
        if (!/^[A-Za-z]/.test(v)) return "חייב להתחיל באות אנגלית (A-Z)";
        if (/\s/.test(v)) return "אסור לכלול רווחים";
        if (hasHebrew(v)) return "אסור אותיות בעברית";
        if (!/^[\x21-\x7E]+$/.test(v)) return "מותר רק אנגלית/מספרים/תווים מיוחדים (ASCII)";
        return "";
    }

    // ========= 2.2 Password =========
    function validatePassword(v) {
        v = v || "";
        if (!v) return "חובה למלא סיסמה";
        if (v.length < 6 || v.length > 12) return "אורך חייב להיות 6-12 תווים";
        if (/\s/.test(v)) return "אסור רווחים";
        if (hasHebrew(v)) return "אסור תווים בעברית";
        if (!/^[\x21-\x7E]+$/.test(v)) return "מותר רק אנגלית/מספרים/תווים מיוחדים (ASCII)";
        if (!/[A-Z]/.test(v)) return "חייב לפחות אות גדולה אחת (A-Z)";
        if (!/\d/.test(v)) return "חייב לפחות ספרה אחת (0-9)";
        if (!/[^A-Za-z0-9]/.test(v)) return "חייב לפחות תו מיוחד אחד (!@#$...)";
        if (/(.)\1\1/.test(v)) return "אסור 3 תווים זהים ברצף (למשל: aaa / 111)";
        return "";
    }

    // ========= 2.3 Repeat Password =========
    function validateRepeatPassword(psw, rep) {
        rep = rep || "";
        if (!rep) return "חובה לאמת סיסמה";
        if (rep !== psw) return "אימות סיסמה חייב להיות זהה לסיסמה";
        return "";
    }

    // ========= 2.4 / 2.5 First/Last Name =========
    // חובה; מינימום 2; עברית או אנגלית (ללא ערבוב); מותר רווח.
    function validateName(v) {
        var t = (v || "").trim();
        if (!t) return "חובה למלא";
        if (t.length < 2) return "מינימום 2 תווים";
        if (!/^[A-Za-z\u0590-\u05FF ]+$/.test(t)) return "מותר רק אותיות (עברית או אנגלית) ורווח";
        var hasH = /[\u0590-\u05FF]/.test(t);
        var hasE = /[A-Za-z]/.test(t);
        if (hasH && hasE) return "אסור לערבב עברית ואנגלית";
        return "";
    }

    // ========= 2.6 DOB =========
    function validateDob(v) {
        if (!v) return "חובה לבחור תאריך לידה";
        return "";
    }

    // ========= 2.8 Phone =========
    // חובה; 9-10 ספרות; חייב מקף; prefix-7digits
    // prefix: 2 ספרות 0X (X לא 5/7) או 3 ספרות 05x/07x
    function validatePhone(v) {
        var t = (v || "").trim();
        if (!t) return "חובה למלא טלפון";

        if ((t.match(/-/g) || []).length !== 1) return "חייב לכלול מקף אחד (-)";

        var m = t.match(/^(\d{2,3})-(\d{7})$/);
        if (!m) return "פורמט חייב להיות קידומת-7ספרות (03-1234567 / 052-1234567)";

        var prefix = m[1];
        if (prefix.length === 2) {
            if (!/^0[0-9]$/.test(prefix)) return "קידומת דו-ספרתית לא תקינה";
            if (prefix[1] === "5" || prefix[1] === "7")
                return "05/07 חייב להיות קידומת תלת-ספרתית (למשל 052/072)";
        } else {
            if (!/^(05|07)\d$/.test(prefix)) return "קידומת תלת-ספרתית חייבת להתחיל ב-05x או 07x";
        }
        return "";
    }

    // ========= 2.9 Email (TEXT) =========
    // חובה; type=text; מותר רק letters/digits/-/_/@/. ; מתחיל באות;
    // אחרי @ אות; אחרי הנקודה האחרונה 2-3 ספרות.
    function validateEmail(v) {
        var t = (v || "").trim();

        if (!t) return "חובה למלא אימייל";
        if (hasHebrew(t)) return "אסור תווים בעברית";

        // תווים מותרים בלבד
        if (!/^[A-Za-z0-9_\-@.]+$/.test(t))
            return "מותר רק אותיות באנגלית, ספרות, -, _, @ ונקודה";

        // חייב להתחיל באות
        if (!/^[A-Za-z]/.test(t))
            return "האימייל חייב להתחיל באות";

        // חייב @ אחד בלבד
        var atCount = (t.match(/@/g) || []).length;
        if (atCount !== 1)
            return "חייב להיות @ אחד בלבד";

        // חייב נקודה
        if (t.indexOf(".") === -1)
            return "חובה לכלול נקודה (.)";

        // אחרי ה־@ חייבת להיות אות
        var parts = t.split("@");
        var afterAt = parts[1] || "";
        if (!/^[A-Za-z]/.test(afterAt))
            return "אחרי ה־@ חייבת להיות אות";

        // ✅ אחרי הנקודה האחרונה 2–3 אותיות (com / co / net וכו')
        if (!/\.[A-Za-z]{2,3}$/.test(t))
            return "אחרי הנקודה האחרונה חייבות להיות 2–3 אותיות";

        return "";
    }


    // ---------- validate all (for submit) ----------
    function validateAll() {
        var u = $("username"), p = $("psw"), r = $("psw-repeat");
        var fn = $("firstName"), ln = $("lastName"), dob = $("dob");
        var phone = $("phone"), email = $("email");

        var eU = u ? validateUsername(u.value) : "";
        var eP = p ? validatePassword(p.value) : "";
        var eR = r ? validateRepeatPassword(p ? p.value : "", r.value) : "";
        var eFN = fn ? validateName(fn.value) : "";
        var eLN = ln ? validateName(ln.value) : "";
        var eDOB = dob ? validateDob(dob.value) : "";
        var ePhone = phone ? validatePhone(phone.value) : "";
        var eEmail = email ? validateEmail(email.value) : "";

        if (u) setErr("username", "err-username", eU);
        if (p) setErr("psw", "err-psw", eP);
        if (r) setErr("psw-repeat", "err-psw-repeat", eR);
        if (fn) setErr("firstName", "err-firstName", eFN);
        if (ln) setErr("lastName", "err-lastName", eLN);
        if (dob) setErr("dob", "err-dob", eDOB);
        if ($("city")) setErr("city", "err-city", ""); // optional
        if (phone) setErr("phone", "err-phone", ePhone);
        if (email) setErr("email", "err-email", eEmail);

        return !(eU || eP || eR || eFN || eLN || eDOB || ePhone || eEmail);
    }

    // ---------- attach events ----------
    function attach() {
        var u = $("username"), p = $("psw"), r = $("psw-repeat");
        var fn = $("firstName"), ln = $("lastName"), dob = $("dob");
        var city = $("city"), phone = $("phone"), email = $("email");

        if (u) {
            ensureErr("username", "err-username");
            u.addEventListener("input", function () {
                setErr("username", "err-username", validateUsername(u.value));
            });
        }

        if (p) {
            ensureErr("psw", "err-psw");
            p.addEventListener("input", function () {
                setErr("psw", "err-psw", validatePassword(p.value));
                if (r) setErr("psw-repeat", "err-psw-repeat", validateRepeatPassword(p.value, r.value));
            });
        }

        if (r) {
            ensureErr("psw-repeat", "err-psw-repeat");
            r.addEventListener("input", function () {
                setErr("psw-repeat", "err-psw-repeat", validateRepeatPassword(p ? p.value : "", r.value));
            });
        }

        if (fn) {
            ensureErr("firstName", "err-firstName");
            fn.addEventListener("input", function () {
                setErr("firstName", "err-firstName", validateName(fn.value));
            });
        }

        if (ln) {
            ensureErr("lastName", "err-lastName");
            ln.addEventListener("input", function () {
                setErr("lastName", "err-lastName", validateName(ln.value));
            });
        }

        if (dob) {
            ensureErr("dob", "err-dob");
            dob.addEventListener("change", function () {
                setErr("dob", "err-dob", validateDob(dob.value));
            });
        }

        if (city) {
            ensureErr("city", "err-city");
            city.addEventListener("input", function () {
                setErr("city", "err-city", ""); // optional
            });
        }

        if (phone) {
            ensureErr("phone", "err-phone");
            phone.addEventListener("input", function () {
                setErr("phone", "err-phone", validatePhone(phone.value));
            });
        }

        if (email) {
            ensureErr("email", "err-email");
            email.addEventListener("input", function () {
                setErr("email", "err-email", validateEmail(email.value));
            });
        }

        // Block submit
        var any = email || phone || dob || ln || fn || r || p || u;
        var form = any ? any.closest("form") : null;
        if (form) {
            form.addEventListener("submit", function (e) {
                if (!validateAll()) e.preventDefault();
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", attach);
    } else {
        attach();
    }
})();
