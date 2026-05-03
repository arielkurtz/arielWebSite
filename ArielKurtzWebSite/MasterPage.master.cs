using System;

public partial class MasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["userName"] == null)
        {
            Session["userName"] = "Visitor";
        }

        lblUserStatus.Text = "Welcome " + Session["userName"].ToString();

        bool isLoggedIn = false;

        if (Session["login"] != null)
            isLoggedIn = (bool)Session["login"];

        if (isLoggedIn)
        {
            // קיימים
            lnkTable.Visible = true;
            btnLogout.Visible = true;
            lnkLogin.Visible = false;
            lnkSignUp.Visible = false;

            // חדשים
            lnkBasics.Visible = true;
            lnkTimeline.Visible = true;
            lnkSound.Visible = true;
        }
        else
        {
            // קיימים
            lnkTable.Visible = false;
            btnLogout.Visible = false;
            lnkLogin.Visible = true;
            lnkSignUp.Visible = true;

            // חדשים
            lnkBasics.Visible = false;
            lnkTimeline.Visible = false;
            lnkSound.Visible = false;
        }
    }

    protected void btnLogout_Click(object sender, EventArgs e)
    {
        Session["userName"] = "Visitor";
        Session["login"] = false;

        Response.Redirect("~/contentPages/Edit.aspx");
    }
}