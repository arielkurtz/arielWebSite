using System;
using System.Collections;

public partial class signUp : System.Web.UI.Page
{
    protected void btnSignUp_Click(object sender, EventArgs e)
    {
        string userName = username.Text.Trim();
        string password = psw.Text;

        Hashtable users = (Hashtable)Application["users"];

        if (!users.ContainsKey(userName))
        {
            users[userName] = password;
            Application["users"] = users;
        }

        Session["userName"] = userName;
        Session["login"] = true;

        Response.Redirect("~/Default4.aspx");
    }
}