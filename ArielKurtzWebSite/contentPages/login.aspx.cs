using System;

public partial class login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack)
        {
            string u = Request.Form["userName"];
            string p = Request.Form["password"];

            // הגנה קטנה נגד null
            if (u == null) u = "";
            if (p == null) p = "";

            // 3 משתמשים וסיסמאות קבועים (תשנה למה שהמורה דורש אם יש ספציפי)
            bool ok =
                (u == "Gilad" && p == "1968") ||
                (u == "Dana" && p == "1234") ||
                (u == "Noam" && p == "abcd");

            if (ok)
            {
                divMsg.InnerHtml = "ברוך הבא " + u;
                divMsg.Style["color"] = "green";
            }
            else
            {
                divMsg.InnerHtml = "שם משתמש לא מוכר או סיסמה שגויה";
                divMsg.Style["color"] = "red";
            }
        }
    }
}