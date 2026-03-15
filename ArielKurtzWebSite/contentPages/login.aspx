<%@ Page Title="" Language="C#"
    MasterPageFile="~/MasterPage.master"
    AutoEventWireup="true"
    CodeFile="login.aspx.cs"
    Inherits="login" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript" src="/login.js?v=2"></script>

    <style>
        .field-error {
            display: block;
            font-size: 12px;
            color: red;
            margin-top: 4px;
            min-height: 16px;
        }

        .invalid {
            border: 1px solid red !important;
        }

        #divMsg {
            margin-top: 10px;
            font-size: 14px;
            font-weight: bold;
            min-height: 20px;
            color: red;
        }
    </style>
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
            <input id="username"
                   name="userName"
                   type="text"
                   placeholder="Enter Username"
                   oninput="userNameLoginVal()" />
            <small id="err-username" class="field-error"></small>

            <label for="password"><b>Password</b></label>
            <input id="password"
                   name="password"
                   type="password"
                   placeholder="Enter Password"
                   oninput="passwordLoginVal()" />
            <small id="err-password" class="field-error"></small>

            <div id="divMsg" runat="server"></div>

            <div class="auth-actions">
                <button type="reset" class="btn-secondary" onclick="clearLoginErrors()">Reset</button>
                <button type="submit" class="btn-primary" onclick="return submitFun();">Submit</button>
            </div>

            <p class="auth-note">
                Don’t have an account?
                <a href="signUp.aspx">Sign Up</a>
            </p>

        </div>
    </div>

</asp:Content>