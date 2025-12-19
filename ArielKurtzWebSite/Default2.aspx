<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master"
    AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div class="auth-page">
        <div class="auth-card">

            <h1 class="auth-title">Sign Up</h1>
            <p class="auth-subtitle">Please fill in this form to create an account.</p>

            <hr class="auth-hr" />

            <label for="email"><b>Email</b></label>
            <input id="email" type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input id="psw" type="password" placeholder="Enter Password" name="psw" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input id="psw-repeat" type="password" placeholder="Repeat Password" name="psw-repeat" required />

            <div class="auth-row">
                <input id="remember" type="checkbox" checked="checked" name="remember" />
                <label for="remember">Remember me</label>
            </div>

            <p class="auth-note">
                By creating an account you agree to our
                <a href="#">Terms &amp; Privacy</a>.
            </p>

            <div class="auth-actions">
                <button type="button" class="btn-secondary">Cancel</button>
                <button type="submit" class="btn-primary">Sign Up</button>
            </div>

        </div>
    </div>

</asp:Content>


