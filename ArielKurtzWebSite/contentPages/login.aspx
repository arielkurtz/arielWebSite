<%@ Page Title="" Language="C#"
    MasterPageFile="~/MasterPage.master"
    AutoEventWireup="true"
    CodeFile="login.aspx.cs"
    Inherits="login" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="MainContent" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="auth-page">
        <div class="auth-card">

            <h1 class="auth-title">Login</h1>
            <p class="auth-subtitle">
                Please enter your username and password to log in.
            </p>

            <hr class="auth-hr" />

            <label for="username"><b>Username</b></label>
            <input id="username" type="text" placeholder="Enter Username" name="username" />

            <label for="password"><b>Password</b></label>
            <input id="password" type="password" placeholder="Enter Password" name="password" />

            <div class="auth-actions">
                <button type="reset" class="btn-secondary">Reset</button>
                <button type="submit" class="btn-primary">Submit</button>
            </div>

            <!-- Link to Sign Up -->
            <p class="auth-note">
                Don’t have an account?
                <a href="Default2.aspx">Sign Up</a>
            </p>

        </div>
    </div>

</asp:Content>
