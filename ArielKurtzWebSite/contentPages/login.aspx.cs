using System;
using System.Data.SqlClient;
using System.Configuration;

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

            string connStr = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database.mdf;Integrated Security=True";

            using (SqlConnection con = new SqlConnection(connStr))
            {
                string sql = "SELECT COUNT(*) FROM users WHERE username=@username AND password=@password";

                SqlCommand cmd = new SqlCommand(sql, con);
                cmd.Parameters.AddWithValue("@username", u);
                cmd.Parameters.AddWithValue("@password", p);

                con.Open();
                int count = (int)cmd.ExecuteScalar();

                if (count > 0)
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
}