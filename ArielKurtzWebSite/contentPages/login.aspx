<%@ Page Title="" Language="C#"
    MasterPageFile="~/MasterPage.master"
    AutoEventWireup="true"
    CodeFile="login.aspx.cs"
    Inherits="login" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="head" runat="server">
    <style>
        .field-error{
            display:block;
            margin:4px 0 10px;
            font-size:12px;
            color:#d10000;
            min-height:16px;
        }
        .invalid{
            border:1px solid #d10000 !important;
            outline:none;
        }
        #divMsg{
            margin-top:10px;
            font-weight:700;
        }
    </style>
</asp:Content>

<asp:Content ID="MainContent" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="auth-page">
        <div class="auth-card">

            <h1 class="auth-title">Login</h1>
            <p class="auth-subtitle">Please enter your username and password to log in.</p>

            <hr class="auth-hr" />

            <!-- Username -->
            <label for="userName"><b>Username</b></label>
            <!-- חשוב: name="userName" כדי ש-Request.Form["userName"] יעבוד -->
            <input id="userName" name="userName" type="text" placeholder="Enter Username" />
            <small id="userNameMsg" class="field-error"></small>

            <!-- Password -->
            <label for="password"><b>Password</b></label>
            <!-- חשוב: name="password" כדי ש-Request.Form["password"] יעבוד -->
            <input id="password" name="password" type="password" placeholder="Enter Password" />
            <small id="passwordMsg" class="field-error"></small>

            <!-- הודעה מהשרת -->
            <div id="divMsg" runat="server"></div>

            <div class="auth-actions">
                <button type="reset" class="btn-secondary">Reset</button>
                <button type="submit" class="btn-primary">Submit</button>
            </div>

            <p class="auth-note">
                Don’t have an account?
                <a href="Default2.aspx">Sign Up</a>
            </p>

        </div>
    </div>

</asp:Content>