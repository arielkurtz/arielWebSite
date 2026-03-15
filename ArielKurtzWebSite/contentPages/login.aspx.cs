using System;

public partial class login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack)
        {
            string u = Request.Form["userName"];
            string p = Request.Form["password"];

            if (u == null) u = "";
            if (p == null) p = "";

            bool ok =
                (u == "Gilad" && p == "R!47598") ||
                (u == "Dana" && p == "1234") ||
                (u == "Noam" && p == "abcd");

            if (ok)
            {
                Session["userName"] = u;
                Session["login"] = true;

                Response.Redirect("~/contentPages/Edit.aspx");
            }
            else
            {
                divMsg.InnerHtml = "שם משתמש לא מוכר או סיסמה שגויה";
                divMsg.Style["color"] = "red";
            }
        }
    }
}