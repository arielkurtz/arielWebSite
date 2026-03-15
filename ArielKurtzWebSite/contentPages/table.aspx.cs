using System;

public partial class Default3 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["login"] == null || (bool)Session["login"] == false)
        {
            Response.Redirect("~/contentPages/login.aspx");
        }
    }
}