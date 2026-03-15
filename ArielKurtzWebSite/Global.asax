<%@ Application Language="C#" %>

<script runat="server">

    void Session_Start(object sender, EventArgs e)
    {
        Session["userName"] = "Visitor";
        Session["login"] = false;
    }

</script>