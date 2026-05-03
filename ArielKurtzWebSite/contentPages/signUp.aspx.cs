using System;

public partial class signUp : System.Web.UI.Page
{
    protected void btnSignUp_Click(object sender, EventArgs e)
    {
        User u = new User();

        u.username = username.Text.Trim();
        u.password = psw.Text;

        u.firstName = Request.Form["firstName"];
        u.lastName = Request.Form["lastName"];
        u.dob = Request.Form["dob"];
        u.city = Request.Form["city"];
        u.phone = Request.Form["phone"];
        u.email = Request.Form["email"];

        Helper.ExecuteNonQuery(u.Insert());

        Session["userName"] = u.username;
        Session["login"] = true;

        Response.Redirect("~/contentPages/Edit.aspx");
    }
}