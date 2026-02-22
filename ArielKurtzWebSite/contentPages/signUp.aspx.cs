using System;
using System.Web.UI.WebControls;

public partial class signUp : System.Web.UI.Page
{
    protected void btnSignUp_Click(object sender, EventArgs e)
    {
        Page.Validate("signup");
        if (!Page.IsValid) return;

        // אם הכל תקין - כאן תמשיך (שמירה/הפניה וכו')
        // Response.Redirect("login.aspx");
    }

    protected void cvNoTriple_ServerValidate(object source, ServerValidateEventArgs args)
    {
        string s = args.Value ?? "";
        args.IsValid = true;

        for (int i = 2; i < s.Length; i++)
        {
            if (s[i] == s[i - 1] && s[i - 1] == s[i - 2])
            {
                args.IsValid = false;
                return;
            }
        }
    }
}
